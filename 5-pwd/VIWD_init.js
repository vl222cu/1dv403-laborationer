var VIWD = VIWD || {};

VIWD.init = function () {
    "use strict";
    var gallery = document.getElementById("gallery"),
        rss = document.getElementById("rss");
    gallery.onclick = function () {
        VIWD.galleryWindow();
    };
    rss.onclick = function () {
        VIWD.rssWindow();
    };
};
VIWD.galleryWindow = function () {
    "use strict";
    var galleryWindow = new VIWD.ImageViewer();
    galleryWindow.openWindow();
};
VIWD.rssWindow = function () {
    "use strict";
    var rssWindow = new VIWD.RssReader();
    rssWindow.openWindow();
};
window.onload = VIWD.init;