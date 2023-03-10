/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dev-assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev-assets/js/main.js":
/*!*******************************!*\
  !*** ./dev-assets/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./starter */ "./dev-assets/js/starter.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

+function ($) {
  var slickArrLeft = "\n        <div class=\"slick-prev maglist-arrow maglist-arrow-prev\">\n            <svg class=\"svg-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.991 511.991\" style=\"enable-background:new 0 0 511.991 511.991;\" xml:space=\"preserve\" width=\"50px\" height=\"50px\">\n            <path d=\"M153.433,255.991L381.037,18.033c4.063-4.26,3.917-11.01-0.333-15.083c-4.229-4.073-10.979-3.896-15.083,0.333    L130.954,248.616c-3.937,4.125-3.937,10.625,0,14.75L365.621,508.7c2.104,2.188,4.896,3.292,7.708,3.292    c2.646,0,5.313-0.979,7.375-2.958c4.25-4.073,4.396-10.823,0.333-15.083L153.433,255.991z\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" />\n            </svg>\n        </div>";
  var slickArrRight = "\n            <div class=\"slick-prev maglist-arrow maglist-arrow-next\">\n                <svg class=\"svg-icon\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.995 511.995\" style=\"enable-background:new 0 0 511.995 511.995;\" xml:space=\"preserve\" width=\"50px\" height=\"50px\">\n                <path d=\"M381.039,248.62L146.373,3.287c-4.083-4.229-10.833-4.417-15.083-0.333c-4.25,4.073-4.396,10.823-0.333,15.083    L358.56,255.995L130.956,493.954c-4.063,4.26-3.917,11.01,0.333,15.083c2.063,1.979,4.729,2.958,7.375,2.958    c2.813,0,5.604-1.104,7.708-3.292L381.039,263.37C384.977,259.245,384.977,252.745,381.039,248.62z\" data-original=\"#000000\" class=\"active-path\" data-old_color=\"#000000\" />\n                </svg>\n            </div>";

  function searchToggler() {
    $("#search-toggler").on("click", function (event) {
      event.preventDefault();
      $(".top-search-form").slideToggle();
      $(".top-search-form .search-field").focus();
    });
  }

  jQuery(document).on("focus", ".circular-focus", function () {
    jQuery(jQuery(this).data("goto")).focus();
  });
  jQuery(document).on("click", '.mr-mobile-menu ul li:not(".menu-item-has-children") a', function () {
    jQuery("button#mr-close").trigger("click");
  });
  $(document).on('click', '.maglist-offcanvas-wrapper a', function (e) {
    e.preventDefault();
    var trigger = $(this).data('trigger');
    var trigger = '.' + trigger;
    $(this).toggleClass('open');

    if ($(this).hasClass('open')) {
      $(trigger).slideDown(400);
    } else {
      $(trigger).slideUp(400);
    }
  });

  function updateClock() {
    var currentTimeString,
        hours,
        minutes,
        seconds,
        ampm,
        currentTime = new Date(),
        timeWrapper = $('.maglist-time');
    hours = currentTime.getHours();
    minutes = currentTime.getMinutes();
    seconds = currentTime.getSeconds();
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    currentTimeString = hours + ":" + minutes + ":" + seconds + ' ' + ampm;

    if (timeWrapper.length > 0) {
      $(timeWrapper).show();
      $(timeWrapper).html(currentTimeString);
    }
  }

  function mainBannerSlider() {
    var mainPostSlider = $('.maglist-main-banner-news-section');

    if (mainPostSlider.length > 0) {
      mainPostSlider.slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: slickArrLeft,
        nextArrow: slickArrRight,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      });
    }
  }

  function trendingPostSlider() {
    var trendingPostSliderWrapper = $('.maglist-main-banner-trending-section');

    if (trendingPostSliderWrapper.length > 0) {
      var _trendingPostSliderWr;

      trendingPostSliderWrapper.slick((_trendingPostSliderWr = {
        dots: false,
        arrows: true,
        autoplay: true,
        infinite: true,
        vertical: true,
        verticalSwiping: true
      }, _defineProperty(_trendingPostSliderWr, "autoplay", true), _defineProperty(_trendingPostSliderWr, "slidesToShow", 4), _defineProperty(_trendingPostSliderWr, "slidesToScroll", 1), _defineProperty(_trendingPostSliderWr, "prevArrow", slickArrLeft), _defineProperty(_trendingPostSliderWr, "nextArrow", slickArrRight), _trendingPostSliderWr));
    }
  }

  function darkModeToggle() {
    $(document).on('click', '.maglist-switch-wrapper', function (e) {
      e.preventDefault();
      var checkBox = $(this).find('.maglist-switch input');
      checkBox.prop('checked', !checkBox.prop('checked'));
      $('body').toggleClass('maglist-dark-mode');

      if ($('body').hasClass('maglist-dark-mode')) {
        createCookie('maglistDarkMode', true, 60);
      } else {
        createCookie('maglistDarkMode', false, 1);
      }
    });
  }

  function createCookie(name, value, minutes) {
    if (minutes) {
      var date = new Date();
      date.setTime(date.getTime() + minutes * 60 * 1000);
      var expires = "; expires=" + date.toGMTString();
    } else {
      var expires = "";
    }

    document.cookie = name + "=" + value + expires + "; path=/";
  }

  function getCookie(name) {
    var value = "; ".concat(document.cookie);
    var parts = value.split("; ".concat(name, "="));
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  /* DOM ready event */


  $(document).ready(function () {
    searchToggler();
    mainBannerSlider();
    trendingPostSlider();
    darkModeToggle();
    setInterval(function () {
      updateClock();
    }, 1000);
    $('.maglist-latest-post-slider').marquee({
      speed: 50,
      duplicated: true,
      pauseOnHover: true,
      startVisible: true
    });

    if ($('body').hasClass('maglist-sticky-sidebar')) {
      var stickySidebar = $('.sidebar-order');

      if (stickySidebar.length > 0) {
        $(stickySidebar).theiaStickySidebar({
          additionalMarginTop: 100
        });
      }
    }
  });
  $(window).load(function () {
    $("#loader-wrapper").fadeOut();
    $("#loaded").delay(1000).fadeOut("slow");
  });
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
      $('.maglist-sticky-share').addClass('share-btn-show');
    } else {
      $('.maglist-sticky-share').removeClass('share-btn-show');
    }
  });
}(jQuery);

