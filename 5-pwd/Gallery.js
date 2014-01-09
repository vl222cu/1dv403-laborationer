var VIWD = VIWD || {};

VIWD.ImageViewer = function () {
    "use strict";
    // Anropar superklassens konstruktor
    VIWD.Window.call(this, 435, 500, "Image Viewer", "pics/pic.png");
     var thumbDiv, 
        thumb,
        a,
        i,
        //contentDiv = document.getElementById("thumbcon"),
    this.element.content.appendChild(thumbDiv);
    
    $(document).ready(function () {
        setTimeout(function () { $('#ajaxloader').show(); }, 100);
        $.ajax({
            url: "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/"
        }).done(function (data) {
            $('#ajaxloader').hide();
            var thumbs = $.parseJSON(data);
            renderThumbs(thumbs);
        }).fail(function (jqXHR, textStatus) {
            console.log("Läsfel, status: " + textStatus);
        }); 
    });
    
    function renderThumbs (thumbs) {
    var size = setSize(thumbs);
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
    }
};

// Ser till att ImageViewer ärver från superklassen Window
VIWD.ImageViewer.prototype = Object.create(VIWD.Window.prototype);

