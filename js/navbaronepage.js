function initNavbar() {

    var SCROLL_SPEED = 750;
    var SCROLL_OFFSET = 50;
    var EASING = 'swing';

    var $navTop = $('#navbar-top');
    var $navExternal = $('.nav-external');

    $navTop.find('.navbar-default ul.nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: SCROLL_SPEED,
        scrollOffset: SCROLL_OFFSET,
        scrollThreshold: 0.5,
        filter: ':not(.external)',
        easing: EASING
    });

    $navTop.find('.navbar-default').affix({
        offset: {
            top: $('#home').height()
        }
    });

    $navExternal.click(function(e) {
        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - SCROLL_OFFSET
        }, SCROLL_SPEED, EASING);
    });
}

$(document).ready(function() {

    initNavbar();
    initPortfolio();
    initAnimations();
});

$(window).load(function() {

    var $loader = $('.loader');

    $loader.find('.fading-line').fadeOut();
    $loader.fadeOut("slow");
});