/***/ }),

/***/ "./dev-assets/js/mobile-menu.js":
/*!**************************************!*\
  !*** ./dev-assets/js/mobile-menu.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shiftMenu
+function ($) {
  var classToggler = function classToggler(param) {
    this.animation = param.animation, this.toggler = param.toggler, this.className = param.className, this.exceptions = param.exceptions;

    this.init = function () {
      var that = this; // for stop propagation

      var stopToggler = this.implode(this.exceptions);

      if (typeof stopToggler !== 'undefined') {
        $(document).on('click', stopToggler, function (e) {
          e.stopPropagation();
        });
      } // for toggle class


      var toggler = this.implode(this.toggler);

      if (typeof toggler !== 'undefined') {
        $(document).on('click', toggler, function (e) {
          e.stopPropagation();
          e.preventDefault();
          that.toggle();
        });
      }
    }; //class toggler


    this.toggle = function () {
      var selectors = this.implode(this.animation);

      if (typeof selectors !== 'undefined') {
        $(selectors).toggleClass(this.className);

        if ($(selectors).hasClass(this.className)) {
          $('.mr-menu-list > li:first-child a').focus();
        } else {
          $('#menu-icon').focus();
        }
      }
    }; // array selector maker


    this.implode = function (arr, imploder) {
      // checking arg is array or not
      if (!(arr instanceof Array)) {
        return arr;
      } // setting default imploder


      if (typeof imploder == 'undefined') {
        imploder = ',';
      } // making selector


      var data = arr;
      var ele = '';

      for (var j = 0; j < arr.length; j++) {
        ele += arr[j];

        if (j !== arr.length - 1) {
          ele += imploder;
        }
      }

      data = ele;
      return data;
    };
  }; //End mobileMenu


  $.fn.mrMobileMenu = function (config) {
    /* defining default config*/
    var defaultConfig = {
      icon: '#menu-icon',
      closeIcon: true,
      overlay: true
    };
    $.extend(defaultConfig, config);
    var wrapperId = '#' + this.attr('id');

    if (!$(wrapperId).length) {
      console.error('Selected Element not found in DOM (Mobile menu plugin)');
      return this;
    }

    var _this = this;

    var shiftMenu = function shiftMenu() {
      var mobileMenuHTML = '<div>' + $(wrapperId).html() + '</div>',
          that = this;
      mobileMenuHTML = $(mobileMenuHTML).find('*').each(function (index, value) {
        var id = $(value).attr('id');

        if (id) {
          $(value).attr('id', 'mr-' + id);
        }
      });
      /* constructor function */

      this.init = function () {
        $(document).ready(function () {
          that.createMenu();
          that.addDownArrow();
          that.toggleSubUl();
          that.menuToggler();
          that.addClassOnFirstUl();
        });
      };

      this.createMenu = function () {
        var closeHTML = defaultConfig.closeIcon ? this.closeMenuIcon() : null,
            overlayHTML = defaultConfig.overlay ? this.addOverlay() : null;
        $('body').append('<div class="mr-mobile-menu" id="mr-mobile-menu">' + closeHTML + '<ul class="mr-menu-list">' + mobileMenuHTML.html() + '</ul><button aria-label="circular focus" class="circular-focus screen-reader-text" data-goto=".mr-inner-box">Circular focus</button></div>' + overlayHTML);
      };

      this.closeMenuIcon = function () {
        return '<div class="mr-close-wrapper"><button aria-label="circular focus" data-goto=".mr-menu-list > li:last-child a" class="circular-focus screen-reader-text">circular focus</button> <button aria-label="Close Menu" tabindex="0" class="mr-inner-box" id="mr-close"><span class="mr-inner"></span></button> </div>';
      };

      this.addOverlay = function () {
        return '<div class="mr-mobile-menu-overlay"></div>';
      };

      this.addClassOnFirstUl = function () {
        if ($('#mr-mobile-menu ul').first().hasClass('menu')) {} else {
          $('#mr-mobile-menu ul').first().addClass('menu');
        }
      };

      this.addDownArrow = function () {
        var $mobileMenu = $('#mr-mobile-menu'),
            $hasSubUl = $('#mr-mobile-menu .menu-item-has-children'),
            haveClassOnLi = $mobileMenu.find('.menu-item-has-children');

        if (haveClassOnLi.length > 0) {
          $hasSubUl.children('a').append('<a href="#" class="mr-arrow-box"><span class="mr-down-arrow"></span></a>');
        } else {
          $('#mr-mobile-menu ul li:has(ul)').children('a').append('<a href="#" class="mr-arrow-box"><span class="mr-down-arrow"></span></a>');
        }
      };

      this.toggleSubUl = function () {
        $(document).on('click', '.mr-arrow-box', toggleSubMenu);

        function toggleSubMenu(e) {
          e.stopPropagation();
          e.preventDefault();
          $(this).toggleClass('open').parent().next().slideToggle();
        }
      };

      this.menuToggler = function () {
        var menuConfig = {
          animation: ['.mr-mobile-menu-overlay', '#mr-mobile-menu', 'body', '#menu-icon'],
          //where class add element
          exceptions: ['#mr-mobile-menu'],
          //stop propagation
          toggler: ['#menu-icon', '.mr-mobile-menu-overlay', '#mr-close'],
          //class toggle on click
          className: 'mr-menu-open'
        };
        new classToggler(menuConfig).init();
      };
    };
    /* End shiftMenu */

    /* instance of shiftmenu */


    new shiftMenu().init();
  };
  /* End shiftMenu */

}(jQuery);

