<?php
/**
 * Registers the advance-gb-learning/team-members block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package advance-gb-learning
 */

namespace ADVANCE_GB_LEARNING\Blocks;

use ADVANCE_GB_LEARNING\Includes\Block_Base;

/**
 *  Class for the advance-gb-learning/team-members block.
 */
class Team_Members_Block extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'team-members-block';
	}
}
