<?php

/*
Plugin Name: Partners Grid
*/

const PARTNERS_GRID_DIR = '/partners-grid/build/';

function get_post_partners() {
    $partnersArray = array();

    $args = array(
        'post_type' => 'partner',
        'numberposts' => -1,
        'orderby' => 'rand',
        'suppress_filters' => 0
    );

    $queryResults = new WP_Query($args);

    if ($queryResults->have_posts()) {
        $count = 0;
        while ($queryResults->have_posts()) {
            $queryResults->the_post();
            $partnersArray[$count]['title'] = get_the_title();
            $partnersArray[$count]['logo'] = get_field('logo');
            $partnersArray[$count]['url'] = get_field('url');

            $count++;
        };

        $json = json_encode($partnersArray, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    };

    $json = '';

    return $json;
}


function partnersgrid_register_block() {
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.bundle.asset.php');
    $css_file = plugins_url() . PARTNERS_GRID_DIR . 'styles.css';
    wp_enqueue_style('partnersgridblock-styles', $css_file);

    wp_localize_script(
        'partnersgrid',
        'PARTNERSGRID',
        ['partners' => get_post_partners()]
    );

    wp_register_script(
        'partnersgrid',
        plugins_url('build/index.bundle.js', __FILE__),
        $asset_file['dependencies'],
		$asset_file['version']
    );

    register_block_type('partnersgrid/block', array(
        'editor_script' => 'partnersgrid'
    ));
}

add_action('enqueue_block_editor_assets', 'partnersgrid_register_block');