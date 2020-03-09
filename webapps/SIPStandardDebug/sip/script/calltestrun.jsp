<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="cn.com.fri.axy.sip.script.*"%>


<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>calltestrun</title>

  </head>
  
  <body>
  <%
	String filepath = request.getParameter("filepath");
	new CallEngine().launch(filepath);
  
  %>
  <h1><strong>
    starting</strong>
    </h1><br>goto <a href="scriptlookup.jsp" target="_self" title="scriptlookup.jsp">scriptlookup.jsp</a> to see result. <br>
  </body>
</html>
