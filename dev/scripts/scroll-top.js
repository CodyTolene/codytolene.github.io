/**
 * Scroll top button functionality
 */

'use strict';

(function ($, wdw) {
    var showHidePageTopBtn = function () {
        var windowsize = $(window).width();

        if (windowsize >= 992) {
            var stEl = $('#scroll-top');

            if (stEl.length) {
                if (wdw.scrollY > 500) {
                    stEl.fadeIn();
                } else {
                    stEl.fadeOut();
                }
            }
        }
    };

    showHidePageTopBtn();
    $(wdw).scroll(showHidePageTopBtn);
})(jQuery, window);
