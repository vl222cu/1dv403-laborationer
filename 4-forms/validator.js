"use strict";

var Validator = {
    
    init : function() {
        
        // Skapar spantagg till förnamnsfältet
        var fname = document.getElementById("forname");
        var input = document.getElementById("forname");
        var span = document.createElement("span");
        span.setAttribute("id", "fnameprompt");
        span.setAttribute("class", "valid invalid");
        insertAfter(input, span);
        fname.focus();
        
        // Skapar spantagg till efternamnsfältet
        var lname = document.getElementById("lastname");
        input = document.getElementById("lastname");
        span = document.createElement("span");
        span.setAttribute("id", "lnameprompt");
        span.setAttribute("class", "valid invalid");
        insertAfter(input, span);
        
        // Skapar spantag till postnummersfältet
        var postal = document.getElementById("postal");
        input = document.getElementById("postal");
        span = document.createElement("span");
        span.setAttribute("id", "postalprompt");
        span.setAttribute("class", "valid invalid");
        insertAfter(input, span);
        
        // Skapar spantag till epostsfältet
        var epost = document.getElementById("epost");
        input = document.getElementById("epost");
        span = document.createElement("span");
        span.setAttribute("id", "epostprompt");
        span.setAttribute("class", "valid invalid");
        insertAfter(input, span);
        
        // Hämtar formelementet 
        //var button = document.getElementById("button");
        var form = document.getElementById("myForm");
        
        // Kopplat händelse till varje element som anropar validering för resp fält
        fname.onkeyup = validateName;
        lname.onkeyup = validateLastName;
        postal.onkeyup = validatePostal;
        epost.onkeyup = validateEmail;
        form.onsubmit = validateForm;

        // Validering för förnamnsfältet
        function validateName() {
            var confirmName = document.getElementById("fnameprompt");
            var forname = fname.value;
            
            if(forname.length === 0) {
                confirmName.classList.remove("valid");
                confirmName.textContent = "Detta fält får inte lämnas blankt";
                return false;
            }
            if(!forname.match(/^[A-Za-zåäöÅÄÖ*-[A-Za-zåäöÅÄÖ]*$/)) {
                confirmName.classList.remove("valid");
                confirmName.textContent = "Förnamnet får endast bestå av bokstäver";
                return false;
            }
            confirmName.classList.add("valid");
            confirmName.textContent = "Korrekt";
            return true;
        }
        
        // Validering för efternamnsfältet
        function validateLastName() {
            var confirmLastName = document.getElementById("lnameprompt");
            var lastName = lname.value;
            
            if(lastName.length === 0) {
                confirmLastName.classList.remove("valid");
                confirmLastName.textContent = "Detta fält får inte lämnas blankt";
                return false;
            }
            if(!lastName.match(/^[A-Za-zåäöÅÄÖ*-[A-Za-zåäöÅÄÖ]*$/)) {
                confirmLastName.classList.remove("valid");
                confirmLastName.textContent = "Efternamnet får endast bestå av bokstäver";
                return false;
            }
            confirmLastName.classList.add("valid");
            confirmLastName.textContent = "Korrekt";
            return true;
        }
        
        // Validering för postnummersfältet
        function validatePostal() {
            var confirmPostal = document.getElementById("postalprompt");
            var postNo = postal.value;
            var format = /^\d{5}$|^\d{3}[- ]\d{2}$|^(SE)+\d{5}$|^(SE)+\d{3}[- ]\d{2}$|^(SE )+(\d{3}[- ]\d{2}|\d{5})$/;

            
            if(postNo.length === 0) {
                confirmPostal.classList.remove("valid");
                confirmPostal.textContent = "Postnumret behöver fyllas i";
                return false;
            } 
            if(!postNo.match(format)) {
                confirmPostal.classList.remove("valid");
                confirmPostal.textContent = "Postnumret ska anges i format XXXXX, t.ex. 31223";
                return false;
            }
            var replacePostNo = postNo.replace(/(SE)?-?\s?/g,"");
            var elem = document.getElementById("postal");
            elem.value = replacePostNo;
            confirmPostal.classList.add("valid");
            confirmPostal.textContent = "Korrekt";
            return true;
        }
        
        // Validering för epostsfältet
        function validateEmail() {
            var confirmEmail = document.getElementById("epostprompt");
            var email = epost.value;

            if (email.length === 0) {
                confirmEmail.classList.remove("valid");
                confirmEmail.textContent = "E-postadressen behöver fyllas i";
                return false;
            }

            if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
                confirmEmail.classList.remove("valid");
                confirmEmail.textContent = "E-postadressen är felaktig ifylld";
                return false;
            }
            confirmEmail.classList.add("valid");
            confirmEmail.textContent = "Korrekt";
            return true;
        }
        
        // Funktion för att lägga till spantaggen efter inputtaggen
        function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }
        
        // Anrop vid onsubmit för validering av alla fält och bekräftelsepopup
        // innan info skickas till servern
        function validateForm(e) {
            e.preventDefault();
            if (!validateName() || !validateLastName() || !validatePostal() || !validateEmail()) {
                return false;
            }
            
            // Skapar modal popupruta
            var div = document.createElement("div");
            div.className = "background";
            var modalDiv = document.createElement("div");
            modalDiv.className = "modal";
            var buttonOk = document.createElement("button");
            buttonOk.id = "btnok";
            buttonOk.textContent = "Bekräfta ditt köp";
            var buttonCancel = document.createElement("button");
            buttonCancel.id = "btncanc";
            buttonCancel.textContent = "Avbryt";
            
            // Skapar textrad i popupen för samtliga fälten
            var title = document.createElement("h1");
            title.id = "confirm";
            title.textContent = "Vänligen bekräfta ditt köp";
            var NameTag = document.createElement("p");
            NameTag.id = "fn";
            NameTag.textContent = "Förnamn: " + fname.value;
            var lastNameTag = document.createElement("p");
            lastNameTag.id = "ln";
            lastNameTag.textContent = "Efternamn: " + lname.value;
            var postalTag = document.createElement("p");
            postalTag.id = "post";
            postalTag.textContent = "Postnummer:    " + postal.value;
            var emailTag = document.createElement("p");
            emailTag.id = "email";
            emailTag.textContent = "E-postadress: " + epost.value;
            var priceTag = document.createElement("p");
            priceTag.id = "prmodel";
            var price = document.getElementById("price");
            priceTag.textContent = "Prismodell: " + price.value;
            
            // Lägger till alla p-taggar i modala popupen
            modalDiv.appendChild(title);
            modalDiv.appendChild(NameTag);
            modalDiv.appendChild(lastNameTag);
            modalDiv.appendChild(postalTag);
            modalDiv.appendChild(emailTag);
            modalDiv.appendChild(priceTag);
            modalDiv.appendChild(buttonCancel);
            modalDiv.appendChild(buttonOk);
            div.appendChild(modalDiv);
            document.body.appendChild(div);
            
            // Stoppar tabfunktionen under tiden modala popupen är igång
            form.onkeydown= function(e) {
                if (e.keyCode == 9)  {
                    e.preventDefault();
                }
            };
            
            // Kopplar till händelser för knapparna i modala popupen
            buttonOk.addEventListener("click", function(){form.submit();}, false);
            buttonCancel.addEventListener("click", function()
            {window.location='https://c9.io/vl222cu/1dv403-laborationer/workspace/4-forms/index.html';}, false);
        }     
        
    }
};
window.onload = Validator.init;
