<?php

/*
Plugin Name: Partners Grid
*/

const PARTNERS_GRID_DIR = '/partners-grid/build/';

function get_post_partners() {
    $partners = array();

    $posts = get_posts([
        'post_type' => 'partner',
        'numberposts' => -1,
        'orderby' => 'title',
        'order' => 'ASC',
        'post_status' => 'publish',
        'suppress_filters' => 0
    ]);

    foreach($posts as $post) {
        $logofield = get_field_object('logo', $post->ID);
        $urlfield = get_field_object('url', $post->ID);
        // Create the object
        $partner = new \stdClass();
        $partner->name = $post->post_title;
        $partner->logo = $logofield['value'];
        $partner->url = $urlfield['value'];
        // Push to the array
        array_push($partners, $partner);
    }

    $json = json_encode($partners, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

    return $json;
}


function partnersgrid_register_block() {
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.bundle.asset.php');
    $css_file = plugins_url() . PARTNERS_GRID_DIR . 'styles.css';
    wp_enqueue_style('partnersgridblock-styles', $css_file);

    wp_register_script(
        'partnersgrid',
        plugins_url('build/index.bundle.js', __FILE__),
        $asset_file['dependencies'],
		$asset_file['version']
    );

    wp_localize_script(
        'partnersgrid',
        'PARTNERS_GRID',
        ['partners' => get_post_partners()]
    );

    register_block_type('partnersgrid/block', array(
        'editor_script' => 'partnersgrid'
    ));
}

add_action('init', 'partnersgrid_register_block');