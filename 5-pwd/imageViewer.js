var VIWD = VIWD || {};

VIWD.ImageViewer = function () {
    "use strict";
    // Anropar superklassens konstruktor
    VIWD.Window.call(this, 450, 600, "Image Viewer", "pics/pic.png");
    VIWD.ImageViewer.prototype.getThumbPics();
};

// Ser till att ImageViewer ärver från superklassen Window
VIWD.ImageViewer.prototype = Object.create(VIWD.Window.prototype);

// Ajaxanrop som kommer att returnera JSON-sträng med tumnagelbilder 
VIWD.ImageViewer.prototype.getThumbPics = function () {
    "use strict";
    // Sätter timer på ajaxanropet, en animerad gif-bild visas om anropet 
    //till servern drar ut på tiden
    $(document).ready(function () {
        setTimeout(function () { $('#ajaxloader').show(); }, 300);
        $.ajax({
            url: "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/"
        }).done(function (data) {
            $('#ajaxloader').hide();
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
        contentDiv = document.getElementById("nwcon"),
        size = setSize(thumbs);
    
    for (i = 0; i < thumbs.length; ++i) {
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
    
        a.appendChild(thumb);
        thumbDiv.appendChild(a);
        contentDiv.appendChild(thumbDiv);
    } 
    
    // Tar fram tumnagelns bredd och höjd
    function setSize(thumbs) {
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