<%@ page language="java" import="java.util.*,cn.com.fri.axy.common.SentinelKeyManager" pageEncoding="UTF-8"%>
<%@ page import="cn.com.fri.axy.sip.init.SSDConfig"%>
<%@ page import="cn.com.fri.axy.sip.init.AuthManager"%>
<%
/////////////////////////////////////////////////////////////
///////////////验证License信息//////////////////////
	   //初始化时进行license检测，检测失败不启动服务
		if(new AuthManager().validate())
		{
			System.out.println("********************************************");
			System.out.println("*             License检测通过             *");
			System.out.println("********************************************");
		}
		else
		{
			System.out.println("********************************************");
			System.out.println("*License检测失败，请申请License后再进行调测*");
			System.out.println("********************************************");
			response.sendRedirect("error.html");
		}
/////////////////////////////////////////////////////////////
 %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <title>SPVMN视频监控联网现场检测工具软件</title>
    <link rel="shortcut icon" type="image/ico" href="images/logo.ico" />
    <link href="index.css" rel="stylesheet" type="text/css" />
    <link href="layout.css" rel="stylesheet" type="text/css" />
    <link href="lib/jquery.msgbox.css" rel="stylesheet" type="text/css" />
	<link href="lib/menu/jquerycssmenu.css" rel="stylesheet" type="text/css" />
	<!--[if lte IE 7]>
	<style type="text/css">
	html .jquerycssmenu{height: 1%;} /*Holly Hack for IE7 and below*/
	</style>
	<![endif]-->
    
    <script type="text/javascript" src="lib/jquery-1.4.4.js"></script>
    <script type="text/javascript" src="lib/js-pushlet-client.js"></script>
    <script type="text/javascript" src="assets/api.js"></script>
    <script type="text/javascript" src="lib/jquery.dragndrop.js"></script>
	<script type="text/javascript" src="lib/jquery.msgbox.js"></script>
	<script type="text/javascript" src="lib/menu/jquerycssmenu.js"></script>
	<script type="text/javascript" src="main.js"></script>
	
  	<script type="text/javascript">
	/**
	 * index.jsp中的全局变量
	 */
	var sipserverID = '<%= SSDConfig.getInstance().getSipServerID() %>';
	var sipserverIP = '<%= SSDConfig.getInstance().getSIPServerIP() %>';
	var sipserverPort = '<%= SSDConfig.getInstance().getSIPServerPort() %>';
	var sipserverPassword = '<%= SSDConfig.getInstance().getSIPServerPassword() %>';
	var domainName = '<%= SSDConfig.getInstance().getDomainName() %>';
	var dvrID = '<%= SSDConfig.getInstance().getDVRID() %>';
	var cameraID = '<%= SSDConfig.getInstance().getDVRCameraID().firstElement() %>';
	var alarmID = '<%= SSDConfig.getInstance().getDVRAlarmID().firstElement() %>';
	var ipcID = '<%= SSDConfig.getInstance().getIPCID() %>';
	var ipcalarmID = '<%= SSDConfig.getInstance().getIPCAlarmID().firstElement() %>';
	var decoderID = '<%= SSDConfig.getInstance().getDecoderID() %>';
	var monitorID = '<%= SSDConfig.getInstance().getDecoderMonitorID().firstElement() %>';
	var othersystemID = '<%= SSDConfig.getInstance().getOtherSystemID() %>';
	var othersystemcameradeviceID = '<%= SSDConfig.getInstance().getOtherSystemCameraDeviceID() %>';
	var othersystemalarmdeviceID = '<%= SSDConfig.getInstance().getOtherSystemAlarmDeviceID() %>';
	var othersystemaudiodeviceID = '<%= SSDConfig.getInstance().getOtherSystemAudioDeviceID() %>';
	var mediaDestID = '<%= SSDConfig.getInstance().getMediaDestID() %>';
	var mediaDestIP = '<%= SSDConfig.getInstance().getMediaDestIP() %>';
	var mediaDestPort = '<%= SSDConfig.getInstance().getMediaDestPort() %>';
	var historyTime = '<%= SSDConfig.getInstance().getHistoryTime() %>';
	
	var sipserverBroadcastDeviceID = '<%= SSDConfig.getInstance().getBroadcastSourceID() %>';
	
	// var fileQueryTime
	var device_type = 'othersystem';
	// 初始化消息集合，其中保存用户最新编辑后发送的消息，每类设备每类消息保存一条
	var message_map = new Map();
  	</script>
  	<script type="text/javascript" src="index.js" charset="utf-8"></script>
  	
  </head>

  <body onLoad="init()" >
  <!--页面层容器-->
  <div id="container">
  	<!--页面头部-->
	<div id="header">
		<div id="banner" >
			<div id="banner-left">
				<img src="images/bar_01.gif"/>
			</div>
			<div id="banner-right">
				<img src="images/bar_03_1.gif"/>
			</div>
		</div>
		
		<div id="menu">
		<div id="myjquerymenu" class="jquerycssmenu">
			<ul>
				<li id="device_type_choice"><a id="device_type_choice_a" href="#">调测设备类型</a>
					<ul>
  						<li><a href="#" onclick="menuchoice('othersystem')">互联系统</a></li>
  					</ul>
				</li>
				<li><a href="#">调测辅助页面</a>
  					<ul>
  						<li><a href="#" id="play_viedo">视频播放</a></li>
  						<li><a href="#" id="gbmedia_viedo">媒体参数检测</a></li>
  						<li><a href="#" id="lookup_link">链路管理</a></li>
						<li><a href="#" id="modify_config">参数配置</a></li>
  					</ul>
				</li>
				<li><a href="#">流程组合测试</a>
  					<ul>
  						<li><a href="#" id="status_detection">在线状态逻辑检测</a></li>
  					</ul>
				</li>
				<!--<li><a href="#">webService调测页面</a>
  					<ul>
  						<li><a href="#" id="device_location">预置位查询</a></li>
  						<li><a href="#" id="device_info">设备信息查询</a></li>
  					</ul>
				</li>-->
				<li><a href="#">帮助</a>
					<ul>
  						<li><a href="#" id="user_manual">使用手册</a></li>
  						<li><a href="#" id="about_this_soft">关于SPVMN视频监控联网现场检测工具软件</a></li>
  					</ul>
				</li>
			</ul>
			<br style="clear: left" />
		</div>
		<div id="info">
			当前调测设备类型:互联系统
		</div>
		</div>
  	</div>
		
	<!--页面主体-->
	<div id="pagebody">

  			<div id="layer2">
				<!--左侧内容-->
				<div id="layer2_left">
					<div id="layer2_left_left">
					<dl class="tbox">
        				<dt><strong>实时点播相关命令</strong></dt>
        				<dd>
          					<ul class="d1 ico3">
          						<li><a id="RealTime" class="ndvr nipc ndecoder nothersystem" href="#" onclick="choice('RealTime')">实时点播</a></li>
          						<li><a id="PTZ_Left" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('PTZ_Left')">向左</a></li>
          						<li><a id="PTZ_Right" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('PTZ_Right')">向右</a></li>
          						<li><a id="PTZ_Up" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('PTZ_Up')">向上</a></li>
          						<li><a id="PTZ_Down" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('PTZ_Down')">向下</a></li>
          						<li><a id="PTZ_ZoomIn" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('PTZ_ZoomIn')">放大</a></li>
          						<li><a id="PTZ_ZoomOut" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('PTZ_ZoomOut')">缩小</a></li>
          						<li><a id="PTZ_Stop" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('PTZ_Stop')">停止遥控</a></li>
          						<li><a id="Broadcast" class="dvr ipc decoder nothersystem" href="#" onclick="choice('Broadcast')">语音广播</a></li>
          					</ul>
        				</dd>
      				</dl>
      				</div>
      				<div id="layer2_left_right">
					<dl class="tbox">
        				<dt><strong>历史回放相关命令</strong></dt>
        				<dd>
          					<ul class="d1 ico3">
          						<li><a id="History" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('History')">回放</a></li>
          						<li><a id="Download" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('Download')">下载</a></li>
          						<li><a id="PlaybackControl_Play" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('PlaybackControl_Play')">播放</a></li>
          						<li><a id="PlaybackControl_Pause" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('PlaybackControl_Pause')">暂停</a></li>
          						<li><a id="PlaybackControl_Fast" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('PlaybackControl_Fast')">快放</a></li>
          						<li><a id="PlaybackControl_Slow" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('PlaybackControl_Slow')">慢放</a></li>
          						<li><a id="PlaybackControl_Drag" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('PlaybackControl_Drag')">随机拖放</a></li>
          						<li><a id="StartRecord" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('StartRecord')">开始手动录像</a></li>
          						<li><a id="StopRecord" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('StopRecord')">停止手动录像</a></li>
          						<li><a id="FileQuery" class="ndvr nipc decoder nothersystem" href="#" onclick="choice('FileQuery')">录像文件检索</a></li>
          					</ul>
        				</dd>
      				</dl>
					</div> 
				</div> 
				<!--右侧内容-->
				<div id="layer2_right">
					<div id="layer2_right_left">
					<dl class="tbox">
        				<dt><strong>报警相关命令</strong></dt>
        				<dd>
          					<ul class="d1 ico3">
          						<li><a id="SetGuard"  class="ndvr nipc decoder nothersystem" href="#" onclick="choice('SetGuard')">布防</a></li>
          						<li><a id="Alarm"  class="dvr ipc decoder nothersystem" href="#" onclick="choice('Alarm')">报警</a></li>
          						<li><a id="ResetGuard"  class="ndvr nipc decoder nothersystem" href="#" onclick="choice('ResetGuard')">撤防</a></li>
          						<li><a id="ResetAlarm"  class="ndvr nipc decoder nothersystem" href="#" onclick="choice('ResetAlarm')">报警复位</a></li>
          					</ul>
        				</dd>
      				</dl>
      				</div>
      				<div id="layer2_right_right">
					<dl class="tbox">
        				<dt><strong>其他命令</strong></dt>
        				<dd>
          					<ul class="d1 ico3">
          						<li><a id="DeviceCatalog" class="ndvr nipc ndecoder nothersystem" href="#" onclick="choice('DeviceCatalog')">设备目录查询</a></li>
          						<li><a id="DeviceInfo" class="ndvr nipc ndecoder nothersystem" href="#" onclick="choice('DeviceInfo')">设备信息查询</a></li>
          						<li><a id="DeviceStatus" class="ndvr nipc ndecoder nothersystem" href="#" onclick="choice('DeviceStatus')">设备状态查询</a></li>
          						<li><a id="Boot" class="ndvr nipc ndecoder nothersystem" href="#" onclick="choice('Boot')">设备远程启动</a></li>
          						<li><a id="Register" class="dvr ipc decoder nothersystem" href="#" onclick="choice('Register')">注册/注销</a></li>
          						<li><a id="Keepalive" class="dvr ipc decoder nothersystem" href="#" onclick="choice('Keepalive')">心跳</a></li>
          						<li><a id="CatalogSubscribe" class="dvr ipc decoder nothersystem" href="#" onclick="choice('CatalogSubscribe')">目录订阅</a></li>
          						<li><a id="CatalogNotify" class="dvr ipc decoder nothersystem" href="#" onclick="choice('CatalogNotify')">目录通知</a></li>
          					</ul>
        				</dd>
      				</dl>
      				</div>
				</div>
			</div>
			
			
			
			<div class="clear">
			</div>
			
			<div id="layer3">
  				<div id="layer3_left" style="padding:2px;">
  					<form method="post" action="/SIPStandardDebug/sip/sendmessage.jsp" name="SSDForm" id="SSDForm">
  						<!-- 调测设备类型：  -->
  						<input type="hidden" name="devicetype" id="devicetype">
  						<!-- 输入设备ID号：  -->
  						<input type="hidden" name="deviceid" id="deviceid">
  						<!-- 发送消息类型：  -->
  						<input type="hidden" name="MessageParam" id="MessageParam">
  						<div class="sendMsgTitle"><strong>发送消息编辑</strong></div>
  						<textarea cols="63" rows="16" name="MessageTextAera" id="MessageTextAera" wrap="off"></textarea>
  					</form>
  					
					<!-- 手工输入互联系统点播设备ID  -->
					<div id="othersystem_deviceid_div">
						互联系统目标系统/设备ID:<input type="text" style="width:150px;" name="othersystem_deviceid" id="othersystem_deviceid">
					</div>
  					
  					<a href="#" id="SSDForm_link" style="float:right;"><img src="images/sendMsg.png" border="0" /></a>
  					
  				</div>
  				<div id="layer3_right" style="padding:2px;">
  					<div class="sendMsgTitle"><strong>消息输出</strong></div>
  					<textarea cols="63" rows="16" name="MessageTextAera_output" id="MessageTextAera_output" wrap="off"></textarea>
  					<a href="#" id="ClearMessage_link" style="float:right;"><img src="images/clearMsg.png" border="0" /></a>
  				</div>
  			</div>
  	
  	</div>
		

	<!--页面底部-->
	<div class="clear">
	</div>
	
	<div id="footer" align="center">
		Copyright © 2010-2014 公安部第一研究所/北京中盾安全技术开发公司  版权所有
		<br>版本 1.0.0.5
	</div> 
  
  </div>
  
  
<!-- Embed pushlet in page -->
<script type="text/javascript">p_embed()</script>

  </body>
</html>
