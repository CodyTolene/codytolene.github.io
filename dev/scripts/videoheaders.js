/**
 * Make sure the homepage videos are auto-playing
 */

"use strict";

(function (d) {
    var videoOne = d.getElementById('video-1');
    var videoTwo = d.getElementById('video-2');

    if (videoOne !== null) {
        videoOne.play();
    }

    if (videoTwo !== null) {
        videoOne.play();
    }
})(document);
