$(document).ready(function () {
    jQuery(document).on("click", 'h1', function (event) {
        try {
            $(this).addClass("verified")
        }
        catch(err) {
            alert(err.message);
        }
    });
});