// Copyright (c) 2000 Just Objects B.V. <just@justobjects.nl>
// Distributable under LGPL license. See terms of license at gnu.org.

/** REQUIRES api.js,layer.js */

/* Object to represent a N*M grid of Layer objects */
function LayerGrid(idRoot, targetWindow, columns, lines, xOffset, yOffset, width, height) {
  this.idRoot = idRoot;
  this.targetWindow = targetWindow;
  if (targetWindow == self) {
    // If we create the grid in our own window take our id
    this.targetWindowId = targetWindow;
  } else {
    // Grid resides in secondary window or frame
    this.targetWindowId = targetWindow.name;
  }
  this.x = xOffset;
  this.y = yOffset;
  this.width = width;
  this.height = height;
  this.lines = lines
  this.colums = columns
  this.cells = lines*columns;
  this.cellWidth = width/columns;
  this.cellHeight = height/lines;
  this.cellArray = new Array(this.cells)
  this.pointer = 0;
  this.full = false;

  // Methods
  this.getSkeletonHTML = LayerGridGetSkeletonHTML
  this.writeSkeletonHTML = LayerGridWriteSkeletonHTML;
  this.writeCellAtIndex = LayerGridWriteCellAtIndex
  this.writeCell = LayerGridWriteCell;
  this.makeCell = LayerGridMakeCell;
  
  // Init
  var index =0;
  for (var i = 0; i < lines; i++) {
  	for (var j = 0; j < columns; j++) {
   		newLayer = new Layer(this.idRoot+index, this.targetWindowId);
    		newLayer.shiftTo(xOffset+(j*this.cellWidth), yOffset+(i*this.cellHeight))
    		this.cellArray[index] = newLayer;
 		index++;
        }
  }
}

function LayerGridGetSkeletonHTML() {
	var skeletonHTML = "";
	for (var i = 0; i < this.cells; i++) {
		
		skeletonHTML = skeletonHTML + this.cellArray[i].getSkeletonHTML() + "<BR>"
	}
//	alert(skeletonHTML)
	return skeletonHTML;
}

function LayerGridWriteSkeletonHTML() {
	this.targetWindow.document.writeln(this.getSkeletonHTML());
  	this.targetWindow.document.close() ; 
}

function LayerGridWriteCellAtIndex(cellNumber, text, bgColor) {
 // this.cellArray[cellNumber].hide()
  this.cellArray[cellNumber].write(this.makeCell(text, bgColor))
 // this.cellArray[cellNumber].show()
}

function LayerGridWriteCell(line, column, text) {
  this.writeCellAtIndex(line*this.columns+column, text)
}

function LayerGridMakeCell(text, bgColor) {
  return "<table width="+this.cellWidth+" height="+ this.cellHeight +" border=0 cellspacing=0 cellpadding=0><tr><td bgcolor="+bgColor+">"+text+"</td></tr></table>";
}
