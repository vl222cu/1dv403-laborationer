"use strict";

var Memory = {
    
    tiles: [],
    
    init : function() {
        var table = document.getElementById("gametable");
        
        for(var i = 0; i < 4; i++){
            var tr = table.insertRow();
            
            for(var j = 0; j < 4; j++){
                var td = tr.insertCell();
        }
    }
    document.body.appendChild(table);
        
        
        
        //Memory.tiles = RandomGenerator.getPictureArray(rows, cols);
    },    
};


window.onload = Memory.init;