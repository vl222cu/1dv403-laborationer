var VIWD = VIWD || {};

VIWD.singleImage = function (width, height, i, thumbs) {
    "use strict";
    // Anropar superklassens konstruktor
    VIWD.Window.call(this, width, height, "Image Viewer", "pics/pic.png");
    this.getImg(i, thumbs);
};

VIWD.singleImage.prototype = Object.create(VIWD.Window.prototype);

VIWD.singleImage.prototype.getImg = function (i, thumbs) {
    $(document).ready(function () {
        $('.ajaxloader').remove();
        var image = document.createElement("img"),
        node = document.getElementsByClassName("nwcontent"),
        imgDiv = node[node.length-1];
        image.className = "singleimg";
        image.setAttribute("src", thumbs[i].URL);
        image.setAttribute("width", thumbs.width);
        image.setAttribute("height", thumbs.height);
        imgDiv.appendChild(image);
    });
};