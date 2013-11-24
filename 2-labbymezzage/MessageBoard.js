/* Applikationen körs från denna fil och startas 
 * via window.onload när fönstret laddat klart.
*/

"use strict";

var messageApp = {
    
    init : function() {
     
    var mess = new Message("Testmeddelande", new Date());
    var mess2 = new Message("You good!", new Date());
    alert(mess);
    alert(mess2);
    alert(mess2.getText());
    mess.setText("Moment 2 är klar!");
    alert(mess);
    
    // kod objektliteral ska in här
    
    }
};

window.onload = messageApp.init;