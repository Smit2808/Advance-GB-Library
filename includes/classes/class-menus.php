<?php
/**
 * Register Menus.
 *
 * @package advance-gb-learning
 */

namespace ADVANCE_GB_LEARNING\Includes;

use ADVANCE_GB_LEARNING\Includes\Traits\Singleton;

/**
 * Class Menus
 */
class Menus {
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
		add_action( 'init', array( $this, 'register_menus' ) );
	}

	/**
	 * Register Menus
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_menus() {
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'advance-gb-learning' ),
			)
		);

	}

}
