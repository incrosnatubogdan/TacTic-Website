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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/_assets/js/main.js":
/*!***********************************!*\
  !*** ./source/_assets/js/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function test() {
  console.log(123);
}

function setCookie(name, value, days) {
  var expires = "";

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }

  return null;
}

function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

jQuery.fn.scrollCenter = function (elem, speed) {
  var active = jQuery(this).find(elem);
  var activeWidth = active.width() / 2;
  var pos = active.position().left + activeWidth;
  var elpos = jQuery(this).scrollLeft();
  var elW = jQuery(this).width();
  pos = pos + elpos - elW / 2;
  jQuery(this).animate({
    scrollLeft: pos
  }, speed == undefined ? 1000 : speed);
  return this;
};

jQuery.fn.scrollCenterORI = function (elem, speed) {
  jQuery(this).animate({
    scrollLeft: jQuery(this).scrollLeft() - jQuery(this).offset().left + jQuery(elem).offset().left
  }, speed == undefined ? 1000 : speed);
  return this;
};

function showHideButton() {
  jQuery(".pre_loader button.next").show();
  setCookie("loader", "true", "2");
}

function bodyAnimation() {
  $("body").addClass("animating");
  $("body").addClass("slide-in-right");

  if ($("body").hasClass("dark_theme_bg")) {
    $("nav").addClass("light_theme_bg");
    $("nav").removeClass("dark_theme_bg");
    setTimeout(function (event) {
      $("body").addClass("light_theme_bg");
      $("body").removeClass("dark_theme_bg");
    }, 2000);
    $(".switch_img").attr("src", "assets/images/toggle/dark_theme.svg");
  } else {
    setTimeout(function (event) {
      $("body").addClass("dark_theme_bg");
      $("body").removeClass("light_theme_bg");
    }, 2000);
    $("nav").removeClass("light_theme_bg");
    $("nav").addClass("dark_theme_bg");
    $(".switch_img").attr("src", "assets/images/toggle/white_theme.svg");
  }

  setTimeout(function (event) {
    $("body").removeClass("animating");
    $("body").removeClass("slide-in-right");
  }, 1000);
}

function removeLoader() {
  jQuery(".pre_loader").remove();
}

$(document).ready(function () {
  var loaderStatus = getCookie("loader");

  if (loaderStatus == "true") {
    removeLoader();
  } else {
    setTimeout(function (event) {
      showHideButton();
    }, 2000);
  }

  jQuery(document).on("click", '.pre_loader button.next', function (event) {
    removeLoader();
  });
  test();
  jQuery(document).on("click", 'img.menu_toggle', function (event) {
    // test();
    if ($("nav.top_main_menu").hasClass("animate")) {
      jQuery("nav.top_main_menu").removeClass("animate");
    } else {
      jQuery("nav.top_main_menu").addClass("animate");
    }
  });
  var oldLang = "ro";
  jQuery(document).on("click", '.languages span.lang', function (event) {
    var newLang = jQuery(this).attr("data-lang"); // console.log(oldLang)

    if (oldLang != newLang) {
      $('*[data-' + newLang + ']').each(function () {
        var newText = jQuery(this).attr("data-" + newLang);
        var oldText = jQuery(this).text();
        $(this).attr("data-" + oldLang, oldText);
        $(this).text(newText);
        console.log(newText);
      });
      oldLang = newLang; // console.log(oldLang)

      jQuery("nav.top_main_menu").removeClass("animate");
    }
  });
  jQuery(document).on("click", 'h1', function (event) {
    try {
      $(this).addClass("verified");
    } catch (err) {
      alert(err.message);
    }
  });
  jQuery(document).on("click", '#mytoggle', function (event) {
    if ($(this).is(":checked")) {
      // $(this).addClass("checked")
      $(".dark_theme_c").each(function () {
        $(this).addClass("light_theme_c");
        $(this).removeClass("dark_theme_c");
      });
      bodyAnimation();
    } else {
      $(".light_theme_c").each(function () {
        $(this).addClass("dark_theme_c");
        $(this).removeClass("light_theme_c");
      });
      bodyAnimation();
    }
  });
  var servicesArray = ["design", "web development", "marketing"];
  var i = 2;
  jQuery(document).on("click", '.services_switcher img', function (event) {
    $("#left_text").text(servicesArray[i]).fadeIn();
    i++;

    if (i >= 3) {
      i = 0;
    }

    $("#right_text").text(servicesArray[i]).fadeIn();
  });
  jQuery(document).on("click", '.round input[type="checkbox"]', function (event) {
    $(".final_price").removeClass("hidden");
    var category = $(this).parent().attr('class').split(' ')[1];
    $(".final_price").addClass(category);
    var noOfDisc = $('.final_price').attr("class").split(' ').length;
    var webDevCheck = $('.web_dev input:checked').length;
    var webDesCheck = $('.web_design input:checked').length;
    var mktCheck = $('.marketing input:checked').length;
    var currentPrice = parseInt($(this).attr("data-price"));
    var oldPrice = parseInt($(".final_price").text());

    if ($(this).is(":checked")) {
      var totalPrice = currentPrice + oldPrice;
    } else {
      var totalPrice = oldPrice - currentPrice;
    }

    if (webDevCheck == 0) {
      $(".final_price").removeClass("web_dev");
    } else if (webDesCheck == 0) {
      $(".final_price").removeClass("web_design");
    } else if (mktCheck == 0) {
      $(".final_price").removeClass("marketing");
    }

    if (webDevCheck > 1 && webDesCheck > 1 || mktCheck > 1 && webDesCheck > 1 || webDevCheck > 1 && mktCheck > 1) {
      if (noOfDisc > 2) {
        $(".old_price").removeClass("hidden");
        $(".old_price").text(totalPrice + "€");
        var totalPrice = parseInt(totalPrice - totalPrice / 10);
        $(".final_price").text(totalPrice + "€");
      } else if (noOfDisc > 3) {
        $(".old_price").removeClass("hidden");
        $(".old_price").text(totalPrice + "€");
        var totalPrice = parseInt(totalPrice - totalPrice / 15);
        $(".final_price").text(totalPrice + "€");
      } else {
        $(".old_price").addClass("hidden");
        newPrice = 0;
        $("input:checked").each(function () {
          var currentPrice = parseInt($(this).attr("data-price"));
          newPrice = currentPrice + oldPrice;
        });
        $(".final_price").text(newPrice + "€");
      }
    } else {
      $(".old_price").addClass("hidden");
      newPrice = 0;
      $("input:checked").each(function () {
        var currentPrice = parseInt($(this).attr("data-price"));
        newPrice = currentPrice + newPrice;
      });
      $(".final_price").text(newPrice + "€");
    }
  });
});

/***/ }),

/***/ "./source/_assets/sass/main.scss":
/*!***************************************!*\
  !*** ./source/_assets/sass/main.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./source/_assets/js/main.js ./source/_assets/sass/main.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Server-1\htdocs\TacTic-Website\source\_assets\js\main.js */"./source/_assets/js/main.js");
module.exports = __webpack_require__(/*! C:\Server-1\htdocs\TacTic-Website\source\_assets\sass\main.scss */"./source/_assets/sass/main.scss");


/***/ })

/******/ });