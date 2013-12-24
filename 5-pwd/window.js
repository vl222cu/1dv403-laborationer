"use strict";

// Skapar namespace 
var VIWD = VIWD || {};

// Windowkonstruktor
VIWD.Window = function(width, height) {
    this.width = width;
    this.height = height;
};

VIWD.Window.prototype.openWindow = function() {
     this.element = document.createElement("div");
     this.element.id = "newwindow";
     this.element.style.width = this.width + "px";
     this.element.style.height = this.height + "px";
     document.body.appendChild(this.element);

    
};