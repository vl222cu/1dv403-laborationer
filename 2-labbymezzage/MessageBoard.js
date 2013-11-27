/* Applikationen körs från denna fil och startas 
 * via window.onload när fönstret laddat klart.
*/

"use strict";

    var MessageBoard = {
    // Array för att hålla en lista med flera messageobjekt
    // Testat olika metoder för arrays
        messages: [],
    
        init : function(message) {
        
            var mess = new Message(message, new Date().toDateString());
            this.messages.push(mess);
            },
        
        renderMessages : function() {
            // Raderar alla meddelanden
            document.getElementById("textfield").innerHTML= "";
            
            // Skriver ut samtliga meddelanden
            for (var i = 0; i < MessageBoard.messages.length; ++i) {
                MessageBoard.renderMessage(i);
            }
        },
    };

    var input = document.getElementById("comment");
	
	var reply_click = function(e) {
    e.preventDefault();
    var textMessage = MessageBoard.init(input.value);
    };
    document.getElementById("button").onclick = reply_click;

window.onload = MessageBoard.init;