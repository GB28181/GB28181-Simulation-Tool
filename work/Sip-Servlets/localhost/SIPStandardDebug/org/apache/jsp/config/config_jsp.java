package org.apache.jsp.config;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class config_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList(1);
    _jspx_dependants.add("/WEB-INF/showtable.tld");
  }

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
      out.write("<html>\r\n");
      out.write("<head><title>配置管理</title>\r\n");
      out.write("<link href=\"../index.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("<link href=\"../table.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("<link href=\"config.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("<link rel=\"shortcut icon\" type=\"image/ico\" href=\"images/logo.ico\" />\r\n");
      out.write("\t\r\n");
      out.write("\t\r\n");
      out.write("<script type=\"text/javascript\" src=\"../lib/jquery-1.4.4.js\"></script>\r\n");
      out.write("    <script type=\"text/javascript\" src=\"../lib/js-pushlet-client.js\"></script>\r\n");
      out.write("    <script type=\"text/javascript\" src=\"../assets/api.js\"></script>\r\n");
      out.write("    <script type=\"text/javascript\" src=\"../lib/jquery.dragndrop.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"../lib/jquery.msgbox.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"../lib/menu/jquerycssmenu.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"../main.js\"></script>\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"config.js\"></script>\t\r\n");
      out.write("</head>\r\n");
      out.write("<body onLoad=\"init()\">\r\n");
      out.write("<!--页面层容器-->\r\n");
      out.write("  <div id=\"container\">\r\n");
      out.write("  \t<!--页面头部-->\r\n");
      out.write("\t<div id=\"header\">\r\n");
      out.write("\t\t\r\n");
      out.write("  \t</div>\r\n");
      out.write("\t\t\r\n");
      out.write("\t<!--页面主体-->\r\n");
      out.write("\t<div id=\"pagebody\">\r\n");
      out.write("\t\t<!--调测软件SIP参数配置-->\r\n");
      out.write("\t\t<div id=\"config_layer1\" class=\"config_layer\">\r\n");
      out.write("\t\t\t<b>调测软件SIP参数配置</b>\r\n");
      out.write("\t\t\t<br/>\r\n");
      out.write("\t\t\t<table id=\"sipserver_config_table\" class=\"config_table\" border=\"1\" cellspacing='0' cellpadding='1'>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<th class=\"config_th_paramname\">参数名称</th>\r\n");
      out.write("\t\t\t\t\t<th class=\"config_th_paramvalue\">参数值</th>\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">调测服务器域名</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipserver_domainname\" id=\"sipserver_domainname\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">调测服务器ID</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipserver_id\" id=\"sipserver_id\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">调测服务器IP地址</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipserver_ip\" id=\"sipserver_ip\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">调测服务器SIP端口</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipserver_port\" id=\"sipserver_port\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">调测服务器对外注册密码</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipserver_password\" id=\"sipserver_password\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">媒体接收方IP</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"media_dest_ip\" id=\"media_dest_ip\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">媒体接收方端口</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"media_dest_port\" id=\"media_dest_port\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">多响应消息超时时间（秒）</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"large_msg_timeout\" id=\"large_msg_timeout\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">历史回放开始时间，格式为yyyyMMddhhmmss</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"history_starttime\" id=\"history_starttime\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">历史回放结束时间，格式为yyyyMMddhhmmss</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"history_endtime\" id=\"history_endtime\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">目录查询、文件查询响应消息传输层协议</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><select name=\"protocal\" id=\"protocal\"><option value=\"0\">TCP</option><option value=\"1\">UDP</option></select></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">是否模拟上级平台发送消息</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><select name=\"simulate\" id=\"simulate\"><option value=\"0\">是</option><option value=\"1\">否</option></select></td>\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">模拟上级平台ID</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"simulate_id\" id=\"simulate_id\"></td>\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t</table>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<!--待调测DVR/NVR设备参数配置-->\r\n");
      out.write("\t\t<div id=\"config_layer2\" class=\"config_layer\">\r\n");
      out.write("\t\t\t<b>待调测DVR/NVR设备参数配置</b>\r\n");
      out.write("\t\t\t<br/>\r\n");
      out.write("\t\t\t<table id=\"dvrnvr_config_table\" class=\"config_table\" border=\"1\" cellspacing='0' cellpadding='1'>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<th class=\"config_th_paramname\">参数名称</th>\r\n");
      out.write("\t\t\t\t\t<th class=\"config_th_paramvalue\">参数值</th>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">DVR/NVR设备ID</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_DVR_id\" id=\"sipdevice_DVR_id\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">DVR/NVR设备注册密码</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_DVR_password\" id=\"sipdevice_DVR_password\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">DVR/NVR所带通道ID</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_DVR_camera_id\" id=\"sipdevice_DVR_camera_id\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">DVR/NVR所带报警输入ID</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_DVR_alarm_id\" id=\"sipdevice_DVR_alarm_id\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t</table>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<!---待调测IPC设备参数配置-->\r\n");
      out.write("\t\t<div id=\"config_layer3\" class=\"config_layer\">\r\n");
      out.write("\t\t\t<b>待调测IPC设备参数配置</b>\r\n");
      out.write("\t\t\t<table id=\"ipc_config_table\" class=\"config_table\" border=\"1\" cellspacing='0' cellpadding='1'>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<th class=\"config_th_paramname\">参数名称</th>\r\n");
      out.write("\t\t\t\t\t<th class=\"config_th_paramvalue\">参数值</th>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">IPC设备ID</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_IPC_id\" id=\"sipdevice_IPC_id\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">IPC设备注册密码</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_IPC_password\" id=\"sipdevice_IPC_password\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">IPC所带报警输入ID</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_IPC_alarm_id\" id=\"sipdevice_IPC_alarm_id\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t</table>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<!--待调测解码器设备参数配置-->\r\n");
      out.write("\t\t<div id=\"config_layer4\" class=\"config_layer\">\r\n");
      out.write("\t\t\t<b>待调测解码器设备参数配置</b>\r\n");
      out.write("\t\t\t<br/>\r\n");
      out.write("\t\t\t<table id=\"decoder_config_table\" class=\"config_table\" border=\"1\" cellspacing='0' cellpadding='1'>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<th class=\"config_th_paramname\">参数名称</th>\r\n");
      out.write("\t\t\t\t\t<th class=\"config_th_paramvalue\">参数值</th>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">解码器设备ID</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_decoder_id\" id=\"sipdevice_decoder_id\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">解码器设备注册密码</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_decoder_password\" id=\"sipdevice_decoder_password\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">解码器所带监视器ID</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_decoder_monitor_id\" id=\"sipdevice_decoder_monitor_id\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t</table>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<!--待调测外部系统参数配置-->\r\n");
      out.write("\t\t<div id=\"config_layer5\" class=\"config_layer\">\r\n");
      out.write("\t\t\t<b>待调测系统参数配置</b>\r\n");
      out.write("\t\t\t<table id=\"othersystem_config_table\" class=\"config_table\" border=\"1\" cellspacing='0' cellpadding='1'>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<th class=\"config_th_paramname\">参数名称</th>\r\n");
      out.write("\t\t\t\t\t<th class=\"config_th_paramvalue\">参数值</th>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">待测系统ID</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_othersystem_id\" id=\"sipdevice_othersystem_id\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">待测系统密码</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_othersystem_password\" id=\"sipdevice_othersystem_password\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">待测系统视频设备ID</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_othersystem_camera_id\" id=\"sipdevice_othersystem_camera_id\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">待测系统报警设备ID</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_othersystem_alarm_id\" id=\"sipdevice_othersystem_alarm_id\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">待测系统语音输出设备ID</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_othersystem_audiooutput_id\" id=\"sipdevice_othersystem_audiooutput_id\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">待测系统IP地址</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_othersystem_ip\" id=\"sipdevice_othersystem_ip\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t<tr>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramname\">待测系统SIP端口</td>\r\n");
      out.write("\t\t\t\t\t<td class=\"config_td_paramvalue\"><input type=\"text\" class=\"config_input\" name=\"sipdevice_othersystem_port\" id=\"sipdevice_othersystem_port\"></td>\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("\t\t\t\t</tr>\r\n");
      out.write("\t\t\t</table>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div id=\"config_layer6\" class=\"config_layer\">\r\n");
      out.write("\t\t\t<!--参数配置生效-->\r\n");
      out.write("\t\t\t<a href=\"#\" id=\"apply_link\" onclick=\"apply_config()\" style=\"float:left;\"><img src=\"../images/save_changes.png\" border=\"0\" /></a>\r\n");
      out.write("\t\t\t<!--读取当前参数配置-->\r\n");
      out.write("\t\t\t<a href=\"#\" id=\"read_current_link\" onclick=\"read_current_config()\" style=\"float:left;\"><img src=\"../images/load_config.png\" border=\"0\" /></a>\r\n");
      out.write("\t\t\t<!--恢复默认参数配置-->\r\n");
      out.write("\t\t\t<a href=\"#\" id=\"recovery_link\" onclick=\"recovery_config()\" style=\"float:left;\"><img src=\"../images/rollback.png\" border=\"0\" /></a>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<!--页面底部-->\r\n");
      out.write("\t<div id=\"footer\">\r\n");
      out.write("\t\t\r\n");
      out.write("\t</div> \r\n");
      out.write("  \r\n");
      out.write("  </div>\r\n");
      out.write("</body>\r\n");
      out.write("</html>");
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
