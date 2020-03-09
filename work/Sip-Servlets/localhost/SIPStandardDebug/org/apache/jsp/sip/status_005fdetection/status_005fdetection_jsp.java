package org.apache.jsp.sip.status_005fdetection;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import cn.com.fri.axy.sip.init.SSDConfig;

public final class status_005fdetection_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("<title>在线状态逻辑检测</title>\r\n");
      out.write("<link href=\"status_detection.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("\r\n");
      out.write("<script type=\"text/javascript\" src=\"../../lib/jquery-1.4.4.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"../../lib/js-pushlet-client.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"../../assets/api.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"../../lib/jquery.dragndrop.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"../../lib/jquery.msgbox.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"../../lib/menu/jquerycssmenu.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"../../main.js\"></script>\r\n");
      out.write("\r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write("\tvar dvrId = '");
      out.print( SSDConfig.getInstance().getDVRID() );
      out.write("';\r\n");
      out.write("\tvar ipcId = '");
      out.print( SSDConfig.getInstance().getIPCID() );
      out.write("';\r\n");
      out.write("\tvar sysId = '");
      out.print( SSDConfig.getInstance().getOtherSystemID() );
      out.write("';\r\n");
      out.write("\tvar decId = '");
      out.print( SSDConfig.getInstance().getDecoderID() );
      out.write("';\r\n");
      out.write("\tvar idArray = new Array(dvrId, ipcId, decId, sysId);\r\n");
      out.write("</script>\r\n");
      out.write("\r\n");
      out.write("<script type=\"text/javascript\" src=\"status_detection.js\" charset=\"utf-8\"></script>\r\n");
      out.write("\r\n");
      out.write("</head>\r\n");
      out.write("\r\n");
      out.write("<body onLoad=\"init()\">\r\n");
      out.write("\r\n");
      out.write("<p class = \"status_title\">在线状态逻辑检测</p>\r\n");
      out.write("<div id = \"param_config\">\r\n");
      out.write("<table>\r\n");
      out.write("<tr><td class = \"status_th_paramname\">选择调测类型</td><td class = \"status_th_paramvalue\"><select id = \"detectType\" onchange=\"selectChanged()\"><option value=\"up\">上联调测</option><option value=\"down\">下联调测</option></select></td></tr>\r\n");
      out.write("<tr><td class = \"status_th_paramname\">选择调测设备</td><td class = \"status_th_paramvalue\"><select id = \"detectDevice\"><option value=\"0\">DVR/NVR设备</option><option value=\"1\">IPC设备</option><option value=\"2\">解码器设备</option><option value=\"3\">互联系统</option></select></td></tr>\r\n");
      out.write("<tr><td class = \"status_th_paramname\">心跳接受间隔（秒）</td><td class = \"status_th_paramvalue\"><input type=\"text\" id=\"HBInterval\" value=\"60\"></td></tr>\r\n");
      out.write("<tr><td class = \"status_th_paramname\">心跳连续超时次数</td><td class = \"status_th_paramvalue\"><input type=\"text\" id=\"HBExpire\" value=\"3\"></td></tr>\r\n");
      out.write("<tr><td class = \"status_th_paramname\">注册过期时间（秒）</td><td class = \"status_th_paramvalue\"><input type=\"text\" id=\"ZCExpire\" value=\"3600\"></td></tr>\r\n");
      out.write("</table>\r\n");
      out.write("<!-- <button id=\"start_detection_link\">开始检测</button> --> \r\n");
      out.write("<a href=\"#\" id=\"start_detection_link\">开始检测</a>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<br>\r\n");
      out.write("<hr>\r\n");
      out.write("\r\n");
      out.write("<p class = \"status_close\" id = \"current_status_label\">当前状态【未检测】</p>\r\n");
      out.write("\r\n");
      out.write("<div id = \"status_detect\" class = \"status_detect_div\">\r\n");
      out.write("</div>\r\n");
      out.write("<br><a href=\"#\" id=\"stop_detection_link\">停止检测</a>&nbsp;<a href=\"#\" id=\"clear_link\">清空消息</a><br>\r\n");
      out.write("\r\n");
      out.write("<!-- 加入消息侦听模块   -->\r\n");
      out.write("<script type=\"text/javascript\">p_embed()</script>\r\n");
      out.write("</body>\r\n");
      out.write("</html> ");
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
