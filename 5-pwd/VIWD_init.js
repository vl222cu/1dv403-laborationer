var VIWD = VIWD || {};

VIWD.init = function () {
    "use strict";
    var gallery = document.getElementById("gallery");
    gallery.onclick = function () {
        VIWD.galleryWindow();
    };
};
VIWD.galleryWindow = function () {
    "use strict";
    var galleryWindow = new VIWD.ImageViewer();
    galleryWindow.openWindow();
};
window.onload = VIWD.init;