package org.apache.jsp.sip;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class lookup_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList(1);
    _jspx_dependants.add("/WEB-INF/showtable.tld");
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fshowtable_005flookup_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.AnnotationProcessor _jsp_annotationprocessor;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fshowtable_005flookup_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_annotationprocessor = (org.apache.AnnotationProcessor) getServletConfig().getServletContext().getAttribute(org.apache.AnnotationProcessor.class.getName());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fshowtable_005flookup_005fnobody.release();
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
      out.write("<head><title>链路管理</title>\r\n");
      out.write("<link href=\"../index.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("<link href=\"../table.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("<link rel=\"shortcut icon\" type=\"image/ico\" href=\"images/logo.ico\" />\r\n");
      out.write("\t<script type=\"text/javascript\">\r\n");
      out.write("\t\r\n");
      out.write("\tfunction $(id){\r\n");
      out.write("    \tif(document.getElementById){\r\n");
      out.write("        \treturn document.getElementById(id);\r\n");
      out.write("    \t}\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\tfunction delink(linkid){\r\n");
      out.write("\t\t\r\n");
      out.write("    \tvar formObj = $('sendBye_' + linkid);\r\n");
      out.write("        formObj.submit();\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("\tfunction delsub(key){\r\n");
      out.write("\t\t\r\n");
      out.write("    \tvar formObj = $('delSub_' + key);\r\n");
      out.write("        formObj.submit();\r\n");
      out.write("\t}\r\n");
      out.write("\t\r\n");
      out.write("  \t</script>\r\n");
      out.write("  \t\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("<!--页面层容器-->\r\n");
      out.write("  <div id=\"container\">\r\n");
      out.write("  \t<!--页面头部-->\r\n");
      out.write("\t<div id=\"header\">\r\n");
      out.write("\t\t\r\n");
      out.write("  \t</div>\r\n");
      out.write("\t\t\r\n");
      out.write("\t<!--页面主体-->\r\n");
      out.write("\t<div id=\"pagebody\">\r\n");
      out.write("\t");
      if (_jspx_meth_showtable_005flookup_005f0(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("\t\r\n");
      out.write("\t<!--  a href=\"/SIPStandardDebug/index.jsp\">返回主页面</a>-->\r\n");
      out.write("\r\n");
      out.write("\t</div>\r\n");
      out.write("\t\t\r\n");
      out.write("\r\n");
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

  private boolean _jspx_meth_showtable_005flookup_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  showtable:lookup
    cn.com.fri.axy.sip.jsp_taglibs.LookupTag _jspx_th_showtable_005flookup_005f0 = (cn.com.fri.axy.sip.jsp_taglibs.LookupTag) _005fjspx_005ftagPool_005fshowtable_005flookup_005fnobody.get(cn.com.fri.axy.sip.jsp_taglibs.LookupTag.class);
    _jspx_th_showtable_005flookup_005f0.setPageContext(_jspx_page_context);
    _jspx_th_showtable_005flookup_005f0.setParent(null);
    int _jspx_eval_showtable_005flookup_005f0 = _jspx_th_showtable_005flookup_005f0.doStartTag();
    if (_jspx_th_showtable_005flookup_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fshowtable_005flookup_005fnobody.reuse(_jspx_th_showtable_005flookup_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fshowtable_005flookup_005fnobody.reuse(_jspx_th_showtable_005flookup_005f0);
    return false;
  }
}
