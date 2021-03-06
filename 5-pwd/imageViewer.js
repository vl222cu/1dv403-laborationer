var VIWD = VIWD || {};

VIWD.ImageViewer = function () {
    "use strict";
    // Anropar superklassens konstruktor
    VIWD.Window.call(this, 550, 300, "Image Viewer", "pics/pic.png");
    this.getThumbPics();
};

// Ser till att ImageViewer ärver från superklassen Window
VIWD.ImageViewer.prototype = Object.create(VIWD.Window.prototype);

// Ajaxanrop som kommer att returnera JSON-sträng med tumnagelbilder 
VIWD.ImageViewer.prototype.getThumbPics = function () {
    "use strict";
    // Sätter timer på ajaxanropet, en animerad gif-bild visas om anropet 
    //till servern drar ut på tiden
    $(document).ready(function () {
        setTimeout(function () { $('.ajaxloader').show(); }, 100);
        $.ajax({
            url: "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/"
        }).done(function (data) {
            $('.ajaxloader').remove();
            var thumbs = $.parseJSON(data);
            VIWD.ImageViewer.prototype.renderThumbs(thumbs);
        }).fail(function (jqXHR, textStatus) {
            console.log("Läsfel, status: " + textStatus);
        }); 
    });
};

VIWD.ImageViewer.prototype.renderThumbs = function (thumbs) {
    "use strict";
    var thumbDiv, 
        thumb,
        a,
        i,
        nodeList = document.getElementsByClassName("nwcontent"),
        contentDiv = nodeList[nodeList.length-1],
        size = setSize(thumbs);
    
    for (i = 0; i < thumbs.length; i++) {
        // Skapar boxar till tumnaglarna    
        thumbDiv = document.createElement("div");
        thumbDiv.className = "thumbdiv";
        thumbDiv.style.width = size.width + "px";
        thumbDiv.style.height = size.height + "px";
    
        // Skapar tumnagelbilder
        thumb = document.createElement("img");
        a = document.createElement("a");
        a.setAttribute("href", "#");
        thumb.src = thumbs[i].thumbURL;
        VIWD.ImageViewer.prototype.viewSingleThumb(a, i, thumbs);
        
        a.appendChild(thumb);
        thumbDiv.appendChild(a);
        contentDiv.appendChild(thumbDiv);
    }
    // Tar fram tumnagelns bredd och höjd
    function setSize (thumbs) {
        var width = 0,
            height = 0,
            t;
        
        for (t in thumbs) {
            if (thumbs[t].thumbWidth > width) {
                width = thumbs[t].thumbWidth;
            }
            if (thumbs[t].thumbHeight > height) {
                height = thumbs[t].thumbHeight;
            }
        } return {
            width: width,
            height: height
        };
    }
};

VIWD.ImageViewer.prototype.viewSingleThumb = function (a, i, thumbs) {
    "use strict";
    a.onclick = function () { 
        new VIWD.SingleImage(thumbs[i].width + 10, thumbs[i].height + 5, i, thumbs);
    };
};