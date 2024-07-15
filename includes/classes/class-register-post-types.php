<?php
/**
 * Register Post Types
 *
 * @package advance-gb-learning
 */

namespace ADVANCE_GB_LEARNING\Includes;

use ADVANCE_GB_LEARNING\Includes\Traits\Singleton;

/**
 * Class for register post types.
 */
class Register_Post_Types {
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
		add_action( 'init', array( $this, 'register_movie_cpt' ), 0 );

	}

	/**
	 * Register Custom Post Type Movie.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_movie_cpt() {

		$labels = array(
			'name'                  => _x( 'Movies', 'Post Type General Name', 'advance-gb-learning' ),
			'singular_name'         => _x( 'Movie', 'Post Type Singular Name', 'advance-gb-learning' ),
			'menu_name'             => _x( 'Movies', 'Admin Menu text', 'advance-gb-learning' ),
			'name_admin_bar'        => _x( 'Movie', 'Add New on Toolbar', 'advance-gb-learning' ),
			'archives'              => __( 'Movie Archives', 'advance-gb-learning' ),
			'attributes'            => __( 'Movie Attributes', 'advance-gb-learning' ),
			'parent_item_colon'     => __( 'Parent Movie:', 'advance-gb-learning' ),
			'all_items'             => __( 'All Movies', 'advance-gb-learning' ),
			'add_new_item'          => __( 'Add New Movie', 'advance-gb-learning' ),
			'add_new'               => __( 'Add New', 'advance-gb-learning' ),
			'new_item'              => __( 'New Movie', 'advance-gb-learning' ),
			'edit_item'             => __( 'Edit Movie', 'advance-gb-learning' ),
			'update_item'           => __( 'Update Movie', 'advance-gb-learning' ),
			'view_item'             => __( 'View Movie', 'advance-gb-learning' ),
			'view_items'            => __( 'View Movies', 'advance-gb-learning' ),
			'search_items'          => __( 'Search Movie', 'advance-gb-learning' ),
			'not_found'             => __( 'Not found', 'advance-gb-learning' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'advance-gb-learning' ),
			'featured_image'        => __( 'Featured Image', 'advance-gb-learning' ),
			'set_featured_image'    => __( 'Set featured image', 'advance-gb-learning' ),
			'remove_featured_image' => __( 'Remove featured image', 'advance-gb-learning' ),
			'use_featured_image'    => __( 'Use as featured image', 'advance-gb-learning' ),
			'insert_into_item'      => __( 'Insert into Movie', 'advance-gb-learning' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Movie', 'advance-gb-learning' ),
			'items_list'            => __( 'Movies list', 'advance-gb-learning' ),
			'items_list_navigation' => __( 'Movies list navigation', 'advance-gb-learning' ),
			'filter_items_list'     => __( 'Filter Movies list', 'advance-gb-learning' ),
		);
		$args   = array(
			'label'               => __( 'Movie', 'advance-gb-learning' ),
			'description'         => __( 'The movies', 'advance-gb-learning' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-admin-post',
			'supports'            => array(
				'title',
				'editor',
				'excerpt',
				'thumbnail',
				'revisions',
				'author',
				'comments',
				'trackbacks',
				'page-attributes',
				'custom-fields',
			),
			'taxonomies'          => array(),
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_position'       => 5,
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'hierarchical'        => false,
			'exclude_from_search' => false,
			'show_in_rest'        => true,
			'publicly_queryable'  => true,
			'capability_type'     => 'post',
		);

		register_post_type( 'movies', $args );

	}


}
