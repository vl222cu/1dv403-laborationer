"use strict";
var rows = 4;
var cols = 4;

var Memory = {
    // Egenskap för att spara resultatet från den utslumpade getPictureArrayen
    tiles: [],
    // Egenskap för att hålla så att det endast går att vända två brickor
    pairs: [],
    trackTries : 0,
    trackPairs : 0,
    
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
                pic++;
            }
        }
    },   
    
    flipTile: function(pic, a) {
        a.onclick = function() {
            // Villkor som håller att inga brickor än startimg går att klicka på
            if (this.getElementsByTagName("img")[0].getAttribute("src") !== "../pics/0.png") {
                return false;
            }
            Memory.pairs.push(a);
            // Begränsar till att endast två brickor kan öppnas
            if (Memory.pairs.length < 3) {
                this.getElementsByTagName("img")[0].setAttribute("src", "../pics/" + Memory.tiles[pic] + ".png");
            } 
            // När två brickor är öppnade skickas de för kontroll 
            if (Memory.pairs.length === 2) {
                setTimeout(function() {
                    Memory.closeTile(Memory.pairs);
                }, 1000);
            }
        };
    },
    // Styr om brickorna ska vändas eller vara öppna   
    closeTile : function (close) {
        if (close[0].getElementsByTagName("img")[0].src === close[1].getElementsByTagName("img")[0].src) {
            Memory.pairs = [];
            Memory.trackPairs+=1;
            } else {
                close[0].getElementsByTagName("img")[0].setAttribute("src", "../pics/0.png");
                close[1].getElementsByTagName("img")[0].setAttribute("src", "../pics/0.png");
                Memory.pairs = [];
                Memory.trackTries+=1;
            }
        // Kontrollerar om memoryt är färdigspelat och möjlighet till ny omgång    
        if (Memory.trackPairs === (rows * cols / 2)) {
            var result = confirm("Grattis! Du lyckades på " + (Memory.trackTries + Memory.trackPairs) 
            + " försök! \nVill du spela en runda till? Klicka på OK!");
            if (result === true) {
                window.location.reload();
            }
        }
    }
};

window.onload = Memory.init;