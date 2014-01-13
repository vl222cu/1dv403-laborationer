var VIWD = VIWD || {};

VIWD.Memory = function () {
    "use strict";
    VIWD.Window.call(this, 370, 370, "Memory", "pics/games.png");
    $(document).ready(function () {
        $('.ajaxloader').remove();
    });
    this.play();
};

// Ser till att ImageViewer ärver från superklassen Window
VIWD.Memory.prototype = Object.create(VIWD.Window.prototype);

VIWD.Memory.prototype.play = function () {
    "use strict";
    // Skapar noder och variabler
    var tiles = [], // Egenskap för att spara resultatet från den utslumpade getPictureArrayen
        pairs = [], // Egenskap för att hålla så att det endast går att vända två brickor
        trackTries = 0,
        trackPairs = 0,
        rows = 4,
        cols = 4,
        pic = 0,
        tr,
        td,
        i,
        j,
        result,
        text = document.createElement("span"),
        table = document.createElement("table"),
        wrapper = document.createElement("div"),
        nList = document.getElementsByClassName("nwcontent"),
        gameDiv = nList[nList.length-1];
        
    // Namnger noder
    table.className = "memory";
    wrapper.className = "wrapper";
    text.className = "text";
        
    // Lägger till i DOMen
    wrapper.appendChild(table);
    gameDiv.appendChild(wrapper);
        
    // Anrop av arrayslumpsmetoden och sparar resultatet i egenskapen tiles
    tiles = this.getPictureArray(rows, cols);
        
    // Skapar tabell med randomarrayen
    for (i = 0; i < rows; i++) {
        tr = table.insertRow();
        for (j = 0; j < cols; j++) {
            td = tr.insertCell();
                
            // Kapslar in varje bild i en a-länk
            var image = document.createElement("img");
            var a = document.createElement("a");
            a.setAttribute("href", "#");
            a.id = "startimg";
            image.setAttribute("src", "pics/0.png");
            image.alt = "hidden";
            a.appendChild(image);
            td.appendChild(a);
                
            // Anropar onclickmetoden
            flipTile(pic, a);
            pic++;
        }
    }
     // Styr vändning av brickor
    function flipTile(pic, a) {
        a.onclick = function() {
            // Villkor som håller att inga brickor än startimg går att klicka på
            if (this.getElementsByTagName("img")[0].getAttribute("src") === "pics/0.png") {
                pairs.push(a);
                // Begränsar till att endast två brickor kan vändas
                if (pairs.length < 3) {
                    this.getElementsByTagName("img")[0].setAttribute("src", "pics/" + tiles[pic] + ".png");
                } 
                // När två brickor är uppvända skickas de för kontroll 
                if (pairs.length === 2) {
                    setTimeout(function () {
                        closeTile(pairs);
                    }, 1000);
                }
            }
        };
    }
     // Styr om brickorna ska vändas eller vara öppna   
    function closeTile(close) {
        if (close[0].getElementsByTagName("img")[0].src === close[1].getElementsByTagName("img")[0].src) {
            pairs = [];
            trackPairs += 1;
        } else {
            close[0].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
            close[1].getElementsByTagName("img")[0].setAttribute("src", "pics/0.png");
            pairs = [];
            trackTries += 1;
        }
        // Kontrollerar om memoryt är färdigspelat   
        if (trackPairs === (rows * cols / 2)) {
            //text = document.createElement("span");
            //text.className = "text";
            result = "Grattis! Du lyckades på " + (trackTries + trackPairs) + " försök!";
            text.innerHTML = result;
            wrapper.appendChild(text);
        }
    }
}; 
// Randomgeneratorn
VIWD.Memory.prototype.getPictureArray = function (rows, cols) {
    "use strict";
	var numberOfImages = rows*cols,                                                 
        maxImageNumber = numberOfImages/2,
        imgPlace = [],
        i,
        randomOne,
        randomTwo;
	
    //Utplacering av bilder i Array
    for (i=0; i<numberOfImages; i++)
        imgPlace[i] = 0;
	
	for (var currentImageNumber=1; currentImageNumber<=maxImageNumber; currentImageNumber++) {		
		var imageOneOK = false,
            imageTwoOK = false;
			
		do {
            if(imageOneOK === false) {
				randomOne = Math.floor( (Math.random() * (rows*cols-0) + 0) );				
					
				if( imgPlace[randomOne] === 0 ) {
					imgPlace[randomOne] = currentImageNumber;
					imageOneOK = true;
				}
			}
				
			if(imageTwoOK === false) {
				randomTwo = Math.floor( (Math.random() * (rows*cols-0) + 0) );				
								
				if( imgPlace[randomTwo] === 0 ) {
					imgPlace[randomTwo] = currentImageNumber;
					imageTwoOK = true;
				}
			}			
		}
		while(imageOneOK === false || imageTwoOK === false);		
	}
	return imgPlace;
};
