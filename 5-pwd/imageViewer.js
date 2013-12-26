var VIWD = VIWD || {};

VIWD.ImageViewer = function () {
    // Anropar superklassens konstruktor
    VIWD.Window.call(this, 450, 600, "Testar Viewer", "pics/pic.png");
};

// Ser till att ImageViewer ärver från superklassen Windows
VIWD.ImageViewer.prototype = Object.create(VIWD.Window.prototype);








