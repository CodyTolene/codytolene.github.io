/**
 * Navbar functionality
 * Modified. MIT. Source: https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/js/agency.js
 */

"use strict";

(function ($) {
    var navHeight = 52; // px

    // Closes responsive menu when a scroll trigger link is clicked
    $(".scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: navHeight + 20
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };

    // Collapse now if page is not at top
    navbarCollapse();

    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    // $('.portfolio-modal').on('show.bs.modal', function(e) {
    //   $('.navbar').addClass('d-none');
    // });
    // $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    //   $('.navbar').removeClass('d-none');
    // });
})(jQuery);
