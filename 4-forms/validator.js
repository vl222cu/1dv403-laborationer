"use strict";

var Validator = {
    
    init : function() {
        
        // Skapar spantagg till förnamnsfältet
        var fname = document.getElementById("forname");
        var input = document.getElementById("forname");
        var span = document.createElement("span");
        span.setAttribute("id", "fnameprompt");
        insertAfter(input, span);
        fname.focus();
        
        // Skapar spantagg till efternamnsfältet
        var lname = document.getElementById("lastname");
        input = document.getElementById("lastname");
        span = document.createElement("span");
        span.setAttribute("id", "lnameprompt");
        insertAfter(input, span);
        
        // Skapar spantag till postnummersfältet
        var postal = document.getElementById("postal");
        input = document.getElementById("postal");
        span = document.createElement("span");
        span.setAttribute("id", "postalprompt");
        insertAfter(input, span);
        
        // Skapar spantag till epostsfältet
        var epost = document.getElementById("epost");
        input = document.getElementById("epost");
        span = document.createElement("span");
        span.setAttribute("id", "epostprompt");
        insertAfter(input, span);
        
        // Hämtar formelementet 
        var form = document.getElementById("myForm");
        
        // Kopplat händelse till varje element som anropar validering för resp fält
        fname.onkeyup = validateName;
        lname.onkeyup = validateLastName;
        postal.onkeyup = validatePostal;
        epost.onkeyup = validateEmail;
        form.onsubmit = validateForm;
        
        // Validering för förnamnsfältet
        function validateName() {
            var forname = fname.value;
            
            if(forname.length === 0) {
                produceMessage("Detta fält får inte lämnas blankt", "fnameprompt", "red");
                return false;
            }
            if(!forname.match(/^[A-Za-zåäöÅÄÖ*\s\-[A-Za-zåäöÅÄÖ]*$/)) {
                produceMessage("Förnamnet får endast bestå av bokstäver", "fnameprompt", "red");
                return false;
            }
            produceMessage("Korrekt", "fnameprompt", "green");
            return true;
        }
        
        // Validering för efternamnsfältet
        function validateLastName() {
            var lastName = lname.value;
            
            if(lastName.length === 0) {
                produceMessage("Detta fält får inte lämnas blankt", "lnameprompt", "red");
                return false;
            }
            if(!lastName.match(/^[A-Za-zåäöÅÄÖ*\s\-[A-Za-zåäöÅÄÖ]*$/)) {
                produceMessage("Efternamnet får endast bestå av bokstäver", "lnameprompt", "red");
                return false;
            }
            produceMessage("Korrekt", "lnameprompt", "green");
            return true;
        }
        
        // Validering för postnummersfältet
        function validatePostal() {
            var postNo = postal.value;
            
            if(postNo.length === 0) {
                produceMessage("Postnumret behöver fyllas i", "postalprompt", "red");
                return false;
            }
            if(!postNo.match(/^[0-9]{5}$/)) {
                produceMessage("Postnumret ska anges i format XXXXX, t.ex. 31223", "postalprompt", "red");
                return false;
            }
            produceMessage("Korrekt", "postalprompt", "green");
            return true;
        }
        
        // Validering för epostsfältet
        function validateEmail() {
            var email = epost.value;

            if (email.length === 0) {
                produceMessage("E-postadressen behöver fyllas i", "epostprompt", "red");
                return false;
            }

            if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
                produceMessage("E-postadressen är felaktig ifylld", "epostprompt", "red");
                return false;
            }
            produceMessage("Korrekt", "epostprompt", "green");
            return true;
        }
        
        // Skapar meddelandet vid anrop från resp valideringspost
        function produceMessage(message, prompt, color) {
            document.getElementById(prompt).textContent = message;
            document.getElementById(prompt).style.color = color;
        }
     
        // Funktion för att lägga till spantaggen efter inputtaggen
        function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }
        
        // Anrop vid onsubmit för validering av alla fält innan info skickas till servern
        function validateForm() {
            if (validateName() && validateLastName() && validatePostal() && validateEmail()) {
                return true;
            } 
            return false;
        }
    }
};
window.onload = Validator.init;
