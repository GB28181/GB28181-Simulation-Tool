/**
 * 提供设备在线状态检测JSP界面的相关处理函数
 * 作者：沈阳
 * 时间：2012-12-10
 * 
 **/

var bStarted = false;
var deviceId = null;


/**
 * 初始化按钮函数
 * 
 * @return
 */
function init(){
	initFunction();
	initDHTML();
	p_join_listen("/comet/status_message");
	refreshPage();
	selectChanged();
}

function initFunction(){
	
	document.getElementById("start_detection_link").onclick = function(){
		if(bStarted){
			alert("当前正在进行检测，请先停止当前检测任务，再开始新任务！");
			return;
		}
		
		var vDetectType = document.getElementById('detectType').value;
		var vDetectDevice = idArray[document.getElementById('detectDevice').value];
		var vHBInterval = document.getElementById('HBInterval').value;
		var vHBExpire = document.getElementById('HBExpire').value;
		var vExpire = document.getElementById('ZCExpire').value;
		
		// 下联调测时，待测设备只能为互联系统
		if(vDetectType == 'down' && document.getElementById('detectDevice').value != '3'){
			alert("进行下联调测，\"选择调测设备\"选项必须为【互联系统】！");
			return;
		}
		
		
		// 开始确认
		var stringType = (vDetectType == 'up')?"上联":"下联";
		
		var bResult = null;
		if(vDetectType == 'up'){
			bResult = confirm("请确认开始调测，参数如下：\n调测类型：" + stringType + "\n设备编号：" + vDetectDevice + "\n心跳间隔：" + vHBInterval + " 秒\n超时次数：" + vHBExpire + " 次");
		}else{
			bResult = confirm("请确认开始调测，参数如下：\n调测类型：" + stringType + "\n设备编号：" + vDetectDevice + "\n心跳间隔：" + vHBInterval + " 秒\n超时次数：" + vHBExpire + " 次\n注册过期时间：" + vExpire + " 秒");
		}
		
		//var bResult = confirm("请确认开始调测，参数如下：\n调测类型：" + stringType + "\n设备编号：" + vDetectDevice + "\n心跳间隔：" + vHBInterval + " 秒\n超时次数：" + vHBExpire + " 次\n注册过期时间：" + vExpire + " 秒");
		
		if(!bResult){
			return;
		}else{
			bStarted = true;
		}
		
		$.post(
					'/SIPStandardDebug/ajax',
					{
						requestType:'status_detection',
						cmdType:'start',
						type:vDetectType,
						deviceId:vDetectDevice,
						interval:vHBInterval,
						maxDelay:vHBExpire,
						expire:vExpire
						
					},
					function (data) // 回传函数
	  				{   
						;
	  				},
					'html'
			 );
	};
	
	document.getElementById("stop_detection_link").onclick = function(){
		
		$.post(
				'/SIPStandardDebug/ajax',
				{
					requestType:'status_detection',
					cmdType:'stop',
					deviceId:deviceId
				},
				function (data) // 回传函数
  				{   
  					var jquerydata = $(data);
  				},
				'html'
			 );
				 
			 bStarted = false;
			 return;
	};
	
	document.getElementById("clear_link").onclick = function(){
		clearStatusDiv();
	};
}

/**
 * 用户刷新调测页面时调用该方法，停止当前调试，清楚控制台消息
 * 
 * @return
 */
function refreshPage(){
	$.post(
			'/SIPStandardDebug/ajax',
			{
				requestType:'status_detection',
				cmdType:'stop',
				deviceId:deviceId
			},
			function (data) // 回传函数
				{   
					var jquerydata = $(data);
				},
			'html'
		 );
			 
		 bStarted = false;
		 return;
}

/**
 * 点击”清空消息“按钮触发该函数
 * 
 * @return
 */
function clearMessage(){
	
	clearStatusDiv();
}

function currentTime(){
	
	// 获取当前时间
	var oDate = new Date();
	var hour = oDate.getHours();
	var mins = oDate.getMinutes();
	var secs = oDate.getSeconds();
	var millisecs = oDate.getMilliseconds();
	
	if(hour < 10){
		hour = '0' + hour;
	}
	if(mins < 10){
		mins = '0' + mins;
	}
	if(secs < 10){
		secs = '0' + secs
	}
	
	var current_date = '[' + hour + ':' + mins + ':' + secs + '.' + millisecs + ']';
	return current_date;
}

