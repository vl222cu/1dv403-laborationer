var VIWD = VIWD || {};

VIWD.Memory = function () {
    VIWD.Window.call(this, 300, 350, "Memory", "pics/games.png")
},

// Ser till att ImageViewer ärver från superklassen Window
VIWD.Memory.prototype = Object.create(VIWD.Window.prototype);