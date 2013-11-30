/* Applikationen körs från denna fil och startas 
 * via window.onload när fönstret laddat klart.
*/

"use strict";

    var MessageBoard = {
    // Array för att hålla en lista med flera messageobjekt
    // Testat olika metoder för arrays
        messages: [],
    
        init : function() {
            var press = document.getElementById("button"); 
            press.addEventListener("click", function GetMessage(e) {
                e.preventDefault();
                var text = document.getElementById("text").value;
                var mess = new Message(text, new Date());
                MessageBoard.messages.push(mess);
                MessageBoard.renderMessages();
            }, false);
        },
        
        renderMessages : function() {
            // Raderar alla meddelanden
            document.getElementById("posted").innerHTML= "";
            
            // Skriver ut samtliga meddelanden
            for (var i = 0; i < MessageBoard.messages.length; ++i) {
                MessageBoard.renderMessage(i);
            }
            
            var counter = document.getElementById("messagecount");
            var number = (MessageBoard.messages.length);
            counter.innerHTML = number;
        },
        
        renderMessage : function(messageID) {
            var div = document.getElementById("posted"); 
            var text = document.createElement("div");
            var p = document.createElement("p");
            text.className = "postmessage";
            p.className = "input";
            text.innerHTML = MessageBoard.messages[messageID].getDatetext().toLocaleTimeString();
            p.innerHTML = MessageBoard.messages[messageID].getHTMLText();
            div.appendChild(text);
            text.appendChild(p);
            
            
            // Skapar och lägger till deleteknappen
            var a = document.createElement("a");
            var imgClose = document.createElement("img");
            imgClose.className = "deletebutton";
            imgClose.setAttribute("src", "pics/delete16.png");
            imgClose.alt="Close";
            text.appendChild(a);
            a.appendChild(imgClose);
            
            // Raderar meddelande genom att trycka på deleteknappen
            imgClose.onclick = function() {
                MessageBoard.removeMessage(messageID);
            };
        },
        
        removeMessage : function(deleteMess) {
            MessageBoard.messages.splice(deleteMess, 1);
            MessageBoard.renderMessages();
        }
    };
window.onload = MessageBoard.init;