$(document).ready(function () {
    $('.your-class').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});

$('header a').click(function () {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
        'scrollTop': position
    }, 500);
});

$(window).scroll(function () {
    $('.fadein').each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass('scrollin');
        }
    });
});