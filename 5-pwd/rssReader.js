var VIWD = VIWD || {};

VIWD.RssReader = function () {
    "use strict";
    // Anropar superklassens konstruktor
    VIWD.Window.call(this, 450, 400, "RSS Reader", "pics/rss.png");
    var rssCont = this.element.content.appendChild(document.createElement("div"));
    rssCont.className = "rsscontent";
    this.displayFeed();
};

// Ser till att rssReader ärver från superklassen Window
VIWD.RssReader.prototype = Object.create(VIWD.Window.prototype);
VIWD.RssReader.prototype.constructor = VIWD.RssReader;

VIWD.RssReader.prototype.displayFeed = function () {
    "use strict";
    $(document).ready(function () {
        setTimeout(function () { $('.ajaxloader').show(); }, 100);
        $.ajax({
            url: "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url=" + encodeURI("http://www.sf.se/sfmedia/external/rss/news.rss")
        }).done(function (data) {
            $('.ajaxloader').hide();
            $('.rsscontent').html(data);
        }).fail(function (jqXHR, textStatus) {
            console.log("Läsfel, status: " + textStatus);
        }); 
    });
};