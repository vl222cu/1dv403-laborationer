var VIWD = VIWD || {};

VIWD.ImageViewer = function () {
    // Anropar superklassens konstruktor
    VIWD.Window.call(this, 450, 600, "Image Viewer", "pics/pic.png");
    VIWD.ImageViewer.prototype.getThumbPics();
};

// Ser till att ImageViewer ärver från superklassen Windows
VIWD.ImageViewer.prototype = Object.create(VIWD.Window.prototype);

// Ajaxanrop som kommer att returnera JSON-sträng med tumnagelbilder 
VIWD.ImageViewer.prototype.getThumbPics = function () {
    var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
    var container = document.getElementsByClassName("nwcontent");
    new VIWD.AjaxCon(url, function(data) {
        container.innerHTML = data;
    });
};






