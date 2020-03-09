<%@ page language="java" pageEncoding="UTF-8"%>
<%@ page import="cn.com.fri.axy.sip.init.SSDConfig"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>在线状态逻辑检测</title>
<link href="status_detection.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="../../lib/jquery-1.4.4.js"></script>
<script type="text/javascript" src="../../lib/js-pushlet-client.js"></script>
<script type="text/javascript" src="../../assets/api.js"></script>
<script type="text/javascript" src="../../lib/jquery.dragndrop.js"></script>
<script type="text/javascript" src="../../lib/jquery.msgbox.js"></script>
<script type="text/javascript" src="../../lib/menu/jquerycssmenu.js"></script>
<script type="text/javascript" src="../../main.js"></script>

<script type="text/javascript">
	var dvrId = '<%= SSDConfig.getInstance().getDVRID() %>';
	var ipcId = '<%= SSDConfig.getInstance().getIPCID() %>';
	var sysId = '<%= SSDConfig.getInstance().getOtherSystemID() %>';
	var decId = '<%= SSDConfig.getInstance().getDecoderID() %>';
	var idArray = new Array(dvrId, ipcId, decId, sysId);
</script>

<script type="text/javascript" src="status_detection.js" charset="utf-8"></script>

</head>

<body onLoad="init()">

<p class = "status_title">在线状态逻辑检测</p>
<div id = "param_config">
<table>
<tr><td class = "status_th_paramname">选择调测类型</td><td class = "status_th_paramvalue"><select id = "detectType" onchange="selectChanged()"><option value="up">上联调测</option><option value="down">下联调测</option></select></td></tr>
<tr><td class = "status_th_paramname">选择调测设备</td><td class = "status_th_paramvalue"><select id = "detectDevice"><option value="0">DVR/NVR设备</option><option value="1">IPC设备</option><option value="2">解码器设备</option><option value="3">互联系统</option></select></td></tr>
<tr><td class = "status_th_paramname">心跳接受间隔（秒）</td><td class = "status_th_paramvalue"><input type="text" id="HBInterval" value="60"></td></tr>
<tr><td class = "status_th_paramname">心跳连续超时次数</td><td class = "status_th_paramvalue"><input type="text" id="HBExpire" value="3"></td></tr>
<tr><td class = "status_th_paramname">注册过期时间（秒）</td><td class = "status_th_paramvalue"><input type="text" id="ZCExpire" value="3600"></td></tr>
</table>
<!-- <button id="start_detection_link">开始检测</button> --> 
<a href="#" id="start_detection_link">开始检测</a>
</div>

<br>
<hr>

<p class = "status_close" id = "current_status_label">当前状态【未检测】</p>

<div id = "status_detect" class = "status_detect_div">
</div>
<br><a href="#" id="stop_detection_link">停止检测</a>&nbsp;<a href="#" id="clear_link">清空消息</a><br>

<!-- 加入消息侦听模块   -->
<script type="text/javascript">p_embed()</script>
</body>
</html> 