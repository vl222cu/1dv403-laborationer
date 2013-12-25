// Skapar namespace 
var VIWD = VIWD || {};

// Windowkonstruktor
VIWD.Window = function (width, height, title, icon) {
    "use strict";
    this.width = width;
    this.height = height;
    this.icon = icon;
    this.title = title;
    // Skapar tom objekt för fönsterelementen
    this.element = {};
};

VIWD.Window.prototype.openWindow = function () {
    "use strict";
    var e = this.element;
    var main = document.getElementById("container");
    // Parent div
    e.mainContainer = document.createElement("div");
    e.mainContainer.id = "newwindow";
    e.mainContainer.style.width = this.width + "px";
    e.mainContainer.style.height = this.height + "px";
     
    // Plats för fönstrets namn
    e.titleBar = document.createElement("div");
    e.titleBar.className = "nwtitlebar";
     
    // Skapar titelikonen
    e.icon = document.createElement("img");
    e.icon.className = "titleicon";
    e.icon.setAttribute("src", this.icon);
     
    // Namn på fönstret
    e.titleName = document.createElement("span");
    e.titleName.className = "nwtitlename";
    e.titleName.textContent = this.title;
     
    // Skapar knapp för att stänga fönstret
    e.closeButton = document.createElement("a");
    e.closeImg = document.createElement("img");
    e.closeImg.id = "closebutton";
    e.closeButton.setAttribute("href", "#");
    e.closeImg.setAttribute("src", "pics/close16.png");
     
    // Fönstrets innehåll
    e.content = document.createElement("div");
    e.content.className = "nwcontent";
     
    // Fönstrets footer
    e.footer = document.createElement("div");
    e.footer.className = "nwfooter";
     
    // Lägger till alla element i parent div
    e.closeButton.appendChild(e.closeImg);
    e.titleBar.appendChild(e.icon);
    e.titleBar.appendChild(e.titleName);
    e.titleBar.appendChild(e.closeButton);
    e.mainContainer.appendChild(e.titleBar);
    e.mainContainer.appendChild(e.content);
    e.mainContainer.appendChild(e.footer);
    main.appendChild(e.mainContainer);
     
    // Kopplar till händelse för stängknappen
    e.closeButton.addEventListener("click", function () {
        main.removeChild(e.mainContainer);
    }, false);
};

