var VIWD = VIWD || {};

VIWD.MusicPlayer = function () {
    "use strict";
    VIWD.Window.call(this, 600, 300, "Musicplayer", "pics/music.png");
    this.playMusic();
    $(document).ready(function () {
        $('.ajaxloader').remove();
    });
};

// Ser till att ImageViewer ärver från superklassen Window
VIWD.MusicPlayer.prototype = Object.create(VIWD.Window.prototype);

VIWD.MusicPlayer.prototype.playMusic = function () {
    // Skapar nödvändiga noder och variabler
    var mainMusicDiv = document.createElement("div"),
        musicBox = document.createElement("div"),
        canvas = document.createElement("canvas"),
        nodes = document.getElementsByClassName("nwcontent"),
        desktopDiv = nodes[nodes.length-1],
        canvasContext,
        source,
        context,
        analyser,
        fbc_array,
        i,
        bars,
        bar_x,
        barwidth,
        barheight;
    
    // Namnger skapade noder
    mainMusicDiv.id = "musicplayer";
    musicBox.id = "musicbox";
    canvas.id = "frequencybar";
    
    // Skapar audioinstans och sätter audioattribut
    var audio = new Audio();
    audio.setAttribute("src", "music/Delerium.mp3");
    audio.controls = true;
    
    // Lägger till i DOMen
    desktopDiv.appendChild(mainMusicDiv);
    musicBox.appendChild(audio);
    mainMusicDiv.appendChild(musicBox);
    mainMusicDiv.appendChild(canvas);
    
    context = new window.webkitAudioContext(); // AudioContext objektinstans
    analyser = context.createAnalyser(); // AnalyserNodemetod
    canvasContext = canvas.getContext("2d");
    // Audio playback styrs om till AudioContexts processgraf
    source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);
    frameLooper();
    
    // Animerar audiofrekvensen, loopar enl browserns default frame rate runt 60 FPS
    function frameLooper () {
        window.webkitRequestAnimationFrame(frameLooper); // Animerar loopfunktionen
        fbc_array = new Uint8Array(analyser.frequencyBinCount); // Innehåller datan för ljudfrekvensen
        analyser.getByteFrequencyData(fbc_array);
        canvasContext.clearRect(0, 0, canvas.width, canvas.height); // Raderar canvas
        canvasContext.fillStyle = "#00CCFF";
        bars = 100;
        for (i = 0; i < bars; i++) {
            bar_x = i * 3; // space mellan varje bar
            barwidth = 2;
            barheight = -(fbc_array[i] / 2);
            // Skriver ut varje bar med fillRectmetoden i canvas
            canvasContext.fillRect(bar_x, canvas.height, barwidth, barheight);
        }
    }
};