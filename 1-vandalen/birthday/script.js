"use strict";

window.onload = function(){
	
	var birthday = function(date){
	// Vid felaktig inmatning av datum kastas ett undantag med ett meddelande till användaren.
    if(! Date.parse(date.toString())) {
	throw new Error ("Oops! Din inmatning överrenstämmer inte med den rätta formen ÅÅÅÅ-MM-DD, försök igen!"); 
	}
    var splitDate = date.split("-");
    var mm = splitDate[1] - 1;
    var dd = splitDate[2];
    var now = new Date(); 
    var bDay = new Date();
    var yy = bDay.getFullYear();
    bDay.setDate(dd);
    bDay.setMonth(mm);
    bDay.setFullYear(yy + 1);
    var result = (Math.floor((bDay.getTime() - now) / 86400000));
    if (result>=365) {
        result=result-365;
    }
    return result;
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};