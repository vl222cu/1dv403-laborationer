/* Applikationen körs från denna fil och startas 
 * via window.onload när fönstret laddat klart.
*/

"use strict";

    var MessageBoard = {
        // Array för att hålla en lista med flera messageobjekt
        // Testat olika metoder för arrays
        messages: [],
    
        init : function() {
            document.getElementById("button").onclick = function GetMessage(e) {
                e.preventDefault();
                var text = document.getElementById("text").value;
                var mess = new Message(text, new Date());
                MessageBoard.messages.push(mess);
                MessageBoard.renderMessages();
            };
            
            // Händelsehanterare som ser till att användaren kan 
            // skicka meddelanden genom att trycka på entertangenten
            document.getElementById("text").onkeypress = function(e) {
                var code;
                if (!e) {
                    e = window.event; 
                }
                if (e.keyCode) {
                    code = e.keyCode;
                } else if (e.which) {
                    code = e.which;
                }
                
                if (e.shiftKey && code === 13) {
                    document.textarea.value += "\n";
                    return false;
                } else if (code === 13) {
                    var text = document.getElementById("text").value;
                    var mess = new Message(text, new Date());
                    MessageBoard.messages.push(mess);
                    MessageBoard.renderMessages();
                    return false;
                }
            };
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
            // Skapar nytt element för meddelandet
            var text = document.createElement("div");
            var p = document.createElement("p");
            text.className = "postmessage";
            p.className = "input";
            
            // Skapar nytt element för ikonerna
            var msgIcon = document.createElement("span");
            msgIcon.className = "icons";
            
            // Skapar och lägger till klockknappen 
            var time = document.createElement("a");
            var imgDateTime = document.createElement("img");
            imgDateTime.className = "datetime";
            imgDateTime.setAttribute("src", "pics/alarm16.png");
            imgDateTime.alt = "ShowDateTime";
            
            // Visar datum och tid när meddelandet skickades genom att trycka
            // på klockknappen
            imgDateTime.onclick = function() {
                alert ("Inlägget skapades " + MessageBoard.messages[messageID].getDatetext().toLocaleDateString() +
                " klockan " + MessageBoard.messages[messageID].getDatetext().toLocaleTimeString());
            };
            
            // Skapar och lägger till deleteknappen
            var a = document.createElement("a");
            var imgClose = document.createElement("img");
            imgClose.className = "deletebutton";
            imgClose.setAttribute("src", "pics/delete16.png");
            imgClose.alt = "Close";
            
            // Möjlighet att radera meddelande genom att trycka på deleteknappen
            imgClose.onclick = function() {
                var result = confirm("Vill du verkligen radera detta meddelande?");
                if (result === true) {
                    MessageBoard.removeMessage(messageID);
                }
            };
            
            // Kopplar ihop ikonerna med span-elementet
            msgIcon.appendChild(time);
            time.appendChild(imgDateTime);
            msgIcon.appendChild(a);
            a.appendChild(imgClose);
            
            // Skriver ut meddelandetexten
            p.innerHTML = MessageBoard.messages[messageID].getHTMLText();
            
            // Skriver ut tiden när meddelandet skapades
            var msgTime = document.createElement("p");
            msgTime.className = "time";
            msgTime.innerHTML = MessageBoard.messages[messageID].getDatetext().toLocaleTimeString();
            
            // Lägger till ikoner och meddelandetexten i nya elementet för meddelanden
            text.appendChild(msgIcon);
            text.appendChild(p);
            text.appendChild(msgTime);
            
            // Lägger till elementet för meddelanden i HTML-filen
            document.getElementById("posted").appendChild(text);
        },
        
        // Funktion som raderar det valda meddelandet
        removeMessage : function(deleteMess) {
            MessageBoard.messages.splice(deleteMess, 1);
            MessageBoard.renderMessages();
        }
    };
window.onload = MessageBoard.init;