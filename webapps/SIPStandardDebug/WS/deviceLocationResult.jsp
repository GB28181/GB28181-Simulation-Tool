<%@ page language="java" import="java.util.*,cn.com.fri.axy.common.def.*,cn.com.fri.axy.ws.*,cn.com.fri.axy.common.def.webservicedata.*,cn.com.fri.axy.common.util.*" pageEncoding="utf-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
   <title>WebService调试---查询预置位</title>
   <link rel="shortcut icon" type="../image/ico" href="images/logo.ico" />
	<link href="../index.css" rel="stylesheet" type="text/css" />
	<link href="../layout.css" rel="stylesheet" type="text/css" /> 
  </head>
  
  <body>
<%
  String WSAddr = request.getParameter("WSAddr");
  String userID = request.getParameter("userID");
  String foreignCode = request.getParameter("foreignCode");
  String deviceID = request.getParameter("deviceID");
  String locationID = request.getParameter("locationID");
  String item = request.getParameter("item");
  String order = request.getParameter("order");
  String start = request.getParameter("start");
  String limit = request.getParameter("limit");
  
  SysLogger.info("开始查询预置位信息");
  SysLogger.info("WSAddr = " + WSAddr);
  SysLogger.info("userID = " + userID);
  SysLogger.info("foreignCode = " + foreignCode);
  SysLogger.info("deviceID = " + deviceID);
  SysLogger.info("locationID = " + locationID);
  SysLogger.info("item = " + item);
  SysLogger.info("order = " + order);
  SysLogger.info("start = " + start);
  SysLogger.info("limit = " + limit);
  
  int iStart = 0;
  int iLimit = 5;
  String extSQL = "";
  
  List<SQLStringValueIret> lstSV = new ArrayList<SQLStringValueIret>();
  if(deviceID != null){
  		SQLStringValueIret sv = new SQLStringValueIret();
  		sv.setSqlstring("deviceid = ");
  		sv.setValue(deviceID);
  		lstSV.add(sv);
  }
  if(locationID != null){
  		SQLStringValueIret sv = new SQLStringValueIret();
  		sv.setSqlstring("location = ");
  		sv.setValue(locationID);
  		lstSV.add(sv);
  }
  
  if(item != null && !item.equals("1")){
  		extSQL = item + " " + order;
  }
  
  if(start != null && !start.equals("")){
  		iStart = Integer.parseInt(start);
  }
  if(limit != null && !limit.equals("")){
  		iLimit = Integer.parseInt(limit);
  }
 
  IForeignInfoGet get = WS.get(WSAddr);
  //DDevicelocationIret iret = get.getDeviceLocations(userID, foreignCode, lstSV, "", iStart, iLimit);
  DDevicelocationIret iret = get.getDeviceLocations("aa", "", lstSV, extSQL, 0, 5);
  List lst = iret.getLstRecords();
%>
	<div>
   	<div class="sendMsgTitle"><strong>预置位查询结果&nbsp;&nbsp;<A href=# onClick="jiavascript:history.back()">返回查询</A></strong></div>
		<table align=left bordercolor=black border="1" style="BORDER-COLLAPSE:collapse" cellspacing="0" cellpadding="5">
			<tr>
				<td>序号</td>
				<td>主键ID</td>
				<td>设备ID</td>
				<td>预置位号</td>
				<td>描述</td>
			</tr>
<%
	for(int i=0; i<lst.size(); i++){
		DDevicelocation element = (DDevicelocation)lst.get(i);
%>
			<tr>
				<td><%= i+1 %></td>
				<td><%=element.getId() %></td>
				<td><%=element.getDeviceid() %></td>
				<td><%=element.getLocation() %></td>
				<td><%=element.getDescription() %></td>
			</tr>
<%	}%>
		</table>
	</div>
  </body>
</html>
