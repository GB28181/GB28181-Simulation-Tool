<%@ page import="cn.com.fri.axy.sip.script.invite.*" pageEncoding="UTF-8"%>
<%@ page import="cn.com.fri.axy.common.util.*"%>

<html>
<head><title></title></head>
<body>

<%
try
{
	ScriptInviteManager.getInstance().endAllInvite();
}
catch(Exception e)
{
	SysLogger.printStackTrace(e);
}
	
%>

<br>send bye.

</body>
</html>