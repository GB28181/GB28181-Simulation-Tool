package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import java.util.*;
import cn.com.fri.axy.common.SentinelKeyManager;
import cn.com.fri.axy.sip.init.SSDConfig;
import cn.com.fri.axy.sip.init.AuthManager;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.AnnotationProcessor _jsp_annotationprocessor;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_annotationprocessor = (org.apache.AnnotationProcessor) getServletConfig().getServletContext().getAttribute(org.apache.AnnotationProcessor.class.getName());
  }

  public void _jspDestroy() {
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");

/////////////////////////////////////////////////////////////
///////////////验证License信息//////////////////////
	   //初始化时进行license检测，检测失败不启动服务
		if(new AuthManager().validate())
		{
			System.out.println("********************************************");
			System.out.println("*             License检测通过             *");
			System.out.println("********************************************");
		}
		else
		{
			System.out.println("********************************************");
			System.out.println("*License检测失败，请申请License后再进行调测*");
			System.out.println("********************************************");
			response.sendRedirect("error.html");
		}
/////////////////////////////////////////////////////////////
 
      out.write("\r\n");
      out.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\r\n");
      out.write("\"http://www.w3.org/TR/html4/loose.dtd\">\r\n");
      out.write("<html>\r\n");
      out.write("  <head>\r\n");
      out.write("    <title>SPVMN视频监控联网现场检测工具软件</title>\r\n");
      out.write("    <link rel=\"shortcut icon\" type=\"image/ico\" href=\"images/logo.ico\" />\r\n");
      out.write("    <link href=\"index.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("    <link href=\"layout.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("    <link href=\"lib/jquery.msgbox.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("\t<link href=\"lib/menu/jquerycssmenu.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("\t<!--[if lte IE 7]>\r\n");
      out.write("\t<style type=\"text/css\">\r\n");
      out.write("\thtml .jquerycssmenu{height: 1%;} /*Holly Hack for IE7 and below*/\r\n");
      out.write("\t</style>\r\n");
      out.write("\t<![endif]-->\r\n");
      out.write("    \r\n");
      out.write("    <script type=\"text/javascript\" src=\"lib/jquery-1.4.4.js\"></script>\r\n");
      out.write("    <script type=\"text/javascript\" src=\"lib/js-pushlet-client.js\"></script>\r\n");
      out.write("    <script type=\"text/javascript\" src=\"assets/api.js\"></script>\r\n");
      out.write("    <script type=\"text/javascript\" src=\"lib/jquery.dragndrop.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"lib/jquery.msgbox.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"lib/menu/jquerycssmenu.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"main.js\"></script>\r\n");
      out.write("\t\r\n");
      out.write("  \t<script type=\"text/javascript\">\r\n");
      out.write("\t/**\r\n");
      out.write("\t * index.jsp中的全局变量\r\n");
      out.write("\t */\r\n");
      out.write("\tvar sipserverID = '");
      out.print( SSDConfig.getInstance().getSipServerID() );
      out.write("';\r\n");
      out.write("\tvar sipserverIP = '");
      out.print( SSDConfig.getInstance().getSIPServerIP() );
      out.write("';\r\n");
      out.write("\tvar sipserverPort = '");
      out.print( SSDConfig.getInstance().getSIPServerPort() );
      out.write("';\r\n");
      out.write("\tvar sipserverPassword = '");
      out.print( SSDConfig.getInstance().getSIPServerPassword() );
      out.write("';\r\n");
      out.write("\tvar domainName = '");
      out.print( SSDConfig.getInstance().getDomainName() );
      out.write("';\r\n");
      out.write("\tvar dvrID = '");
      out.print( SSDConfig.getInstance().getDVRID() );
      out.write("';\r\n");
      out.write("\tvar cameraID = '");
      out.print( SSDConfig.getInstance().getDVRCameraID().firstElement() );
      out.write("';\r\n");
      out.write("\tvar alarmID = '");
      out.print( SSDConfig.getInstance().getDVRAlarmID().firstElement() );
      out.write("';\r\n");
      out.write("\tvar ipcID = '");
      out.print( SSDConfig.getInstance().getIPCID() );
      out.write("';\r\n");
      out.write("\tvar ipcalarmID = '");
      out.print( SSDConfig.getInstance().getIPCAlarmID().firstElement() );
      out.write("';\r\n");
      out.write("\tvar decoderID = '");
      out.print( SSDConfig.getInstance().getDecoderID() );
      out.write("';\r\n");
      out.write("\tvar monitorID = '");
      out.print( SSDConfig.getInstance().getDecoderMonitorID().firstElement() );
      out.write("';\r\n");
      out.write("\tvar othersystemID = '");
      out.print( SSDConfig.getInstance().getOtherSystemID() );
      out.write("';\r\n");
      out.write("\tvar othersystemcameradeviceID = '");
      out.print( SSDConfig.getInstance().getOtherSystemCameraDeviceID() );
      out.write("';\r\n");
      out.write("\tvar othersystemalarmdeviceID = '");
      out.print( SSDConfig.getInstance().getOtherSystemAlarmDeviceID() );
      out.write("';\r\n");
      out.write("\tvar othersystemaudiodeviceID = '");
      out.print( SSDConfig.getInstance().getOtherSystemAudioDeviceID() );
      out.write("';\r\n");
      out.write("\tvar mediaDestID = '");
      out.print( SSDConfig.getInstance().getMediaDestID() );
      out.write("';\r\n");
      out.write("\tvar mediaDestIP = '");
      out.print( SSDConfig.getInstance().getMediaDestIP() );
      out.write("';\r\n");
      out.write("\tvar mediaDestPort = '");
      out.print( SSDConfig.getInstance().getMediaDestPort() );
      out.write("';\r\n");
      out.write("\tvar historyTime = '");
      out.print( SSDConfig.getInstance().getHistoryTime() );
      out.write("';\r\n");
      out.write("\t\r\n");
      out.write("\tvar sipserverBroadcastDeviceID = '");
      out.print( SSDConfig.getInstance().getBroadcastSourceID() );
      out.write("';\r\n");
      out.write("\t\r\n");
      out.write("\t// var fileQueryTime\r\n");
      out.write("\tvar device_type = 'othersystem';\r\n");
      out.write("\t// 初始化消息集合，其中保存用户最新编辑后发送的消息，每类设备每类消息保存一条\r\n");
      out.write("\tvar message_map = new Map();\r\n");
      out.write("  \t</script>\r\n");
      out.write("  \t<script type=\"text/javascript\" src=\"index.js\" charset=\"utf-8\"></script>\r\n");
      out.write("  \t\r\n");
      out.write("  </head>\r\n");
      out.write("\r\n");
      out.write("  <body onLoad=\"init()\" >\r\n");
      out.write("  <!--页面层容器-->\r\n");
      out.write("  <div id=\"container\">\r\n");
      out.write("  \t<!--页面头部-->\r\n");
      out.write("\t<div id=\"header\">\r\n");
      out.write("\t\t<div id=\"banner\" >\r\n");
      out.write("\t\t\t<div id=\"banner-left\">\r\n");
      out.write("\t\t\t\t<img src=\"images/bar_01.gif\"/>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div id=\"banner-right\">\r\n");
      out.write("\t\t\t\t<img src=\"images/bar_03_1.gif\"/>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t\r\n");
      out.write("\t\t<div id=\"menu\">\r\n");
      out.write("\t\t<div id=\"myjquerymenu\" class=\"jquerycssmenu\">\r\n");
      out.write("\t\t\t<ul>\r\n");
      out.write("\t\t\t\t<li id=\"device_type_choice\"><a id=\"device_type_choice_a\" href=\"#\">调测设备类型</a>\r\n");
      out.write("\t\t\t\t\t<ul>\r\n");
      out.write("  \t\t\t\t\t\t<li><a href=\"#\" onclick=\"menuchoice('othersystem')\">互联系统</a></li>\r\n");
      out.write("  \t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t<li><a href=\"#\">调测辅助页面</a>\r\n");
      out.write("  \t\t\t\t\t<ul>\r\n");
      out.write("  \t\t\t\t\t\t<li><a href=\"#\" id=\"play_viedo\">视频播放</a></li>\r\n");
      out.write("  \t\t\t\t\t\t<li><a href=\"#\" id=\"gbmedia_viedo\">媒体参数检测</a></li>\r\n");
      out.write("  \t\t\t\t\t\t<li><a href=\"#\" id=\"lookup_link\">链路管理</a></li>\r\n");
      out.write("\t\t\t\t\t\t<li><a href=\"#\" id=\"modify_config\">参数配置</a></li>\r\n");
      out.write("  \t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t<li><a href=\"#\">流程组合测试</a>\r\n");
      out.write("  \t\t\t\t\t<ul>\r\n");
      out.write("  \t\t\t\t\t\t<li><a href=\"#\" id=\"status_detection\">在线状态逻辑检测</a></li>\r\n");
      out.write("  \t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t</li>\r\n");
      out.write("\t\t\t\t<!--<li><a href=\"#\">webService调测页面</a>\r\n");
      out.write("  \t\t\t\t\t<ul>\r\n");
      out.write("  \t\t\t\t\t\t<li><a href=\"#\" id=\"device_location\">预置位查询</a></li>\r\n");
      out.write("  \t\t\t\t\t\t<li><a href=\"#\" id=\"device_info\">设备信息查询</a></li>\r\n");
      out.write("  \t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t</li>-->\r\n");
      out.write("\t\t\t\t<li><a href=\"#\">帮助</a>\r\n");
      out.write("\t\t\t\t\t<ul>\r\n");
      out.write("  \t\t\t\t\t\t<li><a href=\"#\" id=\"user_manual\">使用手册</a></li>\r\n");
      out.write("  \t\t\t\t\t\t<li><a href=\"#\" id=\"about_this_soft\">关于SPVMN视频监控联网现场检测工具软件</a></li>\r\n");
      out.write("  \t\t\t\t\t</ul>\r\n");
      out.write("\t\t\t\t</li>\r\n");
      out.write("\t\t\t</ul>\r\n");
      out.write("\t\t\t<br style=\"clear: left\" />\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div id=\"info\">\r\n");
      out.write("\t\t\t当前调测设备类型:互联系统\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("  \t</div>\r\n");
      out.write("\t\t\r\n");
      out.write("\t<!--页面主体-->\r\n");
      out.write("\t<div id=\"pagebody\">\r\n");
      out.write("\r\n");
      out.write("  \t\t\t<div id=\"layer2\">\r\n");
      out.write("\t\t\t\t<!--左侧内容-->\r\n");
      out.write("\t\t\t\t<div id=\"layer2_left\">\r\n");
      out.write("\t\t\t\t\t<div id=\"layer2_left_left\">\r\n");
      out.write("\t\t\t\t\t<dl class=\"tbox\">\r\n");
      out.write("        \t\t\t\t<dt><strong>实时点播相关命令</strong></dt>\r\n");
      out.write("        \t\t\t\t<dd>\r\n");
      out.write("          \t\t\t\t\t<ul class=\"d1 ico3\">\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"RealTime\" class=\"ndvr nipc ndecoder nothersystem\" href=\"#\" onclick=\"choice('RealTime')\">实时点播</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"PTZ_Left\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('PTZ_Left')\">向左</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"PTZ_Right\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('PTZ_Right')\">向右</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"PTZ_Up\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('PTZ_Up')\">向上</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"PTZ_Down\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('PTZ_Down')\">向下</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"PTZ_ZoomIn\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('PTZ_ZoomIn')\">放大</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"PTZ_ZoomOut\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('PTZ_ZoomOut')\">缩小</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"PTZ_Stop\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('PTZ_Stop')\">停止遥控</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"Broadcast\" class=\"dvr ipc decoder nothersystem\" href=\"#\" onclick=\"choice('Broadcast')\">语音广播</a></li>\r\n");
      out.write("          \t\t\t\t\t</ul>\r\n");
      out.write("        \t\t\t\t</dd>\r\n");
      out.write("      \t\t\t\t</dl>\r\n");
      out.write("      \t\t\t\t</div>\r\n");
      out.write("      \t\t\t\t<div id=\"layer2_left_right\">\r\n");
      out.write("\t\t\t\t\t<dl class=\"tbox\">\r\n");
      out.write("        \t\t\t\t<dt><strong>历史回放相关命令</strong></dt>\r\n");
      out.write("        \t\t\t\t<dd>\r\n");
      out.write("          \t\t\t\t\t<ul class=\"d1 ico3\">\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"History\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('History')\">回放</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"Download\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('Download')\">下载</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"PlaybackControl_Play\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('PlaybackControl_Play')\">播放</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"PlaybackControl_Pause\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('PlaybackControl_Pause')\">暂停</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"PlaybackControl_Fast\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('PlaybackControl_Fast')\">快放</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"PlaybackControl_Slow\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('PlaybackControl_Slow')\">慢放</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"PlaybackControl_Drag\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('PlaybackControl_Drag')\">随机拖放</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"StartRecord\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('StartRecord')\">开始手动录像</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"StopRecord\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('StopRecord')\">停止手动录像</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"FileQuery\" class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('FileQuery')\">录像文件检索</a></li>\r\n");
      out.write("          \t\t\t\t\t</ul>\r\n");
      out.write("        \t\t\t\t</dd>\r\n");
      out.write("      \t\t\t\t</dl>\r\n");
      out.write("\t\t\t\t\t</div> \r\n");
      out.write("\t\t\t\t</div> \r\n");
      out.write("\t\t\t\t<!--右侧内容-->\r\n");
      out.write("\t\t\t\t<div id=\"layer2_right\">\r\n");
      out.write("\t\t\t\t\t<div id=\"layer2_right_left\">\r\n");
      out.write("\t\t\t\t\t<dl class=\"tbox\">\r\n");
      out.write("        \t\t\t\t<dt><strong>报警相关命令</strong></dt>\r\n");
      out.write("        \t\t\t\t<dd>\r\n");
      out.write("          \t\t\t\t\t<ul class=\"d1 ico3\">\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"SetGuard\"  class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('SetGuard')\">布防</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"Alarm\"  class=\"dvr ipc decoder nothersystem\" href=\"#\" onclick=\"choice('Alarm')\">报警</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"ResetGuard\"  class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('ResetGuard')\">撤防</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"ResetAlarm\"  class=\"ndvr nipc decoder nothersystem\" href=\"#\" onclick=\"choice('ResetAlarm')\">报警复位</a></li>\r\n");
      out.write("          \t\t\t\t\t</ul>\r\n");
      out.write("        \t\t\t\t</dd>\r\n");
      out.write("      \t\t\t\t</dl>\r\n");
      out.write("      \t\t\t\t</div>\r\n");
      out.write("      \t\t\t\t<div id=\"layer2_right_right\">\r\n");
      out.write("\t\t\t\t\t<dl class=\"tbox\">\r\n");
      out.write("        \t\t\t\t<dt><strong>其他命令</strong></dt>\r\n");
      out.write("        \t\t\t\t<dd>\r\n");
      out.write("          \t\t\t\t\t<ul class=\"d1 ico3\">\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"DeviceCatalog\" class=\"ndvr nipc ndecoder nothersystem\" href=\"#\" onclick=\"choice('DeviceCatalog')\">设备目录查询</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"DeviceInfo\" class=\"ndvr nipc ndecoder nothersystem\" href=\"#\" onclick=\"choice('DeviceInfo')\">设备信息查询</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"DeviceStatus\" class=\"ndvr nipc ndecoder nothersystem\" href=\"#\" onclick=\"choice('DeviceStatus')\">设备状态查询</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"Boot\" class=\"ndvr nipc ndecoder nothersystem\" href=\"#\" onclick=\"choice('Boot')\">设备远程启动</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"Register\" class=\"dvr ipc decoder nothersystem\" href=\"#\" onclick=\"choice('Register')\">注册/注销</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"Keepalive\" class=\"dvr ipc decoder nothersystem\" href=\"#\" onclick=\"choice('Keepalive')\">心跳</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"CatalogSubscribe\" class=\"dvr ipc decoder nothersystem\" href=\"#\" onclick=\"choice('CatalogSubscribe')\">目录订阅</a></li>\r\n");
      out.write("          \t\t\t\t\t\t<li><a id=\"CatalogNotify\" class=\"dvr ipc decoder nothersystem\" href=\"#\" onclick=\"choice('CatalogNotify')\">目录通知</a></li>\r\n");
      out.write("          \t\t\t\t\t</ul>\r\n");
      out.write("        \t\t\t\t</dd>\r\n");
      out.write("      \t\t\t\t</dl>\r\n");
      out.write("      \t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t\t<div class=\"clear\">\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t\t<div id=\"layer3\">\r\n");
      out.write("  \t\t\t\t<div id=\"layer3_left\" style=\"padding:2px;\">\r\n");
      out.write("  \t\t\t\t\t<form method=\"post\" action=\"/SIPStandardDebug/sip/sendmessage.jsp\" name=\"SSDForm\" id=\"SSDForm\">\r\n");
      out.write("  \t\t\t\t\t\t<!-- 调测设备类型：  -->\r\n");
      out.write("  \t\t\t\t\t\t<input type=\"hidden\" name=\"devicetype\" id=\"devicetype\">\r\n");
      out.write("  \t\t\t\t\t\t<!-- 输入设备ID号：  -->\r\n");
      out.write("  \t\t\t\t\t\t<input type=\"hidden\" name=\"deviceid\" id=\"deviceid\">\r\n");
      out.write("  \t\t\t\t\t\t<!-- 发送消息类型：  -->\r\n");
      out.write("  \t\t\t\t\t\t<input type=\"hidden\" name=\"MessageParam\" id=\"MessageParam\">\r\n");
      out.write("  \t\t\t\t\t\t<div class=\"sendMsgTitle\"><strong>发送消息编辑</strong></div>\r\n");
      out.write("  \t\t\t\t\t\t<textarea cols=\"63\" rows=\"16\" name=\"MessageTextAera\" id=\"MessageTextAera\" wrap=\"off\"></textarea>\r\n");
      out.write("  \t\t\t\t\t</form>\r\n");
      out.write("  \t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t<!-- 手工输入互联系统点播设备ID  -->\r\n");
      out.write("\t\t\t\t\t<div id=\"othersystem_deviceid_div\">\r\n");
      out.write("\t\t\t\t\t\t互联系统目标系统/设备ID:<input type=\"text\" style=\"width:150px;\" name=\"othersystem_deviceid\" id=\"othersystem_deviceid\">\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("  \t\t\t\t\t\r\n");
      out.write("  \t\t\t\t\t<a href=\"#\" id=\"SSDForm_link\" style=\"float:right;\"><img src=\"images/sendMsg.png\" border=\"0\" /></a>\r\n");
      out.write("  \t\t\t\t\t\r\n");
      out.write("  \t\t\t\t</div>\r\n");
      out.write("  \t\t\t\t<div id=\"layer3_right\" style=\"padding:2px;\">\r\n");
      out.write("  \t\t\t\t\t<div class=\"sendMsgTitle\"><strong>消息输出</strong></div>\r\n");
      out.write("  \t\t\t\t\t<textarea cols=\"63\" rows=\"16\" name=\"MessageTextAera_output\" id=\"MessageTextAera_output\" wrap=\"off\"></textarea>\r\n");
      out.write("  \t\t\t\t\t<a href=\"#\" id=\"ClearMessage_link\" style=\"float:right;\"><img src=\"images/clearMsg.png\" border=\"0\" /></a>\r\n");
      out.write("  \t\t\t\t</div>\r\n");
      out.write("  \t\t\t</div>\r\n");
      out.write("  \t\r\n");
      out.write("  \t</div>\r\n");
      out.write("\t\t\r\n");
      out.write("\r\n");
      out.write("\t<!--页面底部-->\r\n");
      out.write("\t<div class=\"clear\">\r\n");
      out.write("\t</div>\r\n");
      out.write("\t\r\n");
      out.write("\t<div id=\"footer\" align=\"center\">\r\n");
      out.write("\t\tCopyright © 2010-2014 公安部第一研究所/北京中盾安全技术开发公司  版权所有\r\n");
      out.write("\t\t<br>版本 1.0.0.5\r\n");
      out.write("\t</div> \r\n");
      out.write("  \r\n");
      out.write("  </div>\r\n");
      out.write("  \r\n");
      out.write("  \r\n");
      out.write("<!-- Embed pushlet in page -->\r\n");
      out.write("<script type=\"text/javascript\">p_embed()</script>\r\n");
      out.write("\r\n");
      out.write("  </body>\r\n");
      out.write("</html>\r\n");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
