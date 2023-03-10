<?php

/**
 * Resets all the value of customizer
 *
 * @since 1.0
 *
 * @package Maglist WordPress Theme
 */

if ( !function_exists( 'maglist_get_setting_id' ) ) :
	add_action(
		Maglist_Helper::fn_prefix( 'customize_register_start' ),
		'maglist_get_setting_id',
		30,
		2
	);
	/**
	 * Get all the setting id to reset the data.
	 *
	 * @return array
	 * @since 1.0
	 *
	 * @package Maglist WordPress theme
	 */
	function maglist_get_setting_id( $instance, $wp_customize ) {
		Maglist_Customizer::set(array(
			# Theme option
			'panel' => 'panel',
			# Theme Option > Reset options
			'section' => array(
				'id'    => 'reset-section',
				'title' => esc_html__( 'Reset Options', 'maglist' ),
				'priority' => 130
			),
			'fields' => array(
				array(
					'id' 	      => 'reset-options',
					'type'        => 'reset',
					'settings'    => array_keys( $instance::$settings ),
					'label'       => esc_html__( 'Reset', 'maglist' ),
					'description' => esc_html__( 'Reseting will delete all the data. Once reset, you will not be able to get back those data.', 'maglist' ),
				),
			),
		));
	}
endif;
