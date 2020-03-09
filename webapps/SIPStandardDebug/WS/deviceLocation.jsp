<%@ page language="java" pageEncoding="utf-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   <title>WebService调试---查询预置位</title>
   <link rel="shortcut icon" type="../image/ico" href="images/logo.ico" />
	<link href="../index.css" rel="stylesheet" type="text/css" />
	<link href="../layout.css" rel="stylesheet" type="text/css" /> 
	<link href="../lib/jquery.msgbox.css" rel="stylesheet" type="text/css" />
	<link href="../lib/menu/jquerycssmenu.css" rel="stylesheet" type="text/css" />
	<style>
		#formItem {padding:2px;float:left;clear:left}
	</style>
	<script type="text/javascript" src="../lib/jquery-1.4.4.js"></script>
	<script type="text/javascript" src="../assets/api.js"></script>
	<script type="text/javascript" src="../lib/jquery.dragndrop.js"></script>
	<script type="text/javascript" src="../lib/jquery.msgbox.js"></script>
	<script>
		function doSearch(){
			if($('#WSAddr').val() == ""){	
				$.msgbox("webService地址不能为空！");
				return;
			}
			$("#deviceLocationSubmit").submit();
		}
		function doWSDL(){
			if($('#WSAddr').val() == ""){	
				$.msgbox("webService地址不能为空！");
				return;
			}
			window.open($('#WSAddr').val()+'?WSDL','','top=0,left=0,toolbar=yes,menubar=no,scrollbars=yes, resizable=yes, location=no, status=no');
		}
	</script>
  </head>
  
  <body>
	  <div class="sendMsgTitle"><strong>预置位webService调测</strong></div>
	  </br>
	  <div id="" style="padding:5px;float:left" >
			<form method="post" action="/SIPStandardDebug/WS/deviceLocationResult.jsp" id="deviceLocationSubmit">
				<div id="formItem">
					<label>webService地址：</label>
					<input type="text" size=80 name="WSAddr" id="WSAddr" value="http://192.168.3.200:7001/PMPlatForm/services/ForeignInfoGet">
				</div>
				<div id="formItem">
					<label>用户ID：</label>
					<input type="text" name="userID" id="userID">
				</div>
				<div id="formItem">
					<label>设备ID：</label>
					<input type="text" name="deviceID" id="deviceID">
				</div>
				<div id="formItem">
					<label>预置位号：</label>
					<input type="text" name="locationID" id="locationID">
				</div>
				<div id="formItem">
					<label>排序字段：</label>
					<SELECT NAME="item" SIZE="1">
						<OPTION VALUE="1" SELECTED>无
						<OPTION VALUE="2">设备ID
						<OPTION VALUE="3">预置位号
					</SELECT>
					<SELECT NAME="order" SIZE="1">
						<OPTION VALUE="1" SELECTED>升序
						<OPTION VALUE="2">降序
					</SELECT>
				</div>
				<div id="formItem">
					<label>起始位置：</label>
					<input type="text" name="start" id="start" value="0">
				</div>
				<div id="formItem">
					<label>每页数量：</label>
					<input type="text" name="limit" id="limit" value="10">
				</div>
				<div id="formItem">
					<button onclick="javascript:doWSDL()">查看WSDL</button>
					&nbsp;
					<button onclick="javascript:doSearch()">提交请求</button>
				</div>
			</form>
	  </div>
  </body>
</html>
