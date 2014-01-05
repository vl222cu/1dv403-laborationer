var VIWD = VIWD || {};

VIWD.init = function () {
    "use strict";
    var gallery = document.getElementById("gallery"),
        rss = document.getElementById("rss");
        
    gallery.addEventListener("click", function () {
        new VIWD.ImageViewer();
    }, false);
            
    rss.addEventListener("click", function () {
        new VIWD.RssReader();
    }, false);
};
window.onload = VIWD.init;