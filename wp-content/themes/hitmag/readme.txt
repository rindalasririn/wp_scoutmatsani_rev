=== HitMag ===

Contributors: Pubudu Malalasekara
Requires at least: 4.7
Tested up to: 6.1
Requires PHP: 5.3
Stable tag: 1.3.4
License: GNU General Public License v2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

HitMag WordPress Theme, Copyright 2017 Pubudu Malalasekara
HitMag is distributed under the terms of the GNU GPL

== Description ==

HitMag is a stylish and powerful theme crafted for magazines, newspapers or personal blogs. HitMag comes with a handful of options to customize your site the way you want. Free version has included a magazine homepage layout, 4 different style blog listing layouts and main color options. Not only that, it comes with so many handful of features like author details box, Related posts after articles and control post metadata. All those features and options ensures that HitMag is not just another free WordPress theme but a powerful theme that fulfills all of the basic needs. See all the theme information at https://themezhut.com/themes/hitmag/

== Installation ==

1. In your admin panel, go to Appearance > Themes and click the Add New button.
2. Click Upload and Choose File, then select the theme's .zip file. Click Install Now.
3. Click Activate to use your new theme right away.
4. Go to Appearance > Customize to customize your theme.

== Frequently Asked Questions ==

= 1. How to create the Magazine Homepage? =

Go to Pages > Add New in the WordPress Dashboard
Give it a name whatever you want. eg : Home.
Then from the page attributes options box select the "Magazine Homepage" for Template.
Then Go to Settings > Reading in the WordPress Dashboard and select the option "a static page" which is under the heading “Front Page Displays”.
Then Select the page that you created from the “Front Page” drop down. eg: Home

= 2. How to add a blog post page when magazine homepage is activated? =

Go to Pages > Add New in the WordPress Dashboard
Give it a name whatever you want. eg : Blog.
Then from the page attributes options box select the Template as Default Template.
Then Go to Settings > Reading in the WordPress Dashboard and select the option “A static page” which is under the heading “Front Page Displays”.
Then Select the page that you created from the “Blog Page” drop down . eg: Blog.

= 3. How to make my theme look like the demo? =

First of all create a magazine homepage as described above.
Then Drag and drop HitMag: Magazine Posts ( Style 1 ), HitMag: Magazine Posts ( Style 2 ) and HitMag: Magazine Posts ( Style 3 )
widgets to the "Magazine Homepage" widget area from Dashboard > Appearance > Widgets.

= 4. Does this theme support any plugins? =

Following are the list of supported plugins.
Contact Form 7
Jetpack
Font Awesome 4 Menus

== Changelog ==

= 1.3.4 =
* Fix: Flexslider did not load properly when the magazine page template has not assigned as the front page.

= 1.3.3 =
* Now Google Fonts are loaded from locally to comply with GDPR law.

= 1.3.2 =
* Now flexslider and magnific popup jquery libraries are loaded only where needed. 
* Updated kirki framework.
* Added alt attribute to slider thumbnails.
* Added screen-reader-text for the archive read more button to improve SEO.
* Tested with WordPress 5.9
* Fixed a theme styling issue with the social icon block.

= 1.3.1 =
* Changed the width of the block widget editor area to have a better idea about Post Widgets.
* Fixed a translation issue.

= 1.3.0 =
* Added theme support for responsive embeds.
* Added a new block style for the Gutenberg heading block to be used as widget titles.
* Added custom styles for search block.

= 1.2.9 =
* Fixed a php issue on the Featured Slider. ( Trying to access array offset on value of type bool )
* Fixed few jQuery deprecated issues.

= 1.2.8 =
* HitMag is successfully tested with WordPress 5.5
* Fixed compatibility issue with WordPress 5.5. Adapt customizer color-picker script with latest version of WP 5.5
* Added missing translation word "by" in the translation file.
* Fixed few things according to the Theme Reveiw plugin.
* Reduced screenshot file size.

= 1.2.7 =
* Renamed font awesome handle name due to font awesome conflicts with plugins.

= 1.2.6 =
* Added 'no_found_rows' => true parameter for posts widgets to improve performance.
* Added wp_body_open() function to the header.
* Fixed undefined index issue that comes with posts widgets. 
* Fixed customizer "Display Site Title and Tagline" checkbox not working issue.
* Removed unwanted files/translations from integrated kirki plugin.

= 1.2.5 =
* Feature: Now it is possible to set Header image as Header Background image.

= 1.2.4 =
* Changed readme file as per WPTRT requirements.

= 1.2.3 =
* Added an option to display full content on blog/archive pages.
* Improved starter content.

= 1.2.2 =
* Added new theme hooks to be used on child themes.
* Improved some stylings.

= 1.2.1 =
* Added Gutenberg Support.

= 1.2.0 =
* Updated Popular Posts, Comments, Tags widget to display only approved comments.
* Used (document).ready() method instead of (window).load() method for slider.
* Used localized date method instead of date on top bar. 
* Fixed the layout issue that comes when adding elements inside posts.

= 1.1.9 =
* Renamed "sticky posts" widget controls.
* Fixed layout issue when there is no posts on "HitMag_Single_Category_Posts" widget. 

