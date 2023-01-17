<?php

/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @since 1.0
 *
 * @package Maglist WordPress Theme
 */

get_header();
do_action( Maglist_Helper::fn_prefix( 'before-content' ) );?>

<div id="content" class="container">
	<div class="row">
		<div id="primary" class="<?php echo esc_attr( Maglist_Theme::is_sidebar_active() ? 'col-md-8 col-lg-8 content-order' : 'col-lg-12' ); ?>">
			<main id="main" class="site-main">
				<?php
				while ( have_posts() ) :
					the_post();
				?>
					<article <?php Maglist_Helper::schema_body( 'article' ); ?> id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
						<div class="entry-content">
							<?php the_content(); ?>
						</div><!-- .entry-content -->
						<?php 
							Maglist_Helper::post_content_navigation();

						# If comments are open or we have at least one comment, load up the comment template.
						if ( comments_open() || get_comments_number() ) {
							comments_template();
						}
						?>
					</article>
				<?php endwhile; ?>
			</main><!-- #main -->
		</div><!-- #primary -->
		<?php Maglist_Theme::the_sidebar(); ?>
	</div>
</div>
<?php
do_action( Maglist_Helper::fn_prefix( 'after-content' ) );
get_footer();
