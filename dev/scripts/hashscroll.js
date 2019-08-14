/**
 * Animated hash (jQuery) scroll
 * Modified. MIT. Source: https://github.com/BlackrockDigital/startbootstrap-agency/blob/master/js/agency.js
 */

"use strict";

(function ($) {
    var navHeight = 52; // px

    // In-page scrolling hashes (use with 'a' element with attributes class="scroll-trigger" && href="#<element-id>")
    $('a.scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({ scrollTop: target.offset().top - navHeight }, 1000, "easeInOutExpo");
                return;
            }
        }
    });
})(jQuery);
