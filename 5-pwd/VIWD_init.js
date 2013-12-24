"use strict";

var VIWD = VIWD || {};

VIWD.init = function() {
    
    var gallery = document.getElementById("gallery");
    
    gallery.onclick = function() {
        VIWD.galleryWindow();
    };
};

VIWD.galleryWindow = function() {
    
    var galleryWindow = new VIWD.Window(600, 400);
    galleryWindow.openWindow();
};
window.onload = VIWD.init;