var VIWD = VIWD || {};

VIWD.RssReader2 = function () {
    "use strict";
    // Anropar superklassens konstruktor
    VIWD.Window.call(this, 500, 400, "RSS Reader", "pics/rss.png");
    var rssCont2 = this.element.content.appendChild(document.createElement("div"));
    rssCont2.className = "rsscontent2";
    this.displayFeed2();
};
// Ser till att rssReader ärver från superklassen Window
VIWD.RssReader2.prototype = Object.create(VIWD.Window.prototype);

VIWD.RssReader2.prototype.displayFeed2 = function () {
    "use strict";
    $(document).ready(function () {
        setTimeout(function () { $('.ajaxloader').show(); }, 100);
        $.ajax({
            url: "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url=" + encodeURI("http://www.body.se/rss.php")
        }).done(function (data) {
            $('.ajaxloader').remove();
            $('.rsscontent2').html(data);
        }).fail(function (jqXHR, textStatus) {
            console.log("Läsfel, status: " + textStatus);
        }); 
    });
};