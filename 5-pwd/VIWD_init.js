var VIWD = VIWD || {};

VIWD.init = function () {
    "use strict";
    var gallery = document.getElementById("gallery"),
        rss = document.getElementById("rss"),
        memory = document.getElementById("memory"),
        music = document.getElementById("music");

    // Kopplar till händelse för ImageViewer
    gallery.addEventListener("click", function () {
        new VIWD.ImageViewer();
    }, false);
    // Kopplar till händelse för RssReader       
    rss.addEventListener("click", function () {
        new VIWD.RssReader();
    }, false);
    // Kopplar till händelse för Memory
    memory.addEventListener("click", function () {
        new VIWD.Memory();
    }, false);
    // Kopplar till händelse för MusicPlayer
    music.addEventListener("click", function () {
        new VIWD.MusicPlayer();
    }, false);
};
window.onload = VIWD.init;