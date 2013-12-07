"use strict";

var Memory = {
    
    tiles: [],
    
    init : function() {
        var rows = 4;
        var cols = 4;
        var table = document.getElementById("gametable");
        
        Memory.tiles = RandomGenerator.getPictureArray(rows, cols);

        // Skapar tabell med randomarrayen
        for(var i = 0; i < rows; i++) {
            var tr = document.createElement("tr");
            for(var j = 0; j < cols; j++) {
                var image = document.createElement("img");
                var a = document.createElement("a");
                a.className = "imgID";
                image.setAttribute("src", "../pics/0.png");
                image.alt = "hidden";
                var td = document.createElement("td");
                a.appendChild(image);
                td.appendChild(a);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    }
};

window.onload = Memory.init;