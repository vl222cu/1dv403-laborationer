var VIWD = VIWD || {};

VIWD.init = function () {
    "use strict";
    var gallery = document.getElementById("gallery"),
        rss = document.getElementById("rss"),
        memory = document.getElementById("memory"),
        music = document.getElementById("music");
        
    gallery.addEventListener("click", function () {
        new VIWD.ImageViewer();
    }, false);
            
    rss.addEventListener("click", function () {
        new VIWD.RssReader();
    }, false);
    
    memory.addEventListener("click", function () {
        new VIWD.Memory();
    }, false);
    
    music.addEventListener("click", function () {
        new VIWD.MusicPlayer();
    }, false);
};
window.onload = VIWD.init;