var VIWD = VIWD || {};

VIWD.RssReader = function () {
    "use strict";
    // Anropar superklassens konstruktor
    VIWD.Window.call(this, 400, 500, "RSS Reader", "pics/rss.png");
    VIWD.RssReader.prototype.displayFeed();
};

// Ser till att rssReader ärver från superklassen Window
VIWD.RssReader.prototype = Object.create(VIWD.Window.prototype);

VIWD.RssReader.prototype.displayFeed = function () {
    "use strict";
    $(document).ready(function () {
        setTimeout(function () { $('#ajaxloader').show(); }, 300);
        $.ajax({
            url: "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url=" + encodeURI("http://www.dn.se/m/rss/senaste-nytt")
        }).done(function (data) {
            $('#ajaxloader').hide();
            $('#nwcon').html(data);
        }).fail(function (jqXHR, textStatus) {
            console.log("Läsfel, status: " + textStatus);
        }); 
    });
};