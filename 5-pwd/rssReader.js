var VIWD = VIWD || {};

VIWD.RssReader = function () {
    // Anropar superklassens konstruktor
    VIWD.Window.call(this, 350, 500, "RSS Reader", "pics/rss.png");
};

// Ser till att rssReader ärver från superklassen Window
VIWD.RssReader.prototype = Object.create(VIWD.Window.prototype);