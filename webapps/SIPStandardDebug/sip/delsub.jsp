<%@ page import="java.util.*" pageEncoding="UTF-8"%>
<%@ page import="cn.com.fri.axy.sip.presence.*" %>
<%@ page import="cn.com.fri.axy.sip.presence.entity.*" %>
<%@ page import="cn.com.fri.axy.sip.presence.entity.catalog.*" %>
<%@ page import="cn.com.fri.axy.sip.presence.interfaces.*" %>


<%  
	if (request.getMethod().equals("POST"))
	{
		request.setCharacterEncoding("UTF-8");
		String sessionID = request.getParameter("sessionID");
		
		if (sessionID != null && sessionID.length() != 0)
		{
			Vector<StatusSubscription> list = CatalogAccessBean.bean.getSelfSubcription();
			for(int i = 0; i < list.size(); ++i){
				String tmp = list.get(i).getSipSession().getCallId();
				if(tmp.equalsIgnoreCase(sessionID)){
					String serverId = list.get(i).getTargetId();
					CatalogAccessBean.bean.stopSubscription(serverId,serverId);
					NotificationService.getNotificationService().removceNotification(sessionID);
					break;
				}
			}
			
			Vector<StatusSubscription> list2 = CatalogAccessBean.bean.getExternalSubcription();
			for(int i = 0; i < list2.size(); ++i){
				String tmp = list2.get(i).getSipSession().getCallId();
				if(tmp.equalsIgnoreCase(sessionID)){
					// REMOVE FROM MEMORY DIRECTLY!
					SubscriptionService.getSubscriptionService().removeSubscription(sessionID);
					break;
				}
			}
			
		} else
		{
			out.println("some peramter is null");
		}
		
		response.sendRedirect("/SIPStandardDebug/sip/lookup.jsp");
		
	} else
	{
		//out.println("Only http POSTs are allowed to this page");
		response.sendRedirect("/SIPStandardDebug/sip/lookup.jsp");
	}
%>
