<%@ page import="cn.com.fri.axy.sip.call.invite.*;" pageEncoding="UTF-8"%>

<%
	if (request.getMethod().equals("POST"))
	{
		request.setCharacterEncoding("UTF-8");
		String linkageID = request.getParameter("linkageID");
		System.out.println(linkageID);
		
		if (linkageID != null && linkageID.length() != 0)
		{
			InviteManager.getInstance().endInviteSession(linkageID);
			
		} else
		{
			out.println("some peramter is null");
		}
		
		response.sendRedirect("/SIPStandardDebug/sip/lookup.jsp");
		
	} else
	{
		//out.println("Only http POSTs are allowed to this page");
		response.sendRedirect("/SIPStandardDebug/index.jsp");
	}
%>
