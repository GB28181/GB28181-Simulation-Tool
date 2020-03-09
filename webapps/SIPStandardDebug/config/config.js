

function init(){
	read_current_config();
}

function apply_config(){
	
	$.post(
				'/SIPStandardDebug/ConfigurationServlet',
				{
					requestType:'modifyconfiguration',    				
				
				sipserver_domainname:$('#sipserver_domainname').val(),
				sipserver_id:$('#sipserver_id').val(),
				sipserver_ip:$('#sipserver_ip').val(),
				sipserver_port:$('#sipserver_port').val(),
				sipserver_password:$('#sipserver_password').val(),
				media_dest_id:$('#sipserver_id').val(), // add sipserver_id instead
				media_dest_ip:$('#media_dest_ip').val(),
				media_dest_port:$('#media_dest_port').val(),
				large_msg_timeout:$('#large_msg_timeout').val(),
				history_starttime:$('#history_starttime').val(),
				history_endtime:$('#history_endtime').val(),
				
				sipdevice_DVR_id:$('#sipdevice_DVR_id').val(),
				sipdevice_DVR_password:$('#sipdevice_DVR_password').val(),
				sipdevice_DVR_camera_id:$('#sipdevice_DVR_camera_id').val(),
				sipdevice_DVR_alarm_id:$('#sipdevice_DVR_alarm_id').val(),
				
				sipdevice_IPC_id:$('#sipdevice_IPC_id').val(),
				sipdevice_IPC_password:$('#sipdevice_IPC_password').val(),
				sipdevice_IPC_alarm_id:$('#sipdevice_IPC_alarm_id').val(),
				
				sipdevice_decoder_id:$('#sipdevice_decoder_id').val(),
				sipdevice_decoder_password:$('#sipdevice_decoder_password').val(),
				sipdevice_decoder_monitor_id:$('#sipdevice_decoder_monitor_id').val(),
				
				sipdevice_othersystem_id:$('#sipdevice_othersystem_id').val(),
				sipdevice_othersystem_password:$('#sipdevice_othersystem_password').val(),
				sipdevice_othersystem_camera_id:$('#sipdevice_othersystem_camera_id').val(),
				sipdevice_othersystem_alarm_id:$('#sipdevice_othersystem_alarm_id').val(),
				sipdevice_othersystem_audiooutput_id:$('#sipdevice_othersystem_audiooutput_id').val(),
				sipdevice_othersystem_ip:$('#sipdevice_othersystem_ip').val(),
				sipdevice_othersystem_port:$('#sipdevice_othersystem_port').val(),
				protocal:$('#protocal').val(),
				simulate:$('#simulate').val(),
				simulate_id:$('#simulate_id').val()
				},
				function (data) // 回传函数
				{   
					// 返回消息框，修改成功
                var jquerydata = $(data);
                alert(jquerydata.text());
				},
				'html'
		)
}

function read_current_config(){
	
	$.post(
				'/SIPStandardDebug/ConfigurationServlet',
				{
					requestType:'loadconfiguration'
				},
				function (raw_data) // 回传函数
				{   
					// 读取JSON，显示在输入框中
					//var jquerydata = $(raw_data);
					var data = eval("(" + raw_data + ")");
					//alert(raw_data);
					 					
					$('#sipserver_domainname').val(data.sipserver_domainname),
				$('#sipserver_id').val(data.sipserver_id),
				$('#sipserver_ip').val(data.sipserver_ip),
				$('#sipserver_port').val(data.sipserver_port),
				$('#sipserver_password').val(data.sipserver_password),
				//$('#media_dest_id').val(data.media_dest_id),
				$('#media_dest_ip').val(data.media_dest_ip),
				$('#media_dest_port').val(data.media_dest_port),
				$('#large_msg_timeout').val(data.large_msg_timeout),
				$('#history_starttime').val(data.history_starttime),
				$('#history_endtime').val(data.history_endtime),
				
				$('#sipdevice_DVR_id').val(data.sipdevice_DVR_id),
				$('#sipdevice_DVR_password').val(data.sipdevice_DVR_password),
				$('#sipdevice_DVR_camera_id').val(data.sipdevice_DVR_camera_id),
				$('#sipdevice_DVR_alarm_id').val(data.sipdevice_DVR_alarm_id),
				
				$('#sipdevice_IPC_id').val(data.sipdevice_IPC_id),
				$('#sipdevice_IPC_password').val(data.sipdevice_IPC_password),
				$('#sipdevice_IPC_alarm_id').val(data.sipdevice_IPC_alarm_id),
				
				$('#sipdevice_decoder_id').val(data.sipdevice_decoder_id),
				$('#sipdevice_decoder_password').val(data.sipdevice_decoder_password),
				$('#sipdevice_decoder_monitor_id').val(data.sipdevice_decoder_monitor_id),
				
				$('#sipdevice_othersystem_id').val(data.sipdevice_othersystem_id),
				$('#sipdevice_othersystem_password').val(data.sipdevice_othersystem_password),
				$('#sipdevice_othersystem_camera_id').val(data.sipdevice_othersystem_camera_id),
				$('#sipdevice_othersystem_alarm_id').val(data.sipdevice_othersystem_alarm_id),
				$('#sipdevice_othersystem_audiooutput_id').val(data.sipdevice_othersystem_audiooutput_id),
				$('#sipdevice_othersystem_ip').val(data.sipdevice_othersystem_ip),
				$('#sipdevice_othersystem_port').val(data.sipdevice_othersystem_port),
				$('#protocal').get(0).selectedIndex = data.protocal,
				$('#simulate').get(0).selectedIndex = data.simulate,
				$('#simulate_id').val(data.simulate_id)
					
				},
				'html'
		)
}


function recovery_config(){
	
	 $.post(
				'/SIPStandardDebug/ConfigurationServlet',
				{
					requestType:'rollbackconfiguration'
				},
				function (raw_data) // 回传函数
				{   
					// 读取JSON，显示在输入框中
					
					var data = eval("(" + raw_data + ")");
					//alert(raw_data);
					 					
					$('#sipserver_domainname').val(data.sipserver_domainname),
 				$('#sipserver_id').val(data.sipserver_id),
 				$('#sipserver_ip').val(data.sipserver_ip),
 				$('#sipserver_port').val(data.sipserver_port),
 				$('#sipserver_password').val(data.sipserver_password),
 				$('#media_dest_id').val(data.media_dest_id),
 				$('#media_dest_ip').val(data.media_dest_ip),
 				$('#media_dest_port').val(data.media_dest_port),
 				$('#large_msg_timeout').val(large_msg_timeout),
 				$('#history_starttime').val(data.history_starttime),
 				$('#history_endtime').val(data.history_endtime),
 				
 				$('#sipdevice_DVR_id').val(data.sipdevice_DVR_id),
 				$('#sipdevice_DVR_password').val(data.sipdevice_DVR_password),
 				$('#sipdevice_DVR_camera_id').val(data.sipdevice_DVR_camera_id),
 				$('#sipdevice_DVR_alarm_id').val(data.sipdevice_DVR_alarm_id),
 				
 				$('#sipdevice_IPC_id').val(data.sipdevice_IPC_id),
 				$('#sipdevice_IPC_password').val(data.sipdevice_IPC_password),
 				$('#sipdevice_IPC_alarm_id').val(data.sipdevice_IPC_alarm_id),
 				
 				$('#sipdevice_decoder_id').val(data.sipdevice_decoder_id),
 				$('#sipdevice_decoder_password').val(data.sipdevice_decoder_password),
 				$('#sipdevice_decoder_monitor_id').val(data.sipdevice_decoder_monitor_id),
 				
 				$('#sipdevice_othersystem_id').val(data.sipdevice_othersystem_id),
 				$('#sipdevice_othersystem_password').val(data.sipdevice_othersystem_password),
 				$('#sipdevice_othersystem_camera_id').val(data.sipdevice_othersystem_camera_id),
 				$('#sipdevice_othersystem_alarm_id').val(data.sipdevice_othersystem_alarm_id),
 				$('#sipdevice_othersystem_ip').val(data.sipdevice_othersystem_ip),
 				$('#sipdevice_othersystem_port').val(data.sipdevice_othersystem_port),
 				$('#protocal').get(0).selectedIndex = data.protocal,
 				$('#simulate').get(0).selectedIndex = data.simulate,
 				$('#simulate_id').val(data.simulate_id)
				},
				'html'
			)
}
    
