<?php

/*
Plugin Name: Partners Grid
*/

const partnersgrid_DIR = '/partners-grid/build/';

function partnersgrid_register_block() {
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.bundle.asset.php');
    $css_file = plugins_url() . partnersgrid_DIR . 'styles.css';
    wp_enqueue_style('partnersgridblock-styles', $css_file);

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