<%@ page import="cn.com.fri.axy.sip.script.invite.*"%>
<%@ page import="java.util.*"%>
<%@ page language="java" pageEncoding="GB2312"%>

<html>
<head><title></title></head>
<body>

<table border="1" cellspacing='0' cellpadding='3'>
<tr><th>建立外域三方连接情况</th></tr>
<%
for(ScriptInviteHandler handler : ScriptInviteManager.getInstance().getAllInviteSession().values()){
	out.println("<tr><td>" + handler.getLinkageID() + "</td><td>" + handler.getState() + "</td></tr>");
}
%>

</table>

<br>goto <a href="scriptSendBye.jsp" target="_self" title="scriptSendBye.jsp">scriptSendBye.jsp</a> to end all link. <br>


</body>
</html>