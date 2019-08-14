/**
 * Cookie/Privacy Policy Popup
 */

"use strict";

(function (wdw) {
    wdw.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "rgba(34,	38,	41, 0.9)",
                "text": "#ffffff"
            },
            "button": {
                "background": "#98d049",
                "text": "#000000"
            }
        },
        "theme": "classic",
        "content": {
            "message": "This website uses cookies to ensure you get the best experience possible.",
            "dismiss": "Got It!",
            "link": "Learn more",
            "href": "/privacy"
        },
        "position": "bottom-left"
    });
})(window);
