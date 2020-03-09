/**
 * @author: 朱宜栋
 * @date  : 2011-07-20
 * @Email : Ethan.zhu83@gmail.com
 * @QQ    : 12377166
 *
插件原型：http://www.groupon.com/ 首页
多步骤提示插件
插件参考了ui中日历的编写思路

		因时间仓促,插件的上一步操作，只进行了简单的可逆操作，
		在宽度自适应的时候会存在问题:（上一步操作存在此问题）
			当前步骤的前（后）两步在页面放大之后会出现在视野中，需要注意。
	解决：
		getSteps中增加返回值oldstep（当前步骤的前（后）两步）
		然后在styleSteps中的left或right定位设置为一个不可见位置即可。
		可等待我发布下一版本修订或者自己修改，修改后请告知：
	
**/
(function($,undefined){

var PROP_NAME = 'multiSteps';

function MultiSteps(){
	this.debug = false; // Change this to true to start debugging
	this._position = '.main-wrap';//滑动的定位对象
	this._formSteps = '.form_step';//滑动的对象组
	this._currentStep = 1;     //在改变窗口大小的时候用来获取当前显示位置
	this._offset = 20;         //左右划出内容显示的大小
	this.regional = []; // 这里可以增加另外的可配置信息
	this._defaults = {         // Global defaults
		showOn: 'click',       // 'focus' or 'mouseOn' 
		showAnim: 'leftRight', // 暂时定义等待扩展，未使用
		slidefor: 'next',
		showSpeed: 1000,       //滑动速度，越小越快
		beforeSlide: null,     //进行滑动之前执行的函数
		callback: null         //callback
	};
	$.extend(this._defaults, this.regional['']);
};

$.extend(MultiSteps.prototype, {
	markerClassName: 'hasMultiSteps',
	/* Debug logging (if enabled). */
	log: function () {
		if (this.debug)
			console.log.apply('', arguments);
	},
	/* Override the default settings for all instances of the MultiSteps.
	   @param  settings  object - the new settings to use as defaults (anonymous object)
	   @return the manager object */
	setDefaults: function(settings) {
		extendRemove(this._defaults, settings || {});
		return this;
	},
	/* Attach the date picker to a jQuery selection.
	   @param  target    element - the target input field or division or span
	   @param  settings  object - the new settings to use for this date picker instance (anonymous) */
	_attachMultiSteps: function(target, settings) {
		//alert("_attachMultiSteps");
		var inlineSettings = null;
		for (var attrName in this._defaults) {
			var attrValue = target.getAttribute('date:' + attrName);
			if (attrValue) {
				inlineSettings = inlineSettings || {};
				try {
					inlineSettings[attrName] = eval(attrValue);
				} catch (err) {
					inlineSettings[attrName] = attrValue;
				}
			}
		}
		//var nodeName = target.nodeName.toLowerCase();
		//var inline = (nodeName == 'div' || nodeName == 'span');
		if (!target.id) {
			this.uuid += 1;
			target.id = 'ms' + this.uuid;
		}
		var inst = this._newInst($(target));
		inst.settings = $.extend({}, settings || {}, inlineSettings || {});
		this._connectMultiSteps(target,inst);
		
	},
	/* Attach the date picker to an input field. */
	_connectMultiSteps: function(target, inst) {
		var target = $(target);
		inst.append = $([]);
		inst.trigger = $([]);
		if (target.hasClass(this.markerClassName))
			return;
		this._attachments(target, inst);
		target.addClass(this.markerClassName);
		$.data(target, PROP_NAME, inst);
	},
	
	/* Make attachments based on settings. */
	_attachments: function(target, inst) {
		//alert("_attachments");
		if (inst.trigger)
			inst.trigger.remove();
		var showOn = this._get(inst, 'showOn');
		
		var currentStep=$(target).parents(this._formSteps).index()+1;
		
		if(currentStep==1)
			this._styleSteps(target,false,currentStep);
			//this._forward(target,showSpeed,step);
		
		if (showOn == 'mouseOn'){
			target.mouseover(function(){
				$.multiSteps._showMultiSteps(target);
			});
		}
		if (showOn == 'click') {
			inst.trigger=target.click(function() {
				$.multiSteps._showMultiSteps(target);
				return false;
			});
		}
	},
	
	_showMultiSteps: function(target) {
		var inst = $.multiSteps._getInst(target);
		var showSpeed = this._get(inst, 'showSpeed');
		var beforeSlide = this._get(inst, 'beforeSlide');
		var slidefor = this._get(inst, 'slidefor');
		var step = $(target).parents(this._formSteps).index()
		var stepSize =$(this._formSteps).size();
		//extendRemove(inst.settings, (beforeSlide ? beforeSlide.apply() : {}));
		if((beforeSlide ? beforeSlide.apply() : {})){
			if(slidefor=='next'){
				var step = step+1+1;
				$.multiSteps._currentStep++;
				if(step-1!=stepSize)
					this._forward(target,showSpeed,step);
				}
			if(slidefor=='prev'){
				//alert(step)
				$.multiSteps._currentStep--;
				this._forward(target,showSpeed,step);
				}
			}
	},
	
	_forward: function(target,animSpeed,step) {
		this._styleSteps( target,animSpeed,step);
  	},
	
	_styleSteps: function(target,animSpeed,step) {
		var inst = $.multiSteps._getInst(target);
		//alert(inst);
		this._currentStep = step
		pos = this._getPositions();
		var steps = this._getSteps(target,step);
		var slidefor
		if(inst!=null)
			slidefor = $.multiSteps._get(inst,'slidefor');
		if ( !animSpeed ) {
		  $( '.' + steps.prev ).css( { left: pos.left + 'px', opacity: 0.3 });
		  $( '.' + steps.curr ).css( { left: pos.center + 'px', opacity: 1 });
		  $( '.' + steps.next  ).css( { left: pos.right + 'px', opacity: 0.3 });
		} else {
		  $( '.' + steps.prev ).animate( { left: pos.left + 'px', opacity: 0.3 }, animSpeed );
		  $( '.' + steps.curr ).animate( { left: pos.center + 'px', opacity: 1 },
		  	 //{ duration: animSpeed, complete:$.multiSteps._callback(steps.curr,target,step)}//,
										 { duration: animSpeed,
											//specialEasing: '',
										   complete:function(){
											  	$(this).stop();
											  	if(!$.multiSteps.resizing){
													if(step>1){
														var callback = $.multiSteps._get(inst, 'callback');
														extendRemove(inst.settings, (callback ? callback.apply() : {}));
														}
													}
											  	$.multiSteps.resizing=false;
											  }
										  }
			 						   );
		 //
		 //alert(slidefor);
		 //if(slidefor=='next')
		  	$( '.' + steps.next ).css( { left: pos.right + 'px', opacity: 0.3 });
/*		 else if(slidefor=='prev'){
			 alert(pos.right);
			 alert(steps.next);
			 alert(steps.curr);
		  		$( '.' + steps.next ).animate( { left: pos.right + 'px', opacity: 0.3 },animSpeed);
			}*/
		}
	 },

	_getSteps: function(target,step) {
		var currentStep=step;
		var stepSize =$(this._formSteps).size();
		var curr_step = 'step_'+ currentStep;
		var prev_step = ( currentStep == 1&& currentStep<(stepSize+1)) ? null : 'step_'+ (currentStep-1);
		var next_step = ( currentStep == stepSize ) ? null : 'step_'+ (currentStep+1);
		return {curr: curr_step, prev: prev_step, next: next_step };
	},
	  
	_getPositions: function() {
		var offset = this._offset;
		var step_width = $(this._formSteps).width() / 2;
		//var window_width = $( window ).width();
		var window_width = $(this._position).width();
		//alert(window_width)
		var offLeft = -3 * step_width;
		var leftPos = offset - step_width;
		var centerPos = window_width / 2;
		var rightPos = window_width - offset + step_width;
		var offRight = rightPos + ( 3 * step_width );
		return { offLeft: offLeft, left: leftPos, center: centerPos, right: rightPos, offRight: offRight };
	},
	
	_pageRedraw: function() {
    	//$.multiSteps.resizing = false;
		//alert($.multiSteps._currentStep);
		//alert(currentStep);
    	$.multiSteps._styleSteps(this,300,$.multiSteps._currentStep);
  	},
	
	/* Create a new instance object. */
	_newInst: function(target) {
		var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
		return {
			id: id, 
			obj: target
		};
	},
	/* Get a setting value, defaulting if necessary. */
	_get: function(inst, name) {
		return inst.settings[name] !== undefined ?
			inst.settings[name] : this._defaults[name];
	},
	/* Retrieve the instance data for the target control.
	   @return  object - the associated instance data
	   @throws  error if a jQuery problem getting data */
	_getInst: function(target) {
		try {
			return $.data(target, PROP_NAME);
		}
		catch (err) {
			throw 'Missing instance data';
		}
	}
});

$( window ).resize( function() {
    $.multiSteps.resizing = true;
	//alert($.multiSteps.resizing);
    if ( $.multiSteps.resizeTimer != null || $.multiSteps.resizeTimer =="undefined" ) {
      window.clearTimeout( $.multiSteps.resizeTimer );
    }
    $.multiSteps.resizeTimer = window.setTimeout( $.multiSteps._pageRedraw, 300 );
  });
/* jQuery extend now ignores nulls! */
function extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props){
		//alert(name);
		if (props[name] == null || props[name] == undefined)
			target[name] = props[name];
		}
	return target;
};

/* Determine whether an object is an array. */
function isArray(a) {
	return (a && (($.browser.safari && typeof a == 'object' && a.length) ||
		(a.constructor && a.constructor.toString().match(/\Array\(\)/))));
};

$.fn.multiSteps = function(options){
	/* Verify an empty collection wasn't passed - Fixes #6976 */
	if ( !this.length ) {
		return this;
	}
/*	var otherArgs = Array.prototype.slice.call(arguments, 1);
		//arguments函数对象是该对象代表正在执行的函数和调用它的函数的参数
		//如果传入的是参数设置，则将这些内容拷贝到otherArgs数*/
	return this.each(function() {
		$.multiSteps._attachMultiSteps(this, options);
	});
};
$.multiSteps = new MultiSteps(); // singleton instance
$.multiSteps.resizing = false;
$.multiSteps.resizeTimer = null;
$.multiSteps.uuid = new Date().getTime();

})(jQuery)