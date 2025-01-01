<?php
/**
 * Registers the advance-gb-learning/posts-listing-block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package advance-gb-learning
 */

namespace ADVANCE_GB_LEARNING\Blocks;

use ADVANCE_GB_LEARNING\Includes\Block_Base;
use WP_Block;

class Posts_Listing_Block extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'posts-listing-block';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {
		add_filter( 'advance_gb_learning_gutenberg_blocks_config', array( $this, 'localize_block_data' ) );
		add_action( 'rest_api_init', array( $this, 'api_for_posts_data_endpoint' ) );
	}

	/**
	 * Register custom api endpoints to fetch posts data.
	 *
	 * @since 1.0.0
	 */
	public function api_for_posts_data_endpoint() {

		register_rest_route(
			'agb_api',
			'/request/all_posts',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'agb_get_all_posts_with_params' ),
				'permission_callback' => '__return_true',
			)
		);

		register_rest_route(
			'agb_api',
			'/request/all_post_categories',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'agb_get_all_posts_categories' ),
				'permission_callback' => '__return_true',
			)
		);

		register_rest_route(
			'agb_api',
			'/request/all_post_tags',
			array(
				'methods'             => 'GET',
				'callback'            => array( $this, 'agb_get_all_posts_tags' ),
				'permission_callback' => '__return_true',
			)
		);

	}

	/**
	 * List of terms.
	 *
	 * @since 1.0.0
	 */
	public function agb_get_all_posts_categories() {
		$result = array();

		$post_categories = get_categories();

		if ( ! empty( $post_categories ) ) {
			foreach ( $post_categories as $post_category ) {
				$result[] = array(
					'name' => $post_category->name,
					'slug' => $post_category->slug,
				);
			}
		}

		return new \WP_REST_Response( $result, 200 );
	}

	/**
	 * Get all posts tags
	 */
	public function agb_get_all_posts_tags() {
		$result = array();

		$post_tags = get_tags();

		if ( ! empty( $post_tags ) ) {
			foreach ( $post_tags as $post_tag ) {
				$result[] = array(
					'name' => $post_tag->name,
					'slug' => $post_tag->slug,
				);
			}
		}

		return new \WP_REST_Response( $result, 200 );
	}

	/**
	 * List of posts by categories and tag.
	 *
	 * @param array $args.
	 */
	public function query_of_all_posts_by_terms( $args ) {
		$query_args = array(
			'post_type'      => 'post',
			'post_status'    => 'publish',
			'posts_per_page' => -1,
		);

		if ( ! empty( $args['post_category'] ) ) {
			$query_args['category_name'] = $args['post_category'];
		}

		if ( ! empty( $args['post_tag'] ) ) {
			$query_args['tag'] = $args['post_tag'];
		}
		return $this->fetchPostsByCatType( $query_args );
	}


	/**
	 * List of posts by cat term.
	 *
	 * @param array $args arguments.
	 */
	public function fetchPostsByCatType( $args ) {
		$result = array();

		$query = new \WP_Query( $args );

		if ( $query->have_posts() ) {

			$i = 0;

			while ( $query->have_posts() ) {

				$query->the_post();

				$block_post_id = get_the_ID();
				$block_title   = get_the_title();

				$result[ $i ]['id']    = $block_post_id;
				$result[ $i ]['title'] = $block_title;

				$i++;
			}
		}

		return new \WP_REST_Response( $result, 200 );
	}

	/**
	 * Get posts with params.
	 *
	 * @param \WP_REST_Request $request reset request.
	 */
	public function agb_get_all_posts_with_params( \WP_REST_Request $request ) {
		$arg                  = array();
		$arg['post_category'] = $request->get_param( 'post_category' );
		$arg['post_tag']      = $request->get_param( 'post_tag' );
		return $this->query_of_all_posts_by_terms( $arg );
	}

	/**
	 * Localize template data.
	 *
	 * @param array $blocks_config Block configuration.
	 * @return array Updated block configuration.
	 */
	public function localize_block_data( array $blocks_config ): array {
		// Merge your block data into blocks_config.
		return array_merge(
			$blocks_config,
			array(
				'posts_listing_block_config' => array(
					'data_key' => 'data_value',
				),
			)
		);
	}

	/**
	 * Render block.
	 *
	 * @param array    $attributes   Block attributes.
	 * @param string   $content      Block content.
	 * @param WP_Block $block        Block object.
	 * @return string
	 */
	public function render_callback(
		// phpcs:disable VariableAnalysis.CodeAnalysis.VariableAnalysis.UnusedVariable
		array $attributes,
		string $content,
		WP_Block $block
		// phpcs:enable
	): string {

		$selectedposts       = ! empty( $attributes['currentPostID'] ) ? json_decode( $attributes['currentPostID'] ) : array();
		$numberofpost        = ! empty( $attributes['numberOfPosts'] ) ? $attributes['numberOfPosts'] : 7;
		$title_color         = ! empty( $attributes['titleColor'] ) ? $attributes['titleColor'] : '#000000';
		$heading_color         = ! empty( $attributes['headingColor'] ) ? $attributes['headingColor'] : '#000000';
		$bg_color         = ! empty( $attributes['bgColor'] ) ? $attributes['bgColor'] : '#fff';
		$content_bg_color         = ! empty( $attributes['contentBgColor'] ) ? $attributes['contentBgColor'] : '#fff';
		$btn_bg_color         = ! empty( $attributes['btnBgColor'] ) ? $attributes['btnBgColor'] : '#0b2c56';
		$btn_text_color         = ! empty( $attributes['btnTextColor'] ) ? $attributes['btnTextColor'] : '#000000';
		$selectedposts_array = ! empty( $selectedposts ) ? wp_list_pluck( $selectedposts, 'value' ) : array();
		$selected_category   = ! empty( $attributes['selectedCategory'] ) ? $attributes['selectedCategory'] : '';
		$selected_tag        = ! empty( $attributes['selectedTag'] ) ? $attributes['selectedTag'] : '';
		$read_more_btn_text  = ! empty( $attributes['readMoreBtnText'] ) ? $attributes['readMoreBtnText'] : __( 'Read More', 'advance-gb-learning' );

		$bg_style = 'background-color: ' . $bg_color . ';';
		$style_heading_attr = 'color: ' . $heading_color . ';';
		$post_content_bg_style = 'background-color: ' . $content_bg_color . ';';
		$style_post_title_attr = 'color: ' . $title_color . ';';
		$style_btn_bg_attr = 'background-color: ' . $btn_bg_color . ';';
		$style_btn_text_attr = 'color: ' . $btn_text_color . ';';

		$wrapper_attributes = get_block_wrapper_attributes(
			array(
				'class' => 'posts-listing-block',
				'id'    => $attributes['blockID'],
				'style' => $bg_style,
			)
		);

		$query_args = array(
			'posts_per_page' => $numberofpost,
			'post_type'      => 'post',
			'post_status'    => 'publish',
		);

		if ( ! empty( $selected_category ) ) {
			$query_args['category_name'] = $selected_category;
		}

		if ( ! empty( $selected_tag ) ) {
			$query_args['tag'] = $selected_tag;
		}

		if ( ! empty( $selectedposts_array ) ) {
			$query_args['post__in'] = $selectedposts_array;
			$query_args['orderby']  = 'post__in';
		}

		$query = new \WP_Query( $query_args );
		ob_start();
		?>
			<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
				<div class="container">
					<div class="posts-listing-block__top">
						<?php
						if ( $attributes['displayTitle'] && ! empty( $attributes['heading'] ) ) {
							?>
							<div class="post-grid-slider__title">
								<h2 style="<?php echo esc_attr( $style_heading_attr ); ?>"><?php echo wp_kses_post( $attributes['heading'] ); ?></h2>
							</div>
							<?php
						}
						?>
					</div>
					<?php if ( $query->have_posts() ) { ?>
						<div class="posts-listing-block__items-wrapper">
							<?php
							while ( $query->have_posts() ) {
								$query->the_post();
								$title = wp_trim_words( get_the_title(), 8, '...' );
								?>
								<div class="posts-listing-block__item">
									<div class="posts-listing-block__post-img">
										<a href="<?php echo esc_url( get_the_permalink() ); ?>">
											<?php
											if ( has_post_thumbnail() ) {
												the_post_thumbnail( 'full' );
											} else {
												?>
												<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/src/blocks/posts-listing-block/placeholder-image.jpg' ); ?>" alt="placeholder image">
												<?php
											}
											?>
										</a>
									</div>
									<div class="posts-listing-block__post-detail-wrap" style="<?php echo esc_attr( $post_content_bg_style ); ?>">
										<div class="posts-listing-block__post-title">
											<h6>
												<a style="<?php echo esc_attr( $style_post_title_attr ); ?>" href="<?php echo esc_url( get_the_permalink() ); ?>">
													<?php echo esc_html( $title ); ?>
												</a>
											</h6>
										</div>
										<?php
										if ( $attributes['displayReadmoreBtn'] ) {
											?>
												<div class="posts-listing-block__post-read-more" style="<?php echo esc_attr( $style_btn_bg_attr ); ?>">
													<a style="<?php echo esc_attr( $style_btn_text_attr ); ?>" href="<?php echo esc_url( get_the_permalink() ); ?>"><?php echo esc_html( $read_more_btn_text ); ?></a>
												</div>
											<?php
										}
										?>
									</div>
								</div>
								<?php
							}
							?>
						</div>
						<?php
					} else {
						?>
						<div class="no-article-found-div">
							<p class="no-post-found"><?php esc_html_e( 'No posts found.', 'advance-gb-learning' ); ?></p>
						</div>
						<?php
					}
					?>
				</div>
			</div>
		<?php
		$html = ob_get_clean();
		return $html;
	}
}
