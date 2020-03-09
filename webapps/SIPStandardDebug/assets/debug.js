/* 

Debug aid - print messages to a debug window.

Author: Just van den Broecke

The debug() function takes three parameters. The first, flag, is a Boolean value. 
The second parameter is a string that identifies, in plain language, the value being traced. 
The value itself is passed as the third parameter. Virtually any type of value or expression 
can be passed as the third parameter -- which is precisely what you want in a debugging aid. 

id: $Id: debug.js,v 1.1 2011/02/24 06:26:21 ls310 Exp $
*/


var timestamp = 0
var debugWindow = null
var messages = new Array()
var messagesIndex=0


/** Write all messages in a window. */
function showInDHTMLWindow(msg) {
	
	if ((debugWindow == null) || debugWindow.closed) {
		debugWindow = window.open("","debugWin","toolbar=no,scrollbars=yes,resizable=yes,width=600,height=200");
	}
	
	// Add message to current list
	messages[messagesIndex++] = msg
	
	// Write doc header
	debugWindow.document.writeln('<html><head><title>JavaScript Debug Window</title></head><body bgcolor=#DDDDDD>');
    
    // Write the messages
    for (var i=0; i < messagesIndex; i++) {
		debugWindow.document.writeln('<pre>' + i + ': ' + messages[i] + '</pre>');
	}
	
	// Write doc footer and close
	debugWindow.document.writeln('</body></html>');
	debugWindow.document.close();
	debugWindow.focus();
}

/** Send debug messages to a (D)HTML window. */                    
function debug(flag, label, value) {
   
   // Only print if the flag is set
   if (flag) {
      var funcName="none"
      
      // Fetch JS function name if any
      if (debug.caller) {
      	funcName = debug.caller.toString()
        funcName = funcName.substring(9, funcName.indexOf(")") + 1)
      }
      
      // Create message
      var msg = "-" + funcName + ": " + label + "=" + value
      
      // Add optional timestamp
      var now = new Date()
      var elapsed = now - timestamp
      if (elapsed < 10000) {
         msg += " (" + elapsed + " msec)"
      }
      
      timestamp = now
	
	  // Show.
	  showInDHTMLWindow(msg)
   }
}
