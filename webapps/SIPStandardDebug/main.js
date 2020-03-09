/**
 *  main.js存储公用对象
 */

/**
 * getElements(classname, tagname, root):
 * Return an array of DOM elements that are members of the specified class,
 * have the specified tagname, and are descendants of the specified root.
 *
 * If no classname is specified, elements are returned regardless of class.
 * If no tagname is specified, elements are returned regardless of tagname.
 * If no root is specified, the document object is used. If the specified
 * root is a string, it is an element id, and the root
 * element is looked up using getElementsById()
 */
function getElements(classname, tagname, root) {
    // If no root was specified, use the entire document
    // If a string was specified, look it up
    if (!root) root = document;
    else if (typeof root == "string") root = document.getElementById(root);

    // if no tagname was specified, use all tags
    if (!tagname) tagname = "15-";

    // Find all descendants of the specified root with the specified tagname
    var all = root.getElementsByTagName(tagname);

    // If no classname was specified, we return all tags
    if (!classname) return all;

    // Otherwise, we filter the element by classname
    var elements = [];  // Start with an empty array
    for(var i = 0; i < all.length; i++) {
        var element = all[i];
        if (isMember(element, classname)) // isMember() is defined below
            elements.push(element);       // Add class members to our array
    }

    // Note that we always return an array, even if it is empty
    return elements;

    // Determine whether the specified element is a member of the specified
    // class. This function is optimized for the common case in which the
    // className property contains only a single classname. But it also
    // handles the case in which it is a list of whitespace-separated classes.
    function isMember(element, classname) {
        var classes = element.className;  // Get the list of classes
        if (!classes) return false;             // No classes defined
        if (classes == classname) return true;  // Exact match

        // We didn't match exactly, so if there is no whitespace, then
        // this element is not a member of the class
        var whitespace = /\s+/;
        if (!whitespace.test(classes)) return false;

        // If we get here, the element is a member of more than one class and
        // we've got to check them individually.
        var c = classes.split(whitespace);  // Split with whitespace delimiter
        for(var i = 0; i < c.length; i++) { // Loop through classes
            if (c[i] == classname) return true;  // and check for matches
        }

        return false;  // None of the classes matched
    }
}


/*
 * Map对象，实现Map功能
 *
 *
 * size() 获取Map元素个数
 * isEmpty() 判断Map是否为空
 * clear() 删除Map所有元素
 * put(key, value) 向Map中增加元素（key, value)  
 * remove(key) 删除指定key的元素，成功返回true，失败返回false
 * get(key) 获取指定key的元素值value，失败返回null
 * element(index) 获取指定索引的元素（使用element.key，element.value获取key和value），失败返回null
 * containsKey(key) 判断Map中是否含有指定key的元素
 * containsValue(value) 判断Map中是否含有指定value的元素
 * keys() 获取Map中所有key的数组（array）
 * values() 获取Map中所有value的数组（array）
 *
 */
function Map(){
	this.elements = new Array();
	
	//获取Map元素个数
	this.size = function() {
		return this.elements.length;
	},
 
	//判断Map是否为空
	this.isEmpty = function() {
		return (this.elements.length < 1);
	},
 
	//删除Map所有元素
	this.clear = function() {
		this.elements = new Array();
	},
 
	//向Map中增加元素（key, value)  
	this.put = function(_key, _value) {
		if (this.containsKey(_key) == true) {
				if(this.remove(_key) == true){
					this.elements.push( {
						key : _key,
						value : _value
					});
			}else{
				this.elements.push( {
					key : _key,
					value : _value
				});
			}
		} else {
			this.elements.push( {
				key : _key,
				value : _value
			});
		}
	},
 
	//删除指定key的元素，成功返回true，失败返回false
	this.remove = function(_key) {
		var bln = false;
		try {   
			for (i = 0; i < this.elements.length; i++) {   
				if (this.elements[i].key == _key){
					this.elements.splice(i, 1);
					return true;
				}
			}
		}catch(e){
			bln = false;   
		}
		return bln;
	},
	
	//获取指定key的元素值value，失败返回null
	this.get = function(_key) {
		try{   
			for (i = 0; i < this.elements.length; i++) {
				if (this.elements[i].key == _key) {
					return this.elements[i].value;
				}
			}
		}catch(e) {
			return null;   
		}
	},
 
	//获取指定索引的元素（使用element.key，element.value获取key和value），失败返回null
	this.element = function(_index) {
		if (_index < 0 || _index >= this.elements.length){
			return null;
		}
		return this.elements[_index];
	},
	
	//判断Map中是否含有指定key的元素
	this.containsKey = function(_key) {
		var bln = false;
		try {
			for (i = 0; i < this.elements.length; i++) {   
				if (this.elements[i].key == _key){
					bln = true;
				}
			}
		}catch(e) {
			bln = false;   
		}
		return bln;
	},
    
	//判断Map中是否含有指定value的元素
	this.containsValue = function(_value) {
		var bln = false;
		try {
			for (i = 0; i < this.elements.length; i++) {   
				if (this.elements[i].value == _value){
					bln = true;
				}
			}
		}catch(e) {
			bln = false;   
		}
		return bln;
	},
  
	//获取Map中所有key的数组（array）
	this.keys = function() {
		var arr = new Array();
		for (i = 0; i < this.elements.length; i++) {   
			arr.push(this.elements[i].key);
		}
		return arr;
	},

	//获取Map中所有value的数组（array）
	this.values = function() {
		var arr = new Array();
		for (i = 0; i < this.elements.length; i++) {   
			arr.push(this.elements[i].value);
		}
		return arr;
	};
}