= 1.1.8 =
* Added two page templates to be used on page builders.
* Fixed "Read More" button's active state color issue.
* Fixed footer widget links hover state color issue.

= 1.1.7 =
* Changed kirki version due to a compatiblity issue on versions < 4.9

= 1.1.6 =
* Updated kirki library.
* Fixed some issues in mobile navigation.

= 1.1.5 =
* Changed few stylings.

= 1.1.4 =
* Added search box to the mobile navigation menu.
* Added stylings for default widgets.
* Changed the header sidebar height.
* Added some stylings to WooCommerce.

= 1.1.3 =
* Added WooCommerce Support.

= 1.1.2 =
* Added yelp icon.
* Fixed some styling issues in blog posts listings.

= 1.1.1 =
* Fixed the theme primary color control issue with WordPress 4.9.
* Updated the translation file.

= 1.1.0 =
* Fixed white space issue on header.

= 1.0.9 =
* Fixed few issues in RTL styles.
* Fixed a plugin conflict with slider.
* Fixed IE 11 menu dropdown icon issue.
* Added styles to Category Widget and Archive Widget.

= 1.0.8 =
* Fixed an issue in header image.
* Changed the youtube icon in social media menu.
* Changed max-height in header sidebar.
* Fixed a issue in custom color option.

= 1.0.7 =
* Declared RTL support.

= 1.0.6 =
* Used get_templated_directory instead of dirname in functions.php.
* Fixed anonymous function issue.
* Fixed some escaping issues.
* Removed wp_reset_query() function on related-posts.php.
* Fixed translation issues.

= 1.0.5 =
* Used escaping functions for translation.
* Removed social sharing function.

= 1.0.4 =
* Fixed mobile menu not disappearing issue.
* Hitmag Popular posts, tags, comments restyled for footer.
* All the widgets are now working on any sidebar except header advertisement area.
* Removed block styling for <q> tag.
* Removed social media buttons.
* Header sidebar renamed to Header Advertisement Area.
* Escaped translation functions.
* Posts widgets styled for footer.
* Edited translation file.

= 1.0.3 =
* Fixed few escaping issues.

= 1.0.2 =
* Added starter content.
* Fixed a issue in template-tags.php
* Added an editor stylesheet.
* Added RTL language support.
* Added "view all" buttons to category posts widgets.

= 1.0.1 =
* Removed unwanted files and folders.
* Added social media sharing functionality.
* Added two widgets.
* Added custom color feature.
* Fixed few escaping issues.
* Updated Screenshot.
* Added few controls to the customizer.
* Updated translation file.

= 1.0.0 =
* Initial release

== Credits ==

* Based on Underscores http://underscores.me/, (C) 2012-2016 Automattic, Inc., [GPLv2 or later](https://www.gnu.org/licenses/gpl-2.0.html)
* normalize.css http://necolas.github.io/normalize.css/, (C) 2012-2016 Nicolas Gallagher and Jonathan Neal, [MIT](http://opensource.org/licenses/MIT)

* Kirki by Aristeides Stathopoulos. 
  Kirki is licenced under the terms of the MIT licence - https://github.com/aristath/kirki/blob/master/LICENSE

* FlexSlider by woothemes.
  FlexSlider is Licensed under the GPLv2 license. http://www.gnu.org/licenses/gpl-2.0.html

* Magnific Popup by Dmitry Semenov
  Magnific popup is licensed under MIT licence. https://github.com/dimsemenov/Magnific-Popup/blob/master/LICENSE

* HTML5 Shiv @afarkas @jdalton @jon_neal @rem 
  MIT/GPL2 Licensed - https://github.com/aFarkas/html5shiv/blob/master/MIT%20and%20GPL2%20licenses.md

* Lato Font by Łukasz Dziedzic https://fonts.google.com/specimen/Lato
  Licensed under Open Font License - http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web

* Open Sans Font by Steve Matteson https://fonts.google.com/specimen/Open+Sans
  Licensed under Apache License, version 2.0, http://www.apache.org/licenses/LICENSE-2.0.html

* Ubuntu Font by Dalton Maag https://fonts.google.com/specimen/Ubuntu
  License - http://font.ubuntu.com/ufl/ubuntu-font-licence-1.0.txt

* TRT Customizer Pro by Justin Tadlock https://github.com/justintadlock/trt-customizer-pro
  License - https://github.com/justintadlock/trt-customizer-pro/blob/master/license.md

* Screenshot images are all licensed under Creative Commons Zero (CC0) ( https://pxhere.com/en/license )
  https://pxhere.com/en/photo/578684 
  https://pxhere.com/en/photo/1173363 
  https://pxhere.com/en/photo/1368604 
  https://pxhere.com/en/photo/601444 
  https://pxhere.com/en/photo/764632 
  https://pxhere.com/en/photo/1373626 
  https://pxhere.com/en/photo/869156 
  https://pxhere.com/en/photo/1229568 
  https://pxhere.com/en/photo/1386455 
  https://pxhere.com/en/photo/1346731 

