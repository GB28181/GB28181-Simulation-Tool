<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="/WEB-INF/showtable.tld" prefix="showtable"%>

<html>
<head><title>配置管理</title>
<link href="../index.css" rel="stylesheet" type="text/css" />
<link href="../table.css" rel="stylesheet" type="text/css" />
<link href="config.css" rel="stylesheet" type="text/css" />
<link rel="shortcut icon" type="image/ico" href="images/logo.ico" />
	
	
<script type="text/javascript" src="../lib/jquery-1.4.4.js"></script>
    <script type="text/javascript" src="../lib/js-pushlet-client.js"></script>
    <script type="text/javascript" src="../assets/api.js"></script>
    <script type="text/javascript" src="../lib/jquery.dragndrop.js"></script>
	<script type="text/javascript" src="../lib/jquery.msgbox.js"></script>
	<script type="text/javascript" src="../lib/menu/jquerycssmenu.js"></script>
	<script type="text/javascript" src="../main.js"></script>
	<script type="text/javascript" src="config.js"></script>	
</head>
<body onLoad="init()">
<!--页面层容器-->
  <div id="container">
  	<!--页面头部-->
	<div id="header">
		
  	</div>
		
	<!--页面主体-->
	<div id="pagebody">
		<!--调测软件SIP参数配置-->
		<div id="config_layer1" class="config_layer">
			<b>调测软件SIP参数配置</b>
			<br/>
			<table id="sipserver_config_table" class="config_table" border="1" cellspacing='0' cellpadding='1'>
				<tr>
					<th class="config_th_paramname">参数名称</th>
					<th class="config_th_paramvalue">参数值</th>
				</tr>
				<tr>
					<td class="config_td_paramname">调测服务器域名</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipserver_domainname" id="sipserver_domainname"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">调测服务器ID</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipserver_id" id="sipserver_id"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">调测服务器IP地址</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipserver_ip" id="sipserver_ip"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">调测服务器SIP端口</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipserver_port" id="sipserver_port"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">调测服务器对外注册密码</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipserver_password" id="sipserver_password"></td>
					
				</tr>

				<tr>
					<td class="config_td_paramname">媒体接收方IP</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="media_dest_ip" id="media_dest_ip"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">媒体接收方端口</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="media_dest_port" id="media_dest_port"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">多响应消息超时时间（秒）</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="large_msg_timeout" id="large_msg_timeout"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">历史回放开始时间，格式为yyyyMMddhhmmss</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="history_starttime" id="history_starttime"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">历史回放结束时间，格式为yyyyMMddhhmmss</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="history_endtime" id="history_endtime"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">目录查询、文件查询响应消息传输层协议</td>
					<td class="config_td_paramvalue"><select name="protocal" id="protocal"><option value="0">TCP</option><option value="1">UDP</option></select></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">是否模拟上级平台发送消息</td>
					<td class="config_td_paramvalue"><select name="simulate" id="simulate"><option value="0">是</option><option value="1">否</option></select></td>
				</tr>
				<tr>
					<td class="config_td_paramname">模拟上级平台ID</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="simulate_id" id="simulate_id"></td>
				</tr>
			</table>
		</div>
		<!--待调测DVR/NVR设备参数配置-->
		<div id="config_layer2" class="config_layer">
			<b>待调测DVR/NVR设备参数配置</b>
			<br/>
			<table id="dvrnvr_config_table" class="config_table" border="1" cellspacing='0' cellpadding='1'>
				<tr>
					<th class="config_th_paramname">参数名称</th>
					<th class="config_th_paramvalue">参数值</th>
					
				</tr>
				<tr>
					<td class="config_td_paramname">DVR/NVR设备ID</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_DVR_id" id="sipdevice_DVR_id"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">DVR/NVR设备注册密码</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_DVR_password" id="sipdevice_DVR_password"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">DVR/NVR所带通道ID</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_DVR_camera_id" id="sipdevice_DVR_camera_id"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">DVR/NVR所带报警输入ID</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_DVR_alarm_id" id="sipdevice_DVR_alarm_id"></td>
					
				</tr>
			</table>
		</div>
		<!---待调测IPC设备参数配置-->
		<div id="config_layer3" class="config_layer">
			<b>待调测IPC设备参数配置</b>
			<table id="ipc_config_table" class="config_table" border="1" cellspacing='0' cellpadding='1'>
				<tr>
					<th class="config_th_paramname">参数名称</th>
					<th class="config_th_paramvalue">参数值</th>
					
				</tr>
				<tr>
					<td class="config_td_paramname">IPC设备ID</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_IPC_id" id="sipdevice_IPC_id"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">IPC设备注册密码</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_IPC_password" id="sipdevice_IPC_password"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">IPC所带报警输入ID</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_IPC_alarm_id" id="sipdevice_IPC_alarm_id"></td>
					
				</tr>
			</table>
		</div>
		<!--待调测解码器设备参数配置-->
		<div id="config_layer4" class="config_layer">
			<b>待调测解码器设备参数配置</b>
			<br/>
			<table id="decoder_config_table" class="config_table" border="1" cellspacing='0' cellpadding='1'>
				<tr>
					<th class="config_th_paramname">参数名称</th>
					<th class="config_th_paramvalue">参数值</th>
					
				</tr>
				<tr>
					<td class="config_td_paramname">解码器设备ID</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_decoder_id" id="sipdevice_decoder_id"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">解码器设备注册密码</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_decoder_password" id="sipdevice_decoder_password"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">解码器所带监视器ID</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_decoder_monitor_id" id="sipdevice_decoder_monitor_id"></td>
					
				</tr>
			</table>
		</div>
		<!--待调测外部系统参数配置-->
		<div id="config_layer5" class="config_layer">
			<b>待调测系统参数配置</b>
			<table id="othersystem_config_table" class="config_table" border="1" cellspacing='0' cellpadding='1'>
				<tr>
					<th class="config_th_paramname">参数名称</th>
					<th class="config_th_paramvalue">参数值</th>
					
				</tr>
				<tr>
					<td class="config_td_paramname">待测系统ID</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_othersystem_id" id="sipdevice_othersystem_id"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">待测系统密码</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_othersystem_password" id="sipdevice_othersystem_password"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">待测系统视频设备ID</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_othersystem_camera_id" id="sipdevice_othersystem_camera_id"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">待测系统报警设备ID</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_othersystem_alarm_id" id="sipdevice_othersystem_alarm_id"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">待测系统语音输出设备ID</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_othersystem_audiooutput_id" id="sipdevice_othersystem_audiooutput_id"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">待测系统IP地址</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_othersystem_ip" id="sipdevice_othersystem_ip"></td>
					
				</tr>
				<tr>
					<td class="config_td_paramname">待测系统SIP端口</td>
					<td class="config_td_paramvalue"><input type="text" class="config_input" name="sipdevice_othersystem_port" id="sipdevice_othersystem_port"></td>
					
				</tr>
			</table>
		</div>
		<div id="config_layer6" class="config_layer">
			<!--参数配置生效-->
			<a href="#" id="apply_link" onclick="apply_config()" style="float:left;"><img src="../images/save_changes.png" border="0" /></a>
			<!--读取当前参数配置-->
			<a href="#" id="read_current_link" onclick="read_current_config()" style="float:left;"><img src="../images/load_config.png" border="0" /></a>
			<!--恢复默认参数配置-->
			<a href="#" id="recovery_link" onclick="recovery_config()" style="float:left;"><img src="../images/rollback.png" border="0" /></a>
		</div>
		
	</div>
	<!--页面底部-->
	<div id="footer">
		
	</div> 
  
  </div>
</body>
</html>