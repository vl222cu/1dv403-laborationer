var VIWD = VIWD || {};

VIWD.SingleImage = function (width, height, i, thumbs) {
    "use strict";
    // Anropar superklassens konstruktor
    VIWD.Window.call(this, width, height, "Image Viewer", "pics/pic.png");
    this.getImg(i, thumbs);
};
// Ser till att singleImage ärver från superklassen Window
VIWD.SingleImage.prototype = Object.create(VIWD.Window.prototype);

VIWD.SingleImage.prototype.getImg = function (i, thumbs) {
    $(document).ready(function () {
        $('.ajaxloader').remove();
        var div = document.createElement("div"),
        image = document.createElement("img"),
        node = document.getElementsByClassName("nwcontent"),
        imgDiv = node[node.length-1];
        div.className = "imgcon";
        image.className = "singleimg";
        image.setAttribute("src", thumbs[i].URL);
        image.setAttribute("width", thumbs.width);
        image.setAttribute("height", thumbs.height);
        div.appendChild(image);
        imgDiv.appendChild(div);
    });
};