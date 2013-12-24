"use strict";

// Skapar namespace 
var VIWD = VIWD || {};

// Windowkonstruktor
VIWD.Window = function(width, height) {
    this.width = width;
    this.height = height;
};

VIWD.Window.prototype.openWindow = function() {
    
    // Skapar tom objekt för fönsterelementen
    this.element = {};
    var e = this.element;
    
    // Parent div
     e.maincontainer = document.createElement("div");
     e.maincontainer.id = "newwindow";
     e.maincontainer.style.width = this.width + "px";
     e.maincontainer.style.height = this.height + "px";
     
     document.body.appendChild(e.maincontainer);
     
     // Plats för fönstrets namn
     e.titlebar = document.createElement("div");
     e.titlebar.className = "nwtitlebar";
     
     // Namn på fönstret
     e.titlename = document.createElement("span");
     e.titlename.className = "nwtitlename";
     
     e.maincontainer.appendChild(e.titlebar);
     
     // Fönstrets innehåll
     e.content = document.createElement("div");
     e.content.className = "nwcontent";
     
     e.maincontainer.appendChild(e.content);
     
     // Fönstrets footer
     e.footer = document.createElement("div");
     e.footer.className = "nwfooter";
     
     e.maincontainer.appendChild(e.footer);
};