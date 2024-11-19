<?php
/**
 * The template for displaying the footer
 *
 * @package advance-gb-learning
 */

?>

	<footer id="colophon" class="site-footer u-bg-gray  u-flex u-justify-content-center u-padding-a30">
		<div class="site-info u-primary-text-color">
			<a class="u-link-text-color" href="<?php echo esc_url( __( '#', 'advance-gb-learning' ) ); ?>">
				<?php
				/* translators: %s: CMS name, i.e. WordPress. */
				printf( esc_html__( 'Proudly powered by %s', 'advance-gb-learning' ), 'WordPress' );
				?>
			</a>
			<span class="sep"> | </span>
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'advance-gb-learning' ), 'Advance GB Learning', '<a class="u-link-text-color" href="https://profiles.wordpress.org/smit08/">Smit</a>' );
				?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
