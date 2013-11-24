/* Applikationen körs från denna fil och startas 
 * via window.onload när fönstret laddat klart.
*/

"use strict";

var MessageBoard = {
    
    init : function() {
    // Array för att hålla en lista med flera messageobjekt
    // Testat olika metoder för arrays
    var messages = ["soccer", "baseboll"];
    messages.push("Football", "swimming");
    messages.unshift("Cricket");
    var shifted = messages.pop();
    
    alert(shifted);
   
  
    
    
    
    
    }
};

window.onload = MessageBoard.init;