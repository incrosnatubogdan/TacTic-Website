function test() {
    console.log(123)
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
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

function showHideButton () {
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
        $(".switch_img").attr("src","assets/images/toggle/dark_theme.svg");
    } else {
        setTimeout(function (event) {
            $("body").addClass("dark_theme_bg");
            $("body").removeClass("light_theme_bg");
        }, 2000); 
        $("nav").removeClass("light_theme_bg");
        $("nav").addClass("dark_theme_bg");
        $(".switch_img").attr("src","assets/images/toggle/white_theme.svg")
    }
    setTimeout(function (event) {
        $("body").removeClass("animating");
        $("body").removeClass("slide-in-right");
    }, 1000);   
}

function removeLoader() {
    jQuery(".pre_loader").remove();
    setCookie("loader","true","2");
}

$(document).ready(function () {
    var loaderStatus = getCookie("loader");
    if (loaderStatus == "true") {
        removeLoader();
    } else {
        setTimeout(function (event) {
            showHideButton();
        },2000);
    }
    
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
        // console.log(oldLang)
        if (oldLang != newLang) {
            $('*[data-'+newLang+']').each(function() {
                var newText = jQuery(this).attr("data-"+newLang);
                var oldText = jQuery(this).text();
                $(this).attr("data-"+oldLang, oldText);
                $(this).text(newText);
                console.log(newText)
            });
            oldLang = newLang;
            // console.log(oldLang)
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

    jQuery(document).on("click",".anim--holder-img", function(event){
        if($("body").hasClass("notransition")) {
            $(this).attr("src","assets/images/anim/stop.svg");
        } else {
            $(this).attr("src","assets/images/anim/play.svg");
        }
        $('body').toggleClass('notransition');
    });

    jQuery(document).on("click",".show_hidden img", function(event){
        if($(this).hasClass("up")) {
            $(this).removeClass("up");
            $(this).addClass("down");
            $("nav.desktop_menu a").addClass("white");
            $("nav.desktop_menu .languages").addClass("white");
            $("section.bottom").removeClass("hide");
            $("section.bottom").addClass("show");
        } else {
            $(this).removeClass("down");
            $(this).addClass("up");
            $("nav.desktop_menu a").removeClass("white");
            $("nav.desktop_menu .languages").removeClass("white");
            $("section.bottom").addClass("hide");
            $("section.bottom").removeClass("show");
        }
    });

    $(".services").scroll(function() {
        var totalWidth = $(this).width();
        var scrollPos = $(this).scrollLeft();
        var percentScroll = scrollPos / totalWidth;
        if (percentScroll > 0.2 && percentScroll < 0.6) {
            $(this).animate({scrollLeft: totalWidth}, 500);
            console.log(percentScroll +"/1");
        } else if(percentScroll > 1.4  && percentScroll < 1.8) {
            $(this).animate({scrollLeft: totalWidth*2}, 500);
            console.log(percentScroll +"/2");
        } else if(percentScroll > 1.81  && percentScroll < 2) {
            $(this).animate({scrollLeft: totalWidth}, 500);
            console.log(percentScroll +"/3");
        } else if(percentScroll < 1.4  && percentScroll > 1.2) {
            $(this).animate({scrollLeft: 0}, 500);
            console.log(percentScroll +"/4");
        }
    });

    jQuery(document).on("click", ".desktop_menu > a", function(event) {
        var showSection = jQuery(this).attr("class");
        var sectionLength = jQuery("section").length;
        for(var i=0;i < sectionLength;i++) {
            jQuery("section").hide();
            jQuery("section").removeClass("show");
        }
        jQuery("section." + showSection).addClass("show");
    });

    $(".services").scroll(function() {
        var totalWidth = $(this).width();
        var scrollPos = $(this).scrollLeft();
        var percentScroll = scrollPos / totalWidth;
        if (percentScroll > 0.2 && percentScroll < 0.6) {
            $(this).animate({scrollLeft: totalWidth}, 500);
            console.log(percentScroll +"/1");
        } else if(percentScroll > 1.4  && percentScroll < 1.8) {
            $(this).animate({scrollLeft: totalWidth*2}, 500);
            console.log(percentScroll +"/2");
        } else if(percentScroll > 1.81  && percentScroll < 2) {
            $(this).animate({scrollLeft: totalWidth}, 500);
            console.log(percentScroll +"/3");
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

    var servicesArray = ["marketing", "design" , "web development"];
    var i = 0;
    var n = 0;

    jQuery(document).on("click", '.services_switcher img', function (event) {
        if(!jQuery(this).hasClass("next_service")) {
            $("#left_text").text(servicesArray[i]).fadeIn();
            i++;
            if (i >= 3) {
                i = 0;
            }
            $("#right_text").text(servicesArray[i]).fadeIn();
        } else {
            $( ".container-service:eq("+n+")" ).hide();
            n++;
            if (n >= 3) {
                n = 0;
            }
            $( ".container-service:eq("+n+")" ).show();
            
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
});