<?php
/**
 * Theme Functions.
 *
 * @package advance-gb-learning
 */

if ( ! defined( 'ADVANCE_GB_LEARNING_THEME_VERSION' ) ) {
	define( 'ADVANCE_GB_LEARNING_THEME_VERSION', '1.0' );
}

if ( ! defined( 'ADVANCE_GB_LEARNING_THEME_PATH' ) ) {
	define( 'ADVANCE_GB_LEARNING_THEME_PATH', __DIR__ );
}

if ( ! defined( 'ADVANCE_GB_LEARNING_THEME_URL' ) ) {
	define( 'ADVANCE_GB_LEARNING_THEME_URL', get_template_directory_uri() );
}

if ( ! defined( 'ADVANCE_GB_LEARNING_BUILD_URI' ) ) {
	define( 'ADVANCE_GB_LEARNING_BUILD_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build' );
}

if ( ! defined( 'ADVANCE_GB_LEARNING_BUILD_PATH' ) ) {
	define( 'ADVANCE_GB_LEARNING_BUILD_PATH', untrailingslashit( get_template_directory() ) . '/assets/build' );
}

if ( ! defined( 'ADVANCE_GB_LEARNING_SRC_BLOCK_DIR_PATH' ) ) {
	define( 'ADVANCE_GB_LEARNING_SRC_BLOCK_DIR_PATH', get_template_directory() . '/assets/build/blocks' );
}

/**
 * Load up the class autoloader.
 */
require_once ADVANCE_GB_LEARNING_THEME_PATH . '/includes/helpers/autoloader.php';

/**
 * Theme Init
 *
 * Sets up the theme.
 *
 * @return void
 * @since 1.0.0
 */
function advance_gb_learning_get_theme_instance() {
	\ADVANCE_GB_LEARNING\Includes\Advance_Gb_Learning::get_instance();
}

advance_gb_learning_get_theme_instance();
