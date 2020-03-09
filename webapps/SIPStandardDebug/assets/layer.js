// Copyright (c) 2000 Just Objects B.V. <just@justobjects.nl>
// Distributable under LGPL license. See terms of license at gnu.org.

/** REQUIRES api.js */

/* Object to represent browser-independent CSS-P layer (DIV) object */
function Layer(id, theWindow) {
	// Member data setup
	this.id = id;
	this.obj = null;
	this.doc = null;
 	if (theWindow == self) {
 		this.obj = getRawObject(id);
	} else {
		this.obj = getRawObjectInWindow(id, theWindow); // eval(theWindow + "." + getRawObject(id))
	}

	// Member function setup
	this.getSkeletonHTML = LayerGetSkeletonHTML
	this.getX = LayerGetX
	this.getY = LayerGetY
	this.setX = LayerSetX
	this.setY = LayerSetY
	this.setBGColor = LayerSetBGColor
	this.write = LayerWrite
	this.show = LayerShow
	this.hide = LayerHide
	this.shiftTo = LayerShiftTo
	this.shiftBy = LayerShiftBy
	this.setZIndex = LayerSetZIndex
}

function LayerGetSkeletonHTML() {
	return "<DIV ID="+this.id+" STYLE=\"position:absolute; left:" + this.getX() + "; top:" + this.getY() +";\"></DIV>\n"
}

function LayerGetX() {
	return getObjectLeft(this.obj);
}

function LayerGetY() {
	return getObjectTop(this.obj);
}

function LayerSetX(x) {
 	shiftTo(this.obj, x, this.getY());
}

function LayerSetY(y) {
 	shiftTo(this.obj, this.getX(), y);
}

// Setting the background color of an object
function LayerSetBGColor(color) {
	setBGColor(this.obj, color);
}

function LayerWrite(text) {
	layerWrite(this.obj, text);
}

// Setting the visibility to visible
function LayerShow() {
	show(this.obj);
}

// Setting the visibility to hidden
function LayerHide() {
	hide(this.obj);
}

// Positioning at a specific pixel coordinate
function LayerShiftTo(x, y) {
	shiftTo(this.obj, x, y);
}

// Moving by x and/or y pixels
function LayerShiftBy(deltaX, deltaY) {
	shiftTo(this.obj, deltaX, deltaY);
}

// Setting the z-order
function LayerSetZIndex(zOrder) {
	setZIndex(this.obj, zOrder);
}

//
// General global utility functions
//

// Make a page in a window filled with layer elements
function fillLayerDocument(targetWindow, idPrefix, count, bgColor) {
var pageStart="<HTML><HEAD><META HTTP-EQUIV=Pragma CONTENT=no-cache></HEAD><BODY BGCOLOR="+bgColor+" >";
var pageEnd="</BODY></HTML>"
var page=pageStart;

        for (var i=0; i < count; i++) {
        	page = page + "<DIV ID="+idPrefix+i+" STYLE='position:absolute;'></DIV><BR>"; 
        }
        page += pageEnd
        targetWindow.document.write(page)
        targetWindow.document.close()
}

// Make a page in a window filled with layer elements
function fillLayerArea(targetWindow, idPrefix, count, bgColor) {
var page='';

        for (var i=0; i < count; i++) {
        	page = page + "<DIV ID="+idPrefix+i+" STYLE='position:absolute;'></DIV><BR>";
        }
        targetWindow.document.write(page)
        targetWindow.document.close()
}

// Make layer <DIV> element
function createLayerHTML(id) {
       	return "<DIV ID="+id+" STYLE='position:absolute;'></DIV><BR>";
}

// Make a a set of multiple layer <DIV> elements
function createMultiLayerHTML(idRoot, count) {
var htmlElements="";

        for (var i=0; i < count; i++) {
        	htmlElements = htmlElements + createLayerHTML(idRoot+i); 
        }
        return htmlElements;
}

/*
 * $Log: layer.js,v $
 * Revision 1.1  2011/02/24 06:26:21  ls310
 * *** empty log message ***
 *
 * Revision 1.4  2004/10/24 22:21:04  justb
 * refine again
 *
 * Revision 1.3  2003/08/15 08:39:01  justb
 * fix/add copyright + LGPL in file headers
 *
 *
 */