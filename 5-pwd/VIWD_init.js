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
    var galleryWindow = new VIWD.Window(450, 600, "Image Viewer", "pics/pic.png");
    galleryWindow.openWindow();
};
window.onload = VIWD.init;