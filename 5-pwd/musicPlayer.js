var VIWD = VIWD || {};

VIWD.MusicPlayer = function () {
    "use strict";
    VIWD.Window.call(this, 300, 300, "Musicplayer", "pics/music.png");
};

// Ser till att ImageViewer ärver från superklassen Window
VIWD.MusicPlayer.prototype = Object.create(VIWD.Window.prototype);

VIWD.MusicPlayer.prototype.playMusic = function () {
    
};