/***/ }),

/***/ "./dev-assets/js/skip-link-focus-fix.js":
/*!**********************************************!*\
  !*** ./dev-assets/js/skip-link-focus-fix.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var isIe = /(trident|msie)/i.test(navigator.userAgent);

  if (isIe && document.getElementById && window.addEventListener) {
    window.addEventListener('hashchange', function () {
      var id = location.hash.substring(1),
          element;

      if (!/^[A-z0-9_-]+$/.test(id)) {
        return;
      }

      element = document.getElementById(id);

      if (element) {
        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
          element.tabIndex = -1;
        }

        element.focus();
      }
    }, false);
  }
})();

/***/ }),

/***/ "./dev-assets/js/starter.js":
/*!**********************************!*\
  !*** ./dev-assets/js/starter.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./mobile-menu */ "./dev-assets/js/mobile-menu.js");

__webpack_require__(/*! ./skip-link-focus-fix.js */ "./dev-assets/js/skip-link-focus-fix.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

+function ($) {
  var Starter = /*#__PURE__*/function () {
    function Starter() {
      _classCallCheck(this, Starter);

      this.$body = $("body");
      this.toggleSearchWithOverlay();
      this.mobileMenuInit();
      this.triggerEventEscButtonPress();
      this.closeMobileMenuOnEscKeyPress();
    }

    _createClass(Starter, [{
      key: "mobileMenuInit",
      value: function mobileMenuInit() {
        var $mrMenu = $("#site-navigation");
        $mrMenu.length && $mrMenu.mrMobileMenu();
      }
    }, {
      key: "triggerEventEscButtonPress",
      value: function triggerEventEscButtonPress() {
        document.addEventListener("keydown", function (e) {
          e = e || window.event;

          if (e.keyCode == 27) {
            /* Creating custom event */
            var event = new Event("onEscKeypressed");
            document.dispatchEvent(event);
          }
        });
      }
    }, {
      key: "closeMobileMenuOnEscKeyPress",
      value: function closeMobileMenuOnEscKeyPress() {
        var _this = this;

        document.addEventListener("onEscKeypressed", function () {
          return _this.$body.hasClass("mr-menu-open") && document.getElementById("menu-icon").click();
        });
      }
    }, {
      key: "toggleSearchWithOverlay",
      value: function toggleSearchWithOverlay() {
        var _this2 = this;

        var $searchToggler = $(".maglist-toggle-search");
        var className = "maglist-search-opened";
        var $searchInput = $(".maglist-header-search .search-field");
        /* Overlay */

        var overlayClassName = "maglist-search-overlay";
        var overlayHtml = "<div class=\"".concat(overlayClassName, "\"></div>");
        var delayAmountToFocusInput = 300;

        var toggleSearech = function toggleSearech() {
          _this2.$body.toggleClass(className);

          if (_this2.$body.hasClass(className)) {
            setTimeout(function () {
              var searchInputValue = $searchInput.val();
              $searchInput.val("");
              $searchInput.focus().val(searchInputValue);
            }, delayAmountToFocusInput);

            _this2.$body.prepend(overlayHtml);
          } else {
            $(document).find(".".concat(overlayClassName)).remove();
            $(".maglist-header-icons .maglist-toggle-search").focus();
          }
        };

        $searchToggler.length && $searchToggler.on("click", function () {
          toggleSearech();
        });
        $(document).on('click', '.maglist-search-overlay', function (e) {
          toggleSearech();
        });
        /* Close if Esc key pressed */

        document.addEventListener("onEscKeypressed", function () {
          return $(_this2.$body).hasClass(className) && toggleSearech();
        });
      }
    }]);

    return Starter;
  }();

  $(document).ready(function () {
    new Starter();
  });
}(jQuery);

/***/ })

/******/ });