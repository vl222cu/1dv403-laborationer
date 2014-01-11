var VIWD = VIWD || {};

VIWD.MusicPlayer = function () {
    "use strict";
    VIWD.Window.call(this, 360, 300, "Musicplayer", "pics/music.png");
    this.playMusic();
    $(document).ready(function () {
        $('.ajaxloader').remove();
    });
};

// Ser till att ImageViewer ärver från superklassen Window
VIWD.MusicPlayer.prototype = Object.create(VIWD.Window.prototype);

VIWD.MusicPlayer.prototype.playMusic = function () {
    // Skapar alla nödvändiga noder
    var mainDiv = document.createElement("div"),
        name = document.createElement("p"),
        audio1 = document.createElement("audio"),
        audio2 = document.createElement("audio"),
        audio3 = document.createElement("audio"),
        audio4 = document.createElement("audio"),
        audio5 = document.createElement("audio"),
        trackOne = document.createElement("span"),
        trackTwo = document.createElement("span"),
        trackThree = document.createElement("span"),
        trackFour = document.createElement("span"),
        trackFive = document.createElement("span"),
        nodes = document.getElementsByClassName("nwcontent"),
        musicDiv = nodes[nodes.length-1];
        
    // Namnger alla skapade noder
    mainDiv.className = "audiowrapper";
    name.className = "feelgood";
    trackOne.id = "trackone";
    trackTwo.id = "tracktwo";
    trackThree.id = "trackthree";
    trackFour.id = "trackfour";
    trackFive.id = "trackfour";
        
    // Tilldelar text till noderna
    name.textContent = "Chill tunes";
    trackOne.textContent = "\nTrack 1. Lune - Leave The World Behind You"; 
    trackTwo.textContent = "\nTrack 2. Avicii - Hey Brother";
    trackThree.textContent = "\nTrack 3. Ylvis - The Fox";
    trackFour.textContent = "\nTrack 4. Imogen Heap - Hide And Seek";
    trackFive.textContent = "\nTrack 5. Delerium - Silence ft Sarah McLachlan"; 
    
    // Sätter attribut på audiotaggarna
    audio1.controls = "controls";
    audio1.setAttribute("src", "music/Lune.mp3"); /*Konverterat från YouTube http://www.youtube.com/watch?v=6Cp6mKbRTQY*/
    audio2.controls = "controls";
    audio2.setAttribute("src", "music/Avicii.mp3"); /*Konverterat från YouTube http://www.youtube.com/watch?v=tqXja497ZQo*/
    audio3.controls = "controls";
    audio3.setAttribute("src", "music/Ylvis.mp3"); /*Konverterat från YouTube http://www.youtube.com/watch?v=jofNR_WkoCE*/
    audio4.controls = "controls";
    audio4.setAttribute("src", "music/Imogen_Heap.mp3"); /*Konverterat från YouTube http://www.youtube.com/watch?v=UYIAfiVGluk*/
    audio5.controls = "controls";
    audio5.setAttribute("src", "music/Delerium.mp3"); /*Konverterat från YouTube http://www.youtube.com/watch?v=kEvE_04x-xI*/
    
    // Lägger till i DOMen
    mainDiv.appendChild(name);
    mainDiv.appendChild(trackOne);
    mainDiv.appendChild(audio1);
    mainDiv.appendChild(trackTwo);
    mainDiv.appendChild(audio2);
    mainDiv.appendChild(trackThree);
    mainDiv.appendChild(audio3);
    mainDiv.appendChild(trackFour);
    mainDiv.appendChild(audio4);
    mainDiv.appendChild(trackFive);
    mainDiv.appendChild(audio5);
    musicDiv.appendChild(mainDiv);
};