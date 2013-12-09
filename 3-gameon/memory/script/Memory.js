"use strict";
var rows = 4;
var cols = 4;

var Memory = {
    // Egenskap för att spara resultatet från den utslumpade getPictureArrayen
    tiles: [],
    // Egenskap för att hålla så att det endast går att vända två brickor
    pairs: [],
    
    init : function() {
        
        var pic = 0;
        var table = document.getElementById("gametable");
        
        // Anrop av arrayslumpsmetoden och sparar resultatet i egenskapen tiles
        Memory.tiles = RandomGenerator.getPictureArray(rows, cols);
        
        // Skapar tabell med randomarrayen
        for(var i = 0; i < rows; i++){
            var tr = table.insertRow();
            for(var j = 0; j < cols; j++){
                var td = tr.insertCell();
                
                // Kapslar in varje bild i en a-länk
                var image = document.createElement("img");
                var a = document.createElement("a");
                a.id = "startimg";
                image.setAttribute("src", "../pics/0.png");
                image.alt = "hidden";
                a.appendChild(image);
                td.appendChild(a);
                
                // Anropar onclickmetoden
                Memory.flipTile(pic, a);
            }
        }
    },   
    
    flipTile: function(pic, a) {
        a.onclick = function() {
        
        Memory.pairs.push(a);
        if (Memory.pairs.length < 3) {
            this.getElementsByTagName("img")[0].setAttribute("src", "../pics/" + Memory.tiles[pic] + ".png");
        } 
        
    };
}

};
window.onload = Memory.init;