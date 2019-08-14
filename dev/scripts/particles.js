/**
 * Particles
 * Source: https://github.com/VincentGarreau/particles.js/
 */

(function ($) {
    var particleJsEl = $('#particles-js');

    if (particleJsEl.length) {
        particlesJS.load('particles-js', 'data/particles.json', function () {
            //console.log('Particles.js config loaded');
        });
    }
})(jQuery);
