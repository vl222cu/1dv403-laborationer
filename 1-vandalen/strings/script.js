"use strict";

window.onload = function(){
  
	// I denna funktion ska du skriva koden för att hantera "spelet"
    var convertString = function(str){
		// Vid fel kastas ett undantag med ett meddelande till användaren.    
		if (str.length === 0) {
		throw new Error ("Oops! Har du missat att skriva dit en text?"); 
		} 
		str = str.split("");
	    for (var i = 0; i <= str.length; i++) {
	        if ((str[i] >= 'a') && (str[i] <= 'ö')) { 
	            str[i] = str[i].toUpperCase(); 
	            continue; 
	        }
	        if ((str[i] >= 'A') && (str[i] <= 'Ö')) { 
	            str[i] = str[i].toLowerCase(); 
	            continue; 
	        }
	    }
	    str = str.join("");
	    return str.replace(/a/gi, "#"); // Returnerar den konverterade strängen.
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
			var answer = convertString(input.value); // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};