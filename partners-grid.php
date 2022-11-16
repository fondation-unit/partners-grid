<?php

/*
Plugin Name: Partners Grid
*/

const PARTNERS_GRID_DIR = '/partners-grid/build/';

function get_post_partners() {
    $arrayPartners = array();

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
        $reseaufield = get_field_object('reseau', $post->ID);
        // Create the object
        $partner = new \stdClass();
        $partner->name = $post->post_title;
        $partner->logo = $logofield['value'];
        $partner->url = $urlfield['value'];
        $partner->reseau = isset($reseaufield['value']) ? $reseaufield['value'] : null;
        // Push to the array
        array_push($arrayPartners, $partner);
    }

    // Récupération des objets appartenant à un réseau
    $arrayReseaux = array_filter($arrayPartners, function($var) {
        return isset($var->reseau) ? $var : null;
    });

    // Récupération des objets sans réseau
    $arrayNotReseaux = array_filter($arrayPartners, function($var) {
        return !isset($var->reseau) ? $var : null;
    });

    // Récupération des noms uniques de réseaux
    $reseaux = array();
    foreach($arrayReseaux as $objectReseau) {
        if (!in_array($objectReseau->reseau, $reseaux)) {
            array_push($reseaux, $objectReseau->reseau);
        }
    }

    // Création d'un tableau contenant les réseaux avec leurs membres
    $reseauxArray = array();
    foreach($reseaux as $name) {
        $reseau = new \stdClass();
        $reseau->name = $name;
        $reseau->type = "reseau";
        $reseau->items = array_values(
            array_filter($arrayReseaux, function($item) use ($reseau) {
                return $item->reseau == $reseau->name ? $item : null;
            })
        );
        array_push($reseauxArray, $reseau);
    }

    $arrayResult = array_merge($arrayNotReseaux, $reseauxArray);

    $json = json_encode($arrayResult, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

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