/**
 * 输出日志函数
 * 
 * @param level 日志严重性等级，以不同颜色输出 INFO 绿色 ERROR 红色 DEBUG 白色 WARNING 橙色
 * @param message
 * @return
 */
function printMessage(level, message){
	
	var output_div = document.getElementById('status_detect');
	var new_line = document.createElement("p");
	var new_log = document.createTextNode(formatMessage(level, message));
	new_line.appendChild(new_log);
	
	if(level == 'debug'){
		//new_line.setAttribute("className", "status_log_debug");
		new_line.className = 'status_log_debug';
	}else if(level == 'info'){
		//new_line.setAttribute("className", "status_log_info");
		new_line.className = 'status_log_info';
	}else if(level == 'warning'){
		//new_line.setAttribute("className", "status_log_warning");
		new_line.className = 'status_log_warning';
	}else if(level == 'error'){
		//new_line.setAttribute("className", "status_log_error");
		new_line.className = 'status_log_error';
	}else{
		alert("Error level:" + level);
	}
	
	
	output_div.appendChild(new_line);
	
	// 保持滚动条最底下
	output_div.scrollTop = output_div.scrollHeight;
	
}

function formatMessage(level, message){
	var level_title = null;
	if(level == 'debug'){
		level_title = '[调试]';
	}else if(level == 'info'){
		level_title = '[成功]';
	}else if(level == 'warning'){
		level_title = '[警告]';
	}else if(level == 'error'){
		level_title = '[失败]';
	}else{
		alert("Error level:" + level);
	}
	
	var currTime = currentTime();
	return currTime + ' ' + level_title + ' - ' + message;
}


function clearStatusDiv(){
	// 清空控制台
	var old_status_div = document.getElementById('status_detect');
	var new_status_div = document.createElement("div");
	new_status_div.setAttribute("id", "status_detect");
	//new_status_div.setAttribute("class", "status_detect_div");
	new_status_div.className = 'status_detect_div';
	document.body.replaceChild(new_status_div, old_status_div);
}

/**
 * 更新设备的在线状态
 * 
 * @param status
 * @return
 */
function updateStatus(status){
	
	var old_status = document.getElementById('current_status_label');
	var new_status = document.createElement("p");
	var new_status_value = null;
	
	if(status == 'online'){
		new_status_value = document.createTextNode("当前状态【在线】");
		//new_status.setAttribute("class", "status_online");
		new_status.className = 'status_online';
	}else if(status == 'offline'){
		new_status_value = document.createTextNode("当前状态【离线】");
		//new_status.setAttribute("class", "status_offline");
		new_status.className = 'status_offline';
	}else if(status == 'close'){
		new_status_value = document.createTextNode("当前状态【未检测】");
		//new_status.setAttribute("class", "status_close");
		new_status.className = 'status_close';
	}else{
		alert("Error status: " + status);
		return;
	}
	
	new_status.appendChild(new_status_value);
	new_status.setAttribute("id", "current_status_label");
	
	document.body.replaceChild(new_status, old_status);
}

function onData(pushletEvent){
	
	var level = pushletEvent.get("level");
	var status = pushletEvent.get("status");
	var message = pushletEvent.get("message");
	var deviceId = pushletEvent.get("deviceId");
	
	// 更新状态，打印日志
	updateStatus(status);
	printMessage(level, message);
}

/**
 * 上下联调测类型选择后，屏蔽某些调测选项
 * 
 * @return
 */
function selectChanged(){
	
	//alert("Changed");
	var vDetectType = document.getElementById('detectType').value;
	if(vDetectType == 'up'){
		document.getElementById('ZCExpire').disabled = true;
		document.getElementById('detectDevice').value = 3;
		document.getElementById('detectDevice').disabled = true;
	}else{
		// down
		document.getElementById('ZCExpire').disabled = false;
		document.getElementById('detectDevice').value = 3;
		document.getElementById('detectDevice').disabled = true;
	}
}