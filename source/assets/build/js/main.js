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

jQuery(function (e) {
  console.log(124);

  e.fn.hScroll = function (l) {
    l = l || 120, e(this).bind("DOMMouseScroll mousewheel", function (t) {
      var i = t.originalEvent,
          n = i.detail ? i.detail * -l : i.wheelDelta,
          o = e(this).scrollLeft();
      o += n > 0 ? -l : l, e(this).scrollLeft(o), t.preventDefault();
    });
  };
});

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
  setCookie("loader", "true", "2");
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

  $('section.bottom.show .services-category').hScroll(100);
  jQuery(document).on("click", '.pre_loader button.next', function (event) {
    removeLoader();
  });
  test();
  jQuery(document).on("click", 'img.menu_toggle', function (event) {
    // test();
    if ($("nav.mobile_menu").hasClass("animate")) {
      jQuery("nav.mobile_menu").removeClass("animate");
    } else {
      jQuery("nav.mobile_menu").addClass("animate");
    }
  });
  var oldLang = "ro";
  jQuery(document).on("click", '.languages span.lang', function (event) {
    var newLang = jQuery(this).attr("data-lang");

    if (oldLang != newLang) {
      $('*[data-' + newLang + ']').each(function () {
        var newText = jQuery(this).attr("data-" + newLang);
        var oldText = jQuery(this).text();
        $(this).attr("data-" + oldLang, oldText);
        $(this).text(newText);
        console.log(newText);
      });
      oldLang = newLang;
      jQuery("nav.mobile_menu").removeClass("animate");
    }
  });
  jQuery(document).on("click", 'h1', function (event) {
    try {
      $(this).addClass("verified");
    } catch (err) {
      alert(err.message);
    }
  });
  jQuery(document).on("click", ".anim--holder-img", function (event) {
    if ($("body").hasClass("notransition")) {
      $(this).attr("src", "assets/images/anim/stop.svg");
    } else {
      $(this).attr("src", "assets/images/anim/play.svg");
    }

    $('body').toggleClass('notransition');
  });
  jQuery(document).on("click", ".show_hidden img", function (event) {
    if ($(this).hasClass("up")) {
      $(this).removeClass("up");
      $(this).addClass("down");
      $("nav.desktop_menu a").addClass("white");
      $("nav.desktop_menu .languages").addClass("white");
      $("section.bottom").removeClass("hide");
      $("section.bottom").addClass("show");
      active = "middle";
      scrollIt(460);
      active = "top";
      scrollIt(230);
      active = false;
    } else {
      $(this).removeClass("down");
      $(this).addClass("up");
      $("nav.desktop_menu a").removeClass("white");
      $("nav.desktop_menu .languages").removeClass("white");
      $("section.bottom").addClass("hide");
      $("section.bottom").removeClass("show");
    }
  }); // $(".services").scroll(function() {
  //     var totalWidth = $(this).width();
  //     var scrollPos = $(this).scrollLeft();
  //     var percentScroll = scrollPos / totalWidth;
  //     if (percentScroll > 0.2 && percentScroll < 0.6) {
  //         $(this).animate({scrollLeft: totalWidth}, 500);
  //         console.log(percentScroll +"/1");
  //     } else if(percentScroll > 1.4  && percentScroll < 1.8) {
  //         $(this).animate({scrollLeft: totalWidth*2}, 500);
  //         console.log(percentScroll +"/2");
  //     } else if(percentScroll > 1.81  && percentScroll < 2) {
  //         $(this).animate({scrollLeft: totalWidth}, 500);
  //         console.log(percentScroll +"/3");
  //     } else if(percentScroll < 1.4  && percentScroll > 1.2) {
  //         $(this).animate({scrollLeft: 0}, 500);
  //         console.log(percentScroll +"/4");
  //     }
  // });

  jQuery(document).on("click", ".desktop_menu > a", function (event) {
    var showSection = jQuery(this).attr("class");
    var sectionLength = jQuery("section").length;

    for (var i = 0; i < sectionLength; i++) {
      jQuery("section").hide();
      jQuery("section").removeClass("show");
    }

    jQuery("section." + showSection).addClass("show");
  }); // $(".services").scroll(function() {
  //     var totalWidth = $(this).width();
  //     var scrollPos = $(this).scrollLeft();
  //     var percentScroll = scrollPos / totalWidth;
  //     if (percentScroll > 0.2 && percentScroll < 0.6) {
  //         $(this).animate({scrollLeft: totalWidth}, 500);
  //         console.log(percentScroll +"/1");
  //     } else if(percentScroll > 1.4  && percentScroll < 1.8) {
  //         $(this).animate({scrollLeft: totalWidth*2}, 500);
  //         console.log(percentScroll +"/2");
  //     } else if(percentScroll > 1.81  && percentScroll < 2) {
  //         $(this).animate({scrollLeft: totalWidth}, 500);
  //         console.log(percentScroll +"/3");
  //     }
  // });

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
  var servicesArray = ["marketing", "design", "web development"];
  var i = 0;
  var n = 0;
  jQuery(document).on("click", '.services_switcher img', function (event) {
    if (!jQuery(this).hasClass("next_service")) {
      $("#left_text").text(servicesArray[i]).fadeIn();
      i++;

      if (i >= 3) {
        i = 0;
      }

      $("#right_text").text(servicesArray[i]).fadeIn();
    } else {
      $(".container-service:eq(" + n + ")").hide();
      n++;

      if (n >= 3) {
        n = 0;
      }

      $(".container-service:eq(" + n + ")").show();
    }
  });
  jQuery(document).on("click", '.round input[type="checkbox"]', function (event) {
    $(".final_price").removeClass("hidden");
    $(".contact-form.secret").removeClass("hidden");
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
        $(".contact-form.secret").addClass("hidden");
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
  var active = false;
  var scrollerMiddle = document.querySelector('.scroller-middle');
  var scrollerTop = document.querySelector('.scroller-top');
  scrollerMiddle.addEventListener('mousedown', function () {
    active = "middle";
    scrollerMiddle.classList.add('scrolling');
  });
  document.body.addEventListener('mouseup', function () {
    active = false;
    scrollerMiddle.classList.remove('scrolling');
  });
  document.body.addEventListener('mouseleave', function () {
    active = false;
    scrollerMiddle.classList.remove('scrolling');
  });
  scrollerTop.addEventListener('mousedown', function () {
    active = "top";
    scrollerTop.classList.add('scrolling');
  });
  document.body.addEventListener('mouseup', function () {
    active = false;
    scrollerTop.classList.remove('scrolling');
  });
  document.body.addEventListener('mouseleave', function () {
    active = false;
    scrollerTop.classList.remove('scrolling');
  });
  document.body.addEventListener('mousemove', function (e) {
    if (!active) return;
    var x = e.pageX;
    x -= document.querySelector('.wrapper').getBoundingClientRect().left;
    scrollIt(x);
  });

  function scrollIt(x) {
    var transform = Math.max(0, Math.min(x, document.querySelector('.wrapper').offsetWidth));

    if (active === "middle") {
      document.querySelector('.middle').style.width = transform + "px";
      scrollerMiddle.style.left = transform - 25 + "px";

      if (scrollerTop.getBoundingClientRect().left > scrollerMiddle.getBoundingClientRect().left - 5) {
        document.querySelector('.top').style.width = transform - 5 + "px";
        scrollerTop.style.left = transform - 30 + "px";
      }
    }

    if (active === "top") {
      document.querySelector('.top').style.width = transform + "px";
      scrollerTop.style.left = transform - 25 + "px";

      if (scrollerTop.getBoundingClientRect().left > scrollerMiddle.getBoundingClientRect().left - 5) {
        document.querySelector('.middle').style.width = transform + 5 + "px";
        scrollerMiddle.style.left = transform - 20 + "px";
      }
    }
  }

  scrollerMiddle.addEventListener('touchstart', function () {
    active = "middle";
    scrollerMiddle.classList.add('scrolling');
  });
  document.body.addEventListener('touchend', function () {
    active = false;
    scrollerMiddle.classList.remove('scrolling');
  });
  document.body.addEventListener('touchcancel', function () {
    active = false;
    scrollerMiddle.classList.remove('scrolling');
  });
  scrollerTop.addEventListener('touchstart', function () {
    active = "top";
    scrollerTop.classList.add('scrolling');
  });
  document.body.addEventListener('touchend', function () {
    active = false;
    scrollerTop.classList.remove('scrolling');
  });
  document.body.addEventListener('touchcancel', function () {
    active = false;
    scrollerTop.classList.remove('scrolling');
  });
  document.querySelector('.wrapper').addEventListener('touchmove', function (e) {
    if (!active) return;
    e.preventDefault();
    var x = e.touches[0].pageX;
    x -= document.querySelector('.wrapper').getBoundingClientRect().left;
    scrollIt(x);
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