<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'samplepra' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'pRE^?`Uzh$]<N?6(|Z=Lrj;OCN;k#KotOPO9@n]ce3YzNzHo+(cXvKpQ[a>ivAW<' );
define( 'SECURE_AUTH_KEY',  'RUC,lAwEsf5ljL|~IEAX}{?yjP|w-YIGOc&E=89J#z9+L2Eeix4.u(=!8]La6D;Q' );
define( 'LOGGED_IN_KEY',    '<m^:rx AJEm^/M1%Zw9@^TO;uC+CAJq34p8EkCW}[*sS:swPM1M(9DT{y~:k(jT%' );
define( 'NONCE_KEY',        '//y~YO@t&uz:;MFVO64K!B=vKA}S,zaL{T]-ue.YkHCJa;7T?lp+%y5pLv6J$J*#' );
define( 'AUTH_SALT',        '{WfRo#_8Bd.4=RTmBf%*t7WnDNW:CtjIf`_/~B^+6D)b up{i|d,}U6H5A6b11yS' );
define( 'SECURE_AUTH_SALT', 'ANd}QX&F%Vk=IVCFwwi*=CM))5}NKY[e#CN5p}^g@TK:3ELN]sDF}&r%*{YxJibG' );
define( 'LOGGED_IN_SALT',   'u=^F%]GUjGB!U~l;xo`CE`+01hvW)1mcyj4a?F )TH*hwiV+O!,)EAk3{)0hES%h' );
define( 'NONCE_SALT',       'W<8W!8jP?Bu~G$*pVeiVVk7u+D1oCj&)N3G{yi;-::D# E3r+a )ua0iU**G`Bwo' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
ini_set('display_errors','Off');
ini_set('error_reporting', E_ALL );
define('WP_DEBUG', false);
define('WP_DEBUG_DISPLAY', false);
/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
