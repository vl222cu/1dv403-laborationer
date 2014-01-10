var VIWD = VIWD || {};

VIWD.MusicPlayer = function () {
    "use strict";
    VIWD.Window.call(this, 350, 300, "Musicplayer", "pics/music.png");
    $(document).ready(function () {
        $('.ajaxloader').remove();
    });
    this.playMusic();
};

// Ser till att ImageViewer ärver från superklassen Window
VIWD.MusicPlayer.prototype = Object.create(VIWD.Window.prototype);

VIWD.MusicPlayer.prototype.playMusic = function () {
    var div = document.createElement("div"),
        audio = document.createElement("audio"),
        name = document.createElement("p"),
        trackOne = document.createElement("span"),
        nodes = document.getElementsByClassName("nwcontent"),
        musicDiv = nodes[nodes.length-1];
        div.className = "audio";
        name.className = "feelgood";
        trackOne.id = "trackone";
        name.textContent = "Vivi's favorite songs";
        trackOne.textContent = "\nTrack 1. Lune - Leave the world behind you";
        audio.controls = "controls";
        audio.setAttribute("src", "music/Lune.mp3");
        
        div.appendChild(name);
        div.appendChild(audio);
        div.appendChild(trackOne);
        musicDiv.appendChild(div);
};