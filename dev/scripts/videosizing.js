/**
 * Video ratio size updating (mobile/pc)
*/

(function ($) {
    'use strict';

    /**
    * Responsive (sizing) updates
    */
    function initVideoSizeUpdater() {
        var windowWidth = $(window).width();
        var isMobile = $(window).width() <= 992;
        $(window).on('resize', function (event) {
            if (windowWidth == $(window).width()) {
                return;
            }
            windowWidth = $(window).width();
            var isMobileAfterResize = $(window).width() <= 992;
            if ((isMobileAfterResize && !isMobile) || (!isMobileAfterResize && isMobile)) {
                isMobileAfterResize ? updateVideoRatio(true) : updateVideoRatio(false);
            }
            isMobile = isMobileAfterResize;
        });

        var updateVideoRatio = function (mobileView) {
            $(mobileView ? '.embed-responsive-16by9' : '.embed-responsive-1by1')
                .removeClass(mobileView ? 'embed-responsive-16by9' : 'embed-responsive-1by1')
                .addClass(mobileView ? 'embed-responsive-1by1' : 'embed-responsive-16by9');
        }

        updateVideoRatio(isMobile);
    }
    initVideoSizeUpdater();
})(jQuery);
