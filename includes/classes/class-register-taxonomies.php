<?php
/**
 * Register Custom Taxonomies
 *
 * @package advance-gb-learning
 */

namespace ADVANCE_GB_LEARNING\Includes;

use ADVANCE_GB_LEARNING\Includes\Traits\Singleton;

/**
 * Class for register taxonomies.
 */
class Register_Taxonomies {
	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'init', array( $this, 'register_year_taxonomy' ) );

	}

	/**
	 * Register Taxonomy Year.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_year_taxonomy() {

		$labels = array(
			'name'              => _x( 'Years', 'taxonomy general name', 'advance-gb-learning' ),
			'singular_name'     => _x( 'Year', 'taxonomy singular name', 'advance-gb-learning' ),
			'search_items'      => __( 'Search Years', 'advance-gb-learning' ),
			'all_items'         => __( 'All Years', 'advance-gb-learning' ),
			'parent_item'       => __( 'Parent Year', 'advance-gb-learning' ),
			'parent_item_colon' => __( 'Parent Year:', 'advance-gb-learning' ),
			'edit_item'         => __( 'Edit Year', 'advance-gb-learning' ),
			'update_item'       => __( 'Update Year', 'advance-gb-learning' ),
			'add_new_item'      => __( 'Add New Year', 'advance-gb-learning' ),
			'new_item_name'     => __( 'New Year Name', 'advance-gb-learning' ),
			'menu_name'         => __( 'Year', 'advance-gb-learning' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Movie Release Year', 'advance-gb-learning' ),
			'hierarchical'       => false,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_nav_menus'  => true,
			'show_tagcloud'      => true,
			'show_in_quick_edit' => true,
			'show_admin_column'  => true,
			'show_in_rest'       => true,
		);
		register_taxonomy( 'movie-year', array( 'movies' ), $args );

	}

}
