var VIWD = VIWD || {};

VIWD.ImageViewer = function () {
    // Anropar superklassens konstruktor
    VIWD.Window.call(this, 450, 600, "Image Viewer", "pics/pic.png");
    VIWD.ImageViewer.prototype.getThumbPics();
};

// Ser till att ImageViewer ärver från superklassen Window
VIWD.ImageViewer.prototype = Object.create(VIWD.Window.prototype);

// Ajaxanrop som kommer att returnera JSON-sträng med tumnagelbilder 
VIWD.ImageViewer.prototype.getThumbPics = function () {
    var container = document.getElementById("test");
    var ajaxResult = $.ajax({
        url: "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/"
    }).done(function(data) {
        container.innerHTML = data;
    });
};






