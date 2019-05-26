function test() {
    console.log(123)
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

function bodyAnimation() {
    $("body").addClass("animating");
    $("body").addClass("slide-in-right");
    if ($("body").hasClass("dark_theme_bg")) {
        $("body").addClass("light_theme_bg");
        $("body").removeClass("dark_theme_bg");
        $(".switch_img").attr("src","assets/img/toggle/dark_theme.svg");
    } else {
        $("body").addClass("dark_theme_bg");
        $("body").removeClass("light_theme_bg");
        $(".switch_img").attr("src","assets/img/toggle/white_theme.svg")
    }
    setTimeout(function (event) {
        $("body").removeClass("animating");
        $("body").removeClass("slide-in-right");
    }, 1000);
    
}

$(document).ready(function () {
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