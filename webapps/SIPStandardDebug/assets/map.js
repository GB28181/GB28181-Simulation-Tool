// Copyright (c) 2000 Just Objects B.V. <just@justobjects.nl>
// Distributable under LGPL license. See terms of license at gnu.org.

/** NV pair object */
function NameValuePair(name, value) {
   this.name = name;
   this.value = value;
}

/** Simple Map object to store array of name/value pairs */
function Map() {
  // Data members
   this.index = 0;
   this.map = new Array();
   
   // Function members
   this.get = MapGet;
   this.put = MapPut;
   this.toString = MapToString;
   this.toTable = MapToTable;
}

/** get() */
function MapGet(name) {
   for (var i=0; i < this.index; i++) {
   	if (this.map[i].name == name) {
   	  return this.map[i].value;
   	}
   }
   return '';
}

/** put() */
function MapPut(name, value) {
  this.map[this.index++] = new NameValuePair(name, value);
}

/** To HTML string */
function MapToString() {
    var res = '';
  
   for (var i=0; i < this.index; i++) {
   	res = res + this.map[i].name+'='+this.map[i].value+'<BR>';
   }
   return res;
}

/** To HTML table */
function MapToTable() {
    var res = '<table border=1 cellpadding=3>';
   var styleDiv = "<div style=\"color:black; font-family:monospace; font-size:10pt; white-space:pre;\">"
   
   for (var i=0; i < this.index; i++) {
   	res = res + '<tr><td bgColor=white>'+styleDiv+this.map[i].name+'</div></td><td bgColor=white>'+styleDiv+this.map[i].value+'</div></td></tr>';
   }
   res += '</table>'
   return res;
}

/*
 * $Log: map.js,v $
 * Revision 1.1  2011/02/24 06:26:21  ls310
 * *** empty log message ***
 *
 * Revision 1.5  2006/05/15 11:52:53  justb
 * updates mainly for AJAX client
 *
 * Revision 1.4  2006/05/06 00:10:11  justb
 * various chgs but not too serious...
 *
 * Revision 1.3  2003/08/15 08:39:01  justb
 * fix/add copyright + LGPL in file headers
 *
 *
 */
