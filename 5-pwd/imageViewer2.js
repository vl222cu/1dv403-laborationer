var VIWD = VIWD || {};

VIWD.ImageViewer = function () {
    "use strict";
    // Anropar superklassens konstruktor
    VIWD.Window.call(this, 540, 300, "Image Viewer", "pics/pic.png");
    this.getThumbPics();
};

// Ser till att ImageViewer ärver från superklassen Window
VIWD.ImageViewer.prototype = Object.create(VIWD.Window.prototype);

// Ajaxanrop som kommer att returnera JSON-sträng med tumnagelbilder 
VIWD.ImageViewer.prototype.getThumbPics = function () {
    "use strict";
    var width = 0,
        height = 0,
        thumbDiv, 
        thumb,
        a,
        i,
        size,
        nodeList = document.getElementsByClassName("nwcontent"),
        contentDiv = nodeList[nodeList.length-1];
            
    // Sätter timer på ajaxanropet, en animerad gif-bild visas om anropet 
    //till servern drar ut på tiden
    $(document).ready(function () {
        setTimeout(function () { $('.ajaxloader').show(); }, 100);
        $.ajax({
            url: "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/"
        }).done(function (data) {
            $('.ajaxloader').remove();
            var thumbs = $.parseJSON(data);
            renderThumbs(thumbs);
        }).fail(function (jqXHR, textStatus) {
            console.log("Läsfel, status: " + textStatus);
        }); 
    });
    // Tar fram tumnagelns bredd och höjd
    function setSize (thumbs) {
        for (i = 0; i < thumbs.length; i++) {
            if (thumbs[i].thumbWidth > width) {
                width = thumbs[i].thumbWidth;
            }
            if (thumbs[i].thumbHeight > height) {
                height = thumbs[i].thumbHeight;
            }
        } return {
            width: width,
            height: height
        };
    }
    // Återger bilderna i fönstret
    function renderThumbs(thumbs) {
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
        
            // Lägger till i DOMen
            a.appendChild(thumb);
            thumbDiv.appendChild(a);
            contentDiv.appendChild(thumbDiv);
        }
    }
};
// Återger den klickade bilden i nytt fönster
VIWD.ImageViewer.prototype.viewSingleThumb = function (a, i, thumbs) {
    "use strict";
    a.onclick = function () { 
        new VIWD.SingleImage(thumbs[i].width + 10, thumbs[i].height + 5, i, thumbs);
    };
};