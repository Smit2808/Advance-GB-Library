<?php
/**
 * Template part for displaying a message that posts cannot be found
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package advance-gb-learning
 */

?>

<section class="no-results not-found advance-gb-learning-post-article u-margin-t50 u-margin-b50 u-margin-t50@max-767 u-margin-b50@max-767 u-bg-white u-padding-a15">
	<header class="page-header">
		<h1 class="page-title"><?php esc_html_e( 'Nothing Found', 'advance-gb-learning' ); ?></h1>
	</header><!-- .page-header -->

	<div class="page-content">
		<?php
		if ( is_home() && current_user_can( 'publish_posts' ) ) :

			printf(
				'<p>' . wp_kses(
					/* translators: 1: link to WP admin new post page. */
					__( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'advance-gb-learning' ),
					array(
						'a' => array(
							'href' => array(),
						),
					)
				) . '</p>',
				esc_url( admin_url( 'post-new.php' ) )
			);

		elseif ( is_search() ) :
			?>

			<p class="u-margin-t10 u-margin-b10"><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'advance-gb-learning' ); ?></p>
			<?php
			get_search_form();

		else :
			?>

			<p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'advance-gb-learning' ); ?></p>
			<?php
			get_search_form();

		endif;
		?>
	</div><!-- .page-content -->
</section><!-- .no-results -->
