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
            p.innerHTML = MessageBoard.messages[messageID].getText();
            div.appendChild(text);
            text.appendChild(p);
        },
    };

    //var input = document.getElementById("comment");
	
	//var reply_click = function(e) {
    //e.preventDefault();
    //var textMessage = MessageBoard.init(input.value);
    //};
    //document.getElementById("button").onclick = reply_click;

window.onload = MessageBoard.init;