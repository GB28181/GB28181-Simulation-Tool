/**
 * index.jsp使用的JS代码
 */

var fileInfoResultWindow;
var catalogInfoResultWindow;

/**
 * 改变调试设备类型时改变可调试消息样式
 * 
 * @param deviceType
 * @return
 */
function changeLinkStyleByDeviceType(deviceType)
{
	//取得需要改变样式的元素集合
	var elements;
	var elements_recover;
	if(deviceType == "dvr")
	{
		elements = getElements("dvr", "a", "layer2");
		elements_recover = getElements("ndvr", "a", "layer2");
		// alert(elements.length);
		// alert(elements_recover.length);
	}
	else if(deviceType == "ipc")
	{
		elements = getElements("ipc", "a", "layer2");
		elements_recover = getElements("nipc", "a", "layer2");
		// alert(elements.length);
		// alert(elements_recover.length);
	}
	else if(deviceType == "decoder")
	{
		elements = getElements("decoder", "a", "layer2");
		elements_recover = getElements("ndecoder", "a", "layer2");
		// alert(elements.length);
		// alert(elements_recover.length);
	}
	else if(deviceType == "othersystem")
	{
		elements = getElements("othersystem", "a", "layer2");
		elements_recover = getElements("nothersystem", "a", "layer2");
		// alert(elements.length);
		// alert(elements_recover.length);
	}
	else
	{
		alert("error deviceType " + deviceType);
	}
	
	// 改变元素样式
	for(var i = 0; i < elements.length; i++) {
        var element = elements[i];
        // alert("getAttribute" + element.getAttribute("href"));
        element.removeAttribute("href");
    }
	
	for(var i = 0; i < elements_recover.length; i++) {
        var element = elements_recover[i];
        // alert("getAttribute" + element.getAttribute("href"));
        element.setAttribute("href","#");
    }
	
}
	
function menuchoice(value){
		// alert(device_type);
		var othersystem_deviceid_div = document.getElementById("othersystem_deviceid_div");
		othersystem_deviceid_div.style.display = "none";
		
		if(value == "dvr")
		{
			device_type = 'dvr';
			document.getElementById("info").innerText = "当前调测设备类型:DVR/NVR";
		}
		else if(value == "ipc")
		{
			device_type = 'ipc';
			document.getElementById("info").innerText = "当前调测设备类型:IPC";
		}
		else if(value == "decoder")
		{
			device_type = 'decoder';
			document.getElementById("info").innerText = "当前调测设备类型:解码器";
		}
		else if(value == "othersystem")
		{
			device_type = 'othersystem';
			document.getElementById("info").innerText = "当前调测设备类型:互联系统";
			othersystem_deviceid_div.style.display = "block";
		}
		else
		{
			device_type = 'dvr';
		}
		document.getElementById("devicetype").value=device_type;
		// alert(document.getElementById("devicetype").value);
		changeLinkStyleByDeviceType(value);
	}
	
	
//根据选择设置文本框内容
function choice(checkValue){
		
		//检查是否是无效连接
		var element = document.getElementById(checkValue);
		// alert(element.getAttribute("href"));
		if(!element.getAttribute("href"))
		{
			// $.msgbox("请选择当前设备支持的消息进行调测。");
			return;
		}
		
		var messageBody;
		
		// alert(checkValue);
		
		if(checkValue == "RealTime")
		{
			var sdp_a = "recvonly";
			var localMediaPort = mediaDestPort;
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			sdp_a = "sendonly";
			localMediaPort = "5000";
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "v=0\n" +
			"o=" + mediaDestID + " 0 0 IN IP4 " + mediaDestIP + "\n" +
			"s=Play\n" +
			"c=IN IP4 " + mediaDestIP + "\n" +
			"t=0 0\n" +
			"m=video " + localMediaPort + " RTP/AVP 96 98 97\n" +
			"a=" + sdp_a + "\n" +
			"a=rtpmap:96 PS/90000\n" +
			"a=rtpmap:97 MPEG4/90000\n" +
			"a=rtpmap:98 H264/90000\n";
			
			if(device_type != "othersystem")
			{
				messageBody = messageBody + 
							"y=0100000001\n" +
							"f=\n";
			}
			
		}
		else if(checkValue == "History")
		{
			var historycameraID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			historycameraID = cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			historycameraID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			historycameraID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "v=0\n" +
			"o=" + mediaDestID + " 0 0 IN IP4 " + mediaDestIP + "\n" +
			"s=Playback\n" +
			"u=" + historycameraID + ":3\n" +
			"c=IN IP4 " + mediaDestIP + "\n" +
			"t=" + historyTime + "\n" +
			"m=video " + mediaDestPort + " RTP/AVP 96 98 97\n" +
			"a=recvonly\n" +
			"a=rtpmap:96 PS/90000\n" +
			"a=rtpmap:97 MPEG4/90000\n" +
			"a=rtpmap:98 H264/90000\n";
			
			if(device_type != "othersystem")
			{
				messageBody = messageBody + 
							"y=0100000001\n" +
							"f=\n";
			}
		}
		else if(checkValue == "Download")
		{
			
		var historycameraID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			historycameraID = cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			historycameraID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			historycameraID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "v=0\n" +
			"o=" + mediaDestID + " 0 0 IN IP4 " + mediaDestIP + "\n" +
			"s=Download\n" +
			"u=" + historycameraID + ":3\n" +
			"c=IN IP4 " + mediaDestIP + "\n" +
			"t=" + historyTime + "\n" +
			"m=video 9910 RTP/AVP 96 98 97\n" +
			"a=recvonly\n" +
			"a=rtpmap:96 PS/90000\n" +
			"a=rtpmap:97 MPEG4/90000\n" +
			"a=rtpmap:98 H264/90000\n" +
			"a=downloadspeed:1\n";
			
			if(device_type != "othersystem")
			{
				messageBody = messageBody + 
							"y=0100000001\n" +
							"f=\n";
			}
			
		}
		else if(checkValue == "Broadcast")	//新增语音设备类型
		{
			var voiceSourceID = sipserverBroadcastDeviceID;
			var voiceDestID = othersystemaudiodeviceID;
			if(device_type == "dvr")
			{
//			document.getElementById("deviceid").value=cameraID;
			}
			else if(device_type == "ipc")
			{
//			document.getElementById("deviceid").value=ipcID;
			}
			else if(device_type == "decoder")
			{
//			document.getElementById("deviceid").value=monitorID;
			}
			else if(device_type == "othersystem")
			{
//			document.getElementById("deviceid").value=othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Notify>\n" +
			"<CmdType>Broadcast</CmdType>\n" +
			"<SN>11</SN>\n" +
			"<SourceID>" + voiceSourceID + "</SourceID>\n" +
			"<TargetID>" + voiceDestID + "</TargetID>\n" +
			"</Notify>\n";
			
		}
		else if(checkValue == "PTZ_Left")	// 遥控时按照地址码为1， 速度为1的默认值 生成代码
		{
			var ptzcameraID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			ptzcameraID = cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			ptzcameraID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			ptzcameraID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Control>\n" +
			"<CmdType>DeviceControl</CmdType>\n" +
			"<SN>21</SN>\n" +
			"<DeviceID>" + ptzcameraID + "</DeviceID>\n" +
			"<PTZCmd>A50F01021F0000D6</PTZCmd>\n" +
			"</Control>\n";
			
		}
		else if(checkValue == "PTZ_Right")
		{
			var ptzcameraID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			ptzcameraID = cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			ptzcameraID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			ptzcameraID = cameraID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			ptzcameraID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Control>\n" +
			"<CmdType>DeviceControl</CmdType>\n" +
			"<SN>31</SN>\n" +
			"<DeviceID>" + ptzcameraID + "</DeviceID>\n" +
			"<PTZCmd>A50F01011F0000D5</PTZCmd>\n" +
			"</Control>\n";
			
		}
		else if(checkValue == "PTZ_Up")
		{
			var ptzcameraID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			ptzcameraID = cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			ptzcameraID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			ptzcameraID = cameraID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			ptzcameraID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Control>\n" +
			"<CmdType>DeviceControl</CmdType>\n" +
			"<SN>41</SN>\n" +
			"<DeviceID>" + ptzcameraID + "</DeviceID>\n" +
			"<PTZCmd>A50F0108001F00DC</PTZCmd>\n" +
			"</Control>\n";
			
		}
		else if(checkValue == "PTZ_Down")
		{
			var ptzcameraID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			ptzcameraID = cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			ptzcameraID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			ptzcameraID = cameraID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			ptzcameraID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Control>\n" +
			"<CmdType>DeviceControl</CmdType>\n" +
			"<SN>51</SN>\n" +
			"<DeviceID>" + ptzcameraID + "</DeviceID>\n" +
			"<PTZCmd>A50F0104001F00D8</PTZCmd>\n" +
			"</Control>\n";
			
		}
		else if(checkValue == "PTZ_ZoomIn")
		{
			var ptzcameraID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			ptzcameraID = cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			ptzcameraID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			ptzcameraID = cameraID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			ptzcameraID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Control>\n" +
			"<CmdType>DeviceControl</CmdType>\n" +
			"<SN>61</SN>\n" +
			"<DeviceID>" + ptzcameraID + "</DeviceID>\n" +
			"<PTZCmd>A50F0110000010D5</PTZCmd>\n" +
			"</Control>\n";
			
		}
		else if(checkValue == "PTZ_ZoomOut")
		{
			var ptzcameraID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			ptzcameraID = cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			ptzcameraID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			ptzcameraID = cameraID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			ptzcameraID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Control>\n" +
			"<CmdType>DeviceControl</CmdType>\n" +
			"<SN>71</SN>\n" +
			"<DeviceID>" + ptzcameraID + "</DeviceID>\n" +
			"<PTZCmd>A50F0120000010E5</PTZCmd>\n" +
			"</Control>\n";
			
		}
		else if(checkValue == "PTZ_Stop")
		{
			var ptzcameraID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			ptzcameraID = cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			ptzcameraID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			ptzcameraID = cameraID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			ptzcameraID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Control>\n" +
			"<CmdType>DeviceControl</CmdType>\n" +
			"<SN>81</SN>\n" +
			"<DeviceID>" + ptzcameraID + "</DeviceID>\n" +
			"<PTZCmd>A50F0100000000B5</PTZCmd>\n" +
			"</Control>\n";
			
		}
		else if(checkValue == "PlaybackControl_Play")
		{
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "PLAY RTSP/1.0\n" +
			"CSeq: 2\n" +
			"Range: npt=now-\n";
			
		}
		else if(checkValue == "PlaybackControl_Pause")
		{
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "PAUSE RTSP/1.0\n" +
			"CSeq: 1\n" +
			"PauseTime: now\n";;
			
		}
		else if(checkValue == "PlaybackControl_Fast")
		{
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "PLAY RTSP/1.0\n" +
			"CSeq: 3\n" +
			"Scale: 2.0\n";
			
		}
		else if(checkValue == "PlaybackControl_Slow")
		{
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "PLAY RTSP/1.0\n" +
			"CSeq: 3\n" +
			"Scale: 0.5\n";
			
		}
		else if(checkValue == "PlaybackControl_Drag")
		{
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "PLAY RTSP/1.0\n" +
			"CSeq: 4\n" +
			"Range: npt=100-\n";
			
		}
		else if(checkValue == "StartRecord")
		{
			var historycameraID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			historycameraID = cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			historycameraID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			historycameraID = cameraID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			historycameraID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Control>\n" +
			"<CmdType>DeviceControl</CmdType>\n" +
			"<SN>17</SN>\n" +
			"<DeviceID>" + historycameraID + "</DeviceID>\n" +
			"<RecordCmd>Record</RecordCmd>\n" +
			"</Control>\n";
			
		}
		else if(checkValue == "StopRecord")
		{
			var historycameraID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			historycameraID = cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			historycameraID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			historycameraID = cameraID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			historycameraID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Control>\n" +
			"<CmdType>DeviceControl</CmdType>\n" +
			"<SN>27</SN>\n" +
			"<DeviceID>" + historycameraID + "</DeviceID>\n" +
			"<RecordCmd>StopRecord</RecordCmd>\n" +
			"</Control>\n";
			
		}
		else if(checkValue == "FileQuery")
		{
			var historycameraID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=cameraID;
			historycameraID = cameraID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			historycameraID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			historycameraID = cameraID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			historycameraID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
				"<Query>\n" +
			"<CmdType>RecordInfo</CmdType>\n" +
			"<SN>17430</SN>\n" +
			"<DeviceID>" + historycameraID + "</DeviceID>\n" +
			"<StartTime>2010-11-11T19:46:17</StartTime>\n" +
			"<EndTime>2010-11-12T19:46:17</EndTime>\n" +
			"<Type>time</Type>\n" +
			"</Query>\n";
			
		}
		else if(checkValue == "SetGuard")
		{
			var alarmdeviceID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=alarmID;
			alarmdeviceID = alarmID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcalarmID;
			alarmdeviceID = ipcalarmID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			alarmdeviceID = alarmID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemalarmdeviceID;
			alarmdeviceID = othersystemalarmdeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Control>\n" +
			"<CmdType>DeviceControl</CmdType>\n" +
			"<SN>17294</SN>\n" +
			"<DeviceID>" + alarmdeviceID + "</DeviceID>\n" +
			"<GuardCmd>SetGuard</GuardCmd>\n" +
			"</Control>\n";
			
		}
		else if(checkValue == "Alarm")
		{
			var alarmdeviceID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=alarmID;
			alarmdeviceID = alarmID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcalarmID;
			alarmdeviceID = ipcalarmID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			alarmdeviceID = alarmID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemID;
			alarmdeviceID = alarmID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Notify>\n" +
			"<CmdType>Alarm</CmdType>\n" +
			"<SN>100</SN>\n" +
			"<DeviceID>" + alarmdeviceID + "</DeviceID>\n" +
			"<AlarmPriority>4</AlarmPriority>\n" +
			"<AlarmTime>2009-12-04T16:23:32</AlarmTime>\n" +
			"<AlarmMethod>2</AlarmMethod>\n" +
			"</Notify>\n";
			
		}
		else if(checkValue == "ResetGuard")
		{
			var alarmdeviceID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=alarmID;
			alarmdeviceID = alarmID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcalarmID;
			alarmdeviceID = ipcalarmID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			alarmdeviceID = alarmID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemalarmdeviceID;
			alarmdeviceID = othersystemalarmdeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Control>\n" +
			"<CmdType>DeviceControl</CmdType>\n" +
			"<SN>17304</SN>\n" +
			"<DeviceID>" + alarmdeviceID + "</DeviceID>\n" +
			"<GuardCmd>ResetGuard</GuardCmd>\n" +
			"</Control>\n";
			
		}
		else if(checkValue == "ResetAlarm")
		{
			var alarmdeviceID = '';
		if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=alarmID;
			alarmdeviceID = alarmID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcalarmID;
			alarmdeviceID = ipcalarmID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=monitorID;
			alarmdeviceID = alarmID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemalarmdeviceID;
			alarmdeviceID = othersystemalarmdeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Control>\n" +
			"<CmdType>DeviceControl</CmdType>\n" +
			"<SN>17438</SN>\n" +
			"<DeviceID>" + alarmdeviceID + "</DeviceID>\n" +
			"<AlarmCmd>ResetAlarm</AlarmCmd>\n" +
			"<Info>\n" +
			"<AlarmMethod>2</AlarmMethod>\n" +
			"</Info>\n" +
			"</Control>\n";
			
		}
		else if(checkValue == "DeviceCatalog")
		{
			var querydeviceID = '';
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=dvrID;
			querydeviceID = dvrID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			querydeviceID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=decoderID;
			querydeviceID = decoderID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemID;
			querydeviceID = othersystemID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Query>\n" +
			"<CmdType>Catalog</CmdType>\n" +
			"<SN>248</SN>\n" +
			"<DeviceID>" + querydeviceID + "</DeviceID>\n" +
			"</Query>\n";
			
		}
		else if(checkValue == "DeviceStatus")
		{
			
			var querydeviceID = '';
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=dvrID;
			querydeviceID = dvrID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			querydeviceID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=decoderID;
			querydeviceID = decoderID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			querydeviceID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Query>\n" +
			"<CmdType>DeviceStatus</CmdType>\n" +
			"<SN>258</SN>\n" +
			"<DeviceID>" + querydeviceID + "</DeviceID>\n" +
			"</Query>\n";
			
		}
		else if(checkValue == "DeviceInfo")
		{
			var querydeviceID = '';
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=dvrID;
			querydeviceID = dvrID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			querydeviceID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=decoderID;
			querydeviceID = decoderID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			querydeviceID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Query>\n" +
			"<CmdType>DeviceInfo</CmdType>\n" +
			"<SN>17440</SN>\n" +
			"<DeviceID>" + querydeviceID + "</DeviceID>\n" +
			"</Query>\n";
			
		}
		else if(checkValue == "Boot")
		{
			
			var querydeviceID = '';
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=dvrID;
			querydeviceID = dvrID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			querydeviceID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=decoderID;
			querydeviceID = decoderID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			querydeviceID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Control>\n" +
			"<CmdType>DeviceControl</CmdType>\n" +
			"<SN>17318</SN>\n" +
			"<DeviceID>" + querydeviceID + "</DeviceID>\n" +
			"<TeleBoot>Boot</TeleBoot>\n" +
			"</Control>\n";
			
		}
		else if(checkValue == "Register")
		{
			var querydeviceID = '';
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=dvrID;
			querydeviceID = dvrID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			querydeviceID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=decoderID;
			querydeviceID = decoderID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemID;
			querydeviceID = sipserverID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "//注册消息过期时间\n" +
							"//expire=0为注销，大于0为正常注册\n" +
							"expire=3600\n";
			
		}
		else if(checkValue == "Keepalive")
		{
			var querydeviceID = '';
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=dvrID;
			querydeviceID = dvrID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			querydeviceID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=decoderID;
			querydeviceID = decoderID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemID;
			querydeviceID = sipserverID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Notify>\n" +
			"<CmdType>Keepalive</CmdType>\n" +
			"<SN>43</SN>\n" +
			"<DeviceID>" + querydeviceID + "</DeviceID>\n" +
			"<Status>OK</Status>\n" +
			"</Notify>\n";
			
		}
		else if(checkValue == "CatalogSubscribe")
		{
			var querydeviceID = '';
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=dvrID;
			querydeviceID = dvrID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			querydeviceID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=decoderID;
			querydeviceID = decoderID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemID;
			querydeviceID = othersystemID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Query>\n" +
			"<CmdType>Catalog</CmdType>\n" +
			"<SN>17460</SN>\n" +
			"<DeviceID>" + querydeviceID + "</DeviceID>\n" +
			"</Query>\n";
			
		}
		else if(checkValue == "CatalogNotify")
		{
			var querydeviceID = '';
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=dvrID;
			querydeviceID = dvrID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			querydeviceID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=decoderID;
			querydeviceID = decoderID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemID;
			querydeviceID = sipserverID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Notify>\n" +
			"<CmdType>Catalog</CmdType>\n" +
			"<SN>162</SN>\n" +
			"<DeviceID>" + sipserverID + "</DeviceID>\n" +
			"<Status>OK</Status>\n" +
			"<SumNum>2</SumNum>\n" +
			"<DeviceList Num=\"2\">\n" +
			"\t<Item>\n" +
			"\t\t<DeviceID>" + domainName + "1310000001" + "</DeviceID>\n" +
			"\t\t<Event>OFF</Event>\n" +
			"\t</Item>\n" +
			"\t<Item>\n" +
			"\t\t<DeviceID>" + domainName + "1310000002" + "</DeviceID>\n" +
			"\t\t<Event>OFF</Event>\n" +
			"\t</Item>\n" +
			"</DeviceList>\n" +
			"</Notify>\n";
			
		}
		else if(checkValue == "ConfigDownload")
		{
			
			var querydeviceID = '';
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=dvrID;
			querydeviceID = dvrID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			querydeviceID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=decoderID;
			querydeviceID = decoderID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			querydeviceID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Query>\n" +
			"<CmdType>ConfigDownload</CmdType>\n" +
			"<SN>268</SN>\n" +
			"<DeviceID>" + querydeviceID + "</DeviceID>\n" +
			"<ConfigType>BasicParam/VideoParamOpt/VideoParamConfig/AudioParamOpt/AudioParamConfig/" +
			"SVACEncodeConfig/SVACDecodeConfig</ConfigType>\n" +
			"</Query>\n";
			
		}
		else if(checkValue == "DeviceConfig")
		{
			
			var querydeviceID = '';
			if(device_type == "dvr")
			{
			document.getElementById("deviceid").value=dvrID;
			querydeviceID = dvrID;
			}
			else if(device_type == "ipc")
			{
			document.getElementById("deviceid").value=ipcID;
			querydeviceID = ipcID;
			}
			else if(device_type == "decoder")
			{
			document.getElementById("deviceid").value=decoderID;
			querydeviceID = decoderID;
			}
			else if(device_type == "othersystem")
			{
			document.getElementById("deviceid").value=othersystemcameradeviceID;
			querydeviceID = othersystemcameradeviceID;
			}
			else
			{
				alert("设备类型错误！");
			}
			
			messageBody = "<?xml version=\"1.0\"?>\n" +
			"<Query>\n" +
			"<CmdType>DeviceConfig</CmdType>\n" +
			"<SN>278</SN>\n" +
			"<DeviceID>" + querydeviceID + "</DeviceID>\n" +
			//TODO 配置的各项参数取值
			 "<BasicParam>\n" +
			 	"<Name>调测设备</Name>\n" +
			 	"<DeviceID>" + querydeviceID + "</DeviceID>\n" +
			 	"<SIPServerID>" + sipserverID + "</SIPServerID>\n" +
			 	"<SIPServerIP>" + sipserverIP + "</SIPServerIP>\n" +
			 	"<SIPServerPort>" + sipserverPort + "</SIPServerPort>\n" +
			 	"<DomainName>" + domainName + "</DomainName>\n" +
			 	"<Expiration>3600</Expiration>\n" +
			 	"<Password>" + sipserverPassword + "</Password>\n" +
			 	"<HeartBeatInterval>60</HeartBeatInterval>\n" +
			 	"<HeartBeatCount>3</HeartBeatCount>\n" +
			 "</BasicParam>\n" +
			 "<VideoParamConfig Num=\"3\">\n" +
			 	"<Item>\n" +
			 		"<StreamName>test1</StreamName>\n" +
			 		"<VideoFormat>2</VideoFormat>\n" +
			 		"<Resolution>4</Resolution>\n" +
			 		"<FrameRate>25</FrameRate>\n" +
			 		"<BitRateType>1</BitRateType>\n" +
			 		"<VideoBitRate>1536</VideoBitRate>\n" +
			 	"</Item>\n" +
			 	"<Item>\n" +
			 		"<StreamName>test2</StreamName>\n" +
			 		"<VideoFormat>2</VideoFormat>\n" +
			 		"<Resolution>5</Resolution>\n" +
			 		"<FrameRate>25</FrameRate>\n" +
			 		"<BitRateType>1</BitRateType>\n" +
			 		"<VideoBitRate>4096</VideoBitRate>\n" +
		 		"</Item>\n" +
		 		"<Item>\n" +
			 		"<StreamName>test3</StreamName>\n" +
			 		"<VideoFormat>3</VideoFormat>\n" +
			 		"<Resolution>6</Resolution>\n" +
			 		"<FrameRate>25</FrameRate>\n" +
			 		"<BitRateType>1</BitRateType>\n" +
			 		"<VideoBitRate>8192</VideoBitRate>\n" +
			 	"</Item>\n" +
			 "</VideoParamConfig>\n" + 
			 "<AudioParamConfig Num=\"1\">\n" +
				 "<Item>\n" +
			 		"<StreamName>test1</StreamName>\n" +
			 		"<AudioFormat>1</AudioFormat>\n" +
			 		"<AudioBitRate>8</AudioBitRate>\n" +
			 		"<SamplingRate>1</SamplingRate>\n" +
			 	 "</Item>\n" +
			 "</AudioParamConfig>\n" +
			 "<SVACEncodeConfig>\n" +
			 	"<ROIParam>\n" +
				 	"<ROIFlag>1</ROIFlag>\n" +
				 	"<ROINumber>2</ROINumber>\n" +
				 	"<Item>\n" +
					 	"<ROISeq>1</ROISeq>\n" +
					 	"<TopLeft>1</TopLeft>\n" +
					 	"<BottomRight>1</BottomRight>\n" +
					 	"<ROIQP>1</ROIQP>\n" +
					 "</Item>\n" +
					 "<Item>\n" +
					 	"<ROISeq>2</ROISeq>\n" +
					 	"<TopLeft>2</TopLeft>\n" +
					 	"<BottomRight>2</BottomRight>\n" +
					 	"<ROIQP>2</ROIQP>\n" +
					 "</Item>\n" +
					 "<BackGroundQP>0</BackGroundQP>\n" +
					 "<BackGroundSkipFlag>1</BackGroundSkipFlag>\n" +
			 	"</ROIParam>\n" +
				 "<SVCParam>\n" + 
				 	"<SVCFlag>1</SVCFlag>\n" +
				 	"<SVCSTMMode>1</SVCSTMMode>\n" +
				 	"<SVCSpaceDomainMode>1</SVCSpaceDomainMode>\n" +
				 	"<SVCTimeDomainMode>1</SVCTimeDomainMode>\n" +
				 "</SVCParam>\n" +
				 "<SurveillanceParam>\n" + 
				 	"<TimeFlag>1</TimeFlag>\n" +
				 	"<EventFlag>1</EventFlag>\n" +
				 	"<AlertFlag>1</AlertFlag>\n" +
				 "</SurveillanceParam>\n" +
				 "<EncryptParam>\n" + 
				 	"<EncryptionFlag>1</EncryptionFlag>\n" +
				 	"<AuthenticationFlag>1</AuthenticationFlag>\n" +
				 "</EncryptParam>\n" +
				 "<AudioParam>\n" +
				 	"<AudioRecognitionFlag>1</AudioRecognitionFlag>\n" +
				 "</AudioParam>\n" +
			 "</SVACEncodeConfig>\n" +
			"</Query>\n";
			
		}
		
		// 优先使用原来修改过的消息体
		var message_key = device_type + "-" + checkValue;
		// alert("get from key\n" + message_key);
		var message_value = message_map.get(message_key);
		// alert("get value\n" + message_value);
		if(message_value != null)
		{
			// alert("here");
			messageBody = message_value;
		}
		
		document.getElementById("MessageParam").value=checkValue;
		document.getElementById("MessageTextAera").value=messageBody;
}
	
function getElement(id){
	if(document.getElementById){
    	return document.getElementById(id);
	}
}    

function linkinit(){
    
    getElement('SSDForm_link').onclick = function(){
    	
		// 保存消息到散列中
		// alert("put key\n" + $('#devicetype').val() + "-" +
		// $('#MessageParam').val() + "\nvalue\n" +
		// $('#MessageTextAera').val());
		message_map.put($('#devicetype').val() + "-" + $('#MessageParam').val(), $('#MessageTextAera').val());
		
		var deviceid = $('#deviceid').val();
		if(device_type == "othersystem")
		{
			if($('#othersystem_deviceid').val() != null && $('#othersystem_deviceid').val() != '')
			{
				deviceid = $('#othersystem_deviceid').val();
				var reDeviceID = /^\d{20}$/;
				if(reDeviceID.test(deviceid) == false)
				{
					$.msgbox(deviceid + " 为非标准编码，请重新输入。");
					return;
				}
				
			}
		}
		
        $.post(
  				'/SIPStandardDebug/ajax',
  				{
  					requestType:'sendmessage',
  					devicetype:$('#devicetype').val(),
    				//deviceid:$('#deviceid').val(),
  					deviceid:deviceid,
    				MessageParam:$('#MessageParam').val(),
    				MessageTextAera:$('#MessageTextAera').val()
  				},
  				function (data) // 回传函数
  				{   
  					// alert('aaaa');
  					var jquerydata = $(data);
     				// alert(jquerydata.text())
                    // var results=eval(data);
                    // alert(results[0].result);
                    $.msgbox(jquerydata.text());
  				},
  				'html'
			);
        
	};
    
    getElement('ClearMessage_link').onclick = function(){
        document.getElementById("MessageTextAera_output").value = '';
	};
    
    
    getElement('play_viedo').onclick = function(){
        //window.open('/SIPStandardDebug/sip/play_video.html','play_viedo_window','height=640,width=720,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=yes');
    	$.msgbox("请使用链接地址'http://服务器IP:8080/SIPStandardDebug/sip/play_video.html'在新窗口中打开播放页面。");
    	
	};
	
    getElement('lookup_link').onclick = function(){
    	
        window.open('/SIPStandardDebug/sip/lookup.jsp','lookup_link_window','height=600,width=1000,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
        
	};
	
	getElement('gbmedia_viedo').onclick = function(){
    	
        //window.open('/SIPStandardDebug/media/GB_Media_Detect.htm','lookup_link_window','height=1000,width=1000,top=0,left=0,toolbar=no,menubar=no,scrollbars=yes, resizable=yes,location=no, status=no');
		$.msgbox("请使用链接地址'http://服务器IP:8080/SIPStandardDebug/media/detect.htm'在新窗口中打开播放页面。");
	};
	
	//getElement('resmessage_edit_link').onclick = function(){
    //    window.open('/SIPStandardDebug/sip/resedit.jsp','resmessage_edit_link_window','height=600,width=1000,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=yes');
	//};
	
	getElement('user_manual').onclick = function(){
        window.open('/SIPStandardDebug/sip/user_manual.html','user_manual_window','top=0,left=0,toolbar=yes,menubar=no,scrollbars=yes, resizable=yes, location=no, status=no');
	};
	
	getElement('about_this_soft').onclick = function(){
        window.open('/SIPStandardDebug/sip/about_this_soft.html','about_this_soft_window','height=330,width=470,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
	};

	// 加入修改配置参数连接
	getElement('modify_config').onclick = function(){
        window.open('/SIPStandardDebug/config/config.jsp','modify_config_window','height=800,width=750,top=0,left=0,toolbar=no,menubar=no,scrollbars=yes, resizable=no,location=no, status=yes');
	};

	// 加入注册心跳检测连接
	getElement('status_detection').onclick = function(){
        window.open('/SIPStandardDebug/sip/status_detection/status_detection.jsp','status_detection_window','height=700,width=750,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=yes');
	};
	//2011年9月7日14:05:22 by liufeng 增加查询预置位、查询设备信息的菜单事件响应
	//getElement('device_location').onclick = function(){
    //    window.open('/SIPStandardDebug/WS/deviceLocation.jsp','device_location_window','top=0,left=0,toolbar=yes,menubar=no,scrollbars=yes, resizable=yes, location=no, status=no');
	//};
	
	//getElement('device_info').onclick = function(){
    //    window.open('/SIPStandardDebug/WS/deviceInfo.jsp','device_info_window','top=0,left=0,toolbar=yes,menubar=no,scrollbars=yes, resizable=yes, location=no, status=no');
	//};
}

// pushlet添加
function init() {
	//device_type = 'dvr';
	//document.getElementById("devicetype").value=device_type;
	//changeLinkStyleByDeviceType(device_type);
	
	menuchoice('othersystem');
	
	linkinit();

	initDHTML();
	p_join_listen('/comet/sip');
}

// pushlet添加
// onData method called by pushlet frame
function onData(pushletEvent) {
	var sip_message = pushletEvent.get('sip_message');
	var batchresponse_notify_message = pushletEvent.get('batchresponse_notify_message');
	var parsefailed_notify_message = pushletEvent.get('parsefailed_notify_message');
	var refresh_page = pushletEvent.get('refresh_page');
	//alert(refresh_page);
	if(sip_message != null)
	{
		
		/*var c_array = sip_message.split("|");
		var converted = "";
		
		for(var c in c_array)
		{
			converted = converted + String.fromCharCode(c_array[c]);
		}*/
		//alert(sip_message);
		var converted = "";
		sip_message = sip_message.replace(/fri0x0Afri/g, "\n");
		sip_message = sip_message.replace(/fri0x0Dfri/g, "\r");
		sip_message = sip_message.replace(/fri0x3Ffri/g, "?");
		sip_message = sip_message.replace(/fri0x22fri/g, "\"");
		converted = sip_message;
		//alert(converted);
		
		var current_text = document.getElementById("MessageTextAera_output").value;
		var all_text = current_text + '\n' + converted;
		
		// 进行MessageTextAera_output字符长度控制，长度过长会影响页面反应速度。
		if(all_text.length > 50000)
		{
			// alert(all_text.length);
			all_text = all_text.substring(29999, all_text.length);
			var i = all_text.indexOf('\n');
			all_text = all_text.substring(i, all_text.length);
			// alert(all_text.length);
		}
		
		document.getElementById("MessageTextAera_output").value= all_text;
	}
	else if(batchresponse_notify_message != null)
	{
		if(batchresponse_notify_message == "RecordInfo")	//打开文件记录查看页面
		{
			if(fileInfoResultWindow != null)
			{
				fileInfoResultWindow.close();
			}
			fileInfoResultWindow = window.open('/SIPStandardDebug/sip/resresult/ResResultPager.jsp?resultType=file','fileInfoResult_window','top=0,left=0,toolbar=no,menubar=no,scrollbars=yes, resizable=yes, location=no, status=no');
		}
		else if(batchresponse_notify_message == "Catalog")	//打开设备目录记录查看页面
		{
			if(catalogInfoResultWindow != null)
			{
				catalogInfoResultWindow.close();
			}
			catalogInfoResultWindow = window.open('/SIPStandardDebug/sip/resresult/ResResultPager.jsp?resultType=catalog','catalogInfoResult_window','top=0,left=0,toolbar=no,menubar=no,scrollbars=yes, resizable=yes, location=no, status=no');
		}
		else	//提示异常操作
		{
			
		}
	}
	else if(parsefailed_notify_message != null)
	{
		parsefailed_notify_message = parsefailed_notify_message.replace(/fri0x0Afri/g, "\n");
		parsefailed_notify_message = parsefailed_notify_message.replace(/fri0x0Dfri/g, "\r");
		parsefailed_notify_message = parsefailed_notify_message.replace(/fri0x3Ffri/g, "?");
		parsefailed_notify_message = parsefailed_notify_message.replace(/fri0x22fri/g, "\"");
		alert("解析消息体失败，请对照标准文档检查消息体是否正确。\n" + parsefailed_notify_message);
		
	}
	else if(refresh_page != null)
	{
		// refresh index.jsp in order to carry out new modifications
		//alert("refresh");
		window.location.reload();
		//refresh_page();
	}
	else
	{
		
	}
	
}
