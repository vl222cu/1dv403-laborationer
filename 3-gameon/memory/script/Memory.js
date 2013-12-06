"use strict";

var Memory = {
    
    tiles: [],
    
    init : function() {
        var rows = 4;
        var cols = 4;
        Memory.tiles = RandomGenerator.getPictureArray(rows, cols);
        alert(Memory.tiles);
    }

};
window.onload = Memory.init;