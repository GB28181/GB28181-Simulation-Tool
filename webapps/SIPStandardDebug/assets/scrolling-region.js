// Copyright (c) 2000 Just Objects B.V. <just@justobjects.nl>
// Distributable under LGPL license. See terms of license at gnu.org.

/* Object to represent region of lines that scrolls */
function ScrollingRegion(id, targetWindow, x, y, width, height, lines) {
  this.id = id;
  this.targetWindow = targetWindow;
  this.targetWindowId = targetWindow.name;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.lines = lines
  
  for (var i = 0; i < this.lines; i++) {
   targetWindow.document.writeln('<DIV ID=D'+i+' STYLE="position:absolute;"></DIV>')
  }
  
  targetWindow.document.close()  
  
  this.layerArray = new Array(this.lines)
  for (var i = 0; i < this.lines; i++) {
    this.layerArray[i] = new Layer(this.id+i, this.targetWindowId)
  }

  this.topPointer = 0;
  this.full = false;

  // Methods
  this.addLine = ScrollingRegionAddLine;
  this.show = ScrollingRegionShow;
  this.makeLine = ScrollingRegionMakeLine;
}

function ScrollingRegionAddLine(text) {
// alert('addOutput: '+text)
  this.layerArray[this.topPointer].hide()
  this.layerArray[this.topPointer].write(this.makeLine(text, 'blue'))
  
  if (this.topPointer == this.layerArray.length-1) {
    this.full = true
  }
  
  this.topPointer = (++this.topPointer) % this.layerArray.length
}

function ScrollingRegionShow() {  
  var nextLayer;
  for (var i = 0; i < this.layerArray.length; i++) {
     if (this.full) {
       nextLayer = this.layerArray[(this.topPointer+i) % this.layerArray.length];
     } else {
       nextLayer = this.layerArray[i];
     }
     
     nextLayer.shiftTo(this.x, this.y+i*(this.height/this.lines))
     nextLayer.show()
  }
}

function ScrollingRegionMakeLine(text, bgColor) {
  return '<table width='+this.width+' height='+ (this.height/this.lines) +' border=0><tr><td bgcolor='+bgColor+'><font face=arial size=2>'+text+'</font></td></tr></table>';
}

/*
 * $Log: scrolling-region.js,v $
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
