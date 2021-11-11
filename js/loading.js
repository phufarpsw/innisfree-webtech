$(document).ready(function () {
    $(".loading").animate({
        opacity: '0'
    });
    $(".loading-innisfree").css("transform", "translateY(1rem)");
    setTimeout(() => {
        $(".loading").hide();
    }, 2000);

})