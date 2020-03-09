package org.apache.jsp.sip.resresult;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class ResResultPager_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\">\r\n");
      out.write("<html>\r\n");
      out.write("  <head>\r\n");
      out.write("    <title>æ¥è¯¢ç»æ</title>\r\n");
      out.write("\t\r\n");
      out.write("    <meta http-equiv=\"keywords\" content=\"keyword1,keyword2,keyword3\">\r\n");
      out.write("    <meta http-equiv=\"description\" content=\"this is my page\">\r\n");
      out.write("    <meta http-equiv=\"content-type\" content=\"text/html; charset=UTF-8\">\r\n");
      out.write("    \r\n");
      out.write("    <link href=\"../../index.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("\t<link href=\"../../layout.css\" rel=\"stylesheet\" type=\"text/css\" />\r\n");
      out.write("    \r\n");
      out.write("    <link href=\"../../lib/JQueryPager/Pager.css\" rel=\"stylesheet\" type=\"text/css\" /> \r\n");
      out.write("\t<script src=\"../../lib/jquery-1.4.4.js\" type=\"text/javascript\"></script> \r\n");
      out.write("\t<script src=\"../../lib/JQueryPager/jquery.pager.js\" type=\"text/javascript\"></script>\r\n");
      out.write("\t\r\n");
      out.write("\t<script type=\"text/javascript\" src=\"ResResultPager.js\" charset=\"utf-8\"></script>\r\n");
      out.write("\t\r\n");
      out.write("\t<script type=\"text/javascript\" language=\"javascript\"> \r\n");
      out.write("\t\r\n");
      out.write("\t\t$(document).ready(function() { \r\n");
      out.write("\t\tPageClick(1);}); \r\n");
      out.write("\t\t\r\n");
      out.write("\t\tPageClick = function(pageclickednumber) { \r\n");
      out.write("\t\t\tvar totalPages = 4;\r\n");
      out.write("\t\t\tvar rt = \"");
      out.print(request.getParameter("resultType"));
      out.write("\";\r\n");
      out.write("\t\t\tdocument.getElementById('input_resulttype').value = rt;\r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t\t$.post(\r\n");
      out.write("  \t\t\t\t'/SIPStandardDebug/ajax',\r\n");
      out.write("  \t\t\t\t{\r\n");
      out.write("  \t\t\t\t\trequestType:'getresresult',\r\n");
      out.write("  \t\t\t\t\tpageNum:pageclickednumber,\r\n");
      out.write("  \t\t\t\t\tresultType:rt\r\n");
      out.write("  \t\t\t\t},\r\n");
      out.write("  \t\t\t\tfunction (raw_data) // åä¼ å½æ°\r\n");
      out.write("  \t\t\t\t{   \r\n");
      out.write("                    var data = eval(\"(\" + raw_data + \")\");\r\n");
      out.write("                    totalPages = data.total_page;\r\n");
      out.write("                    var claimedSum = data.claimedSum;                    \r\n");
      out.write("\r\n");
      out.write("                    $(\"#totalnum\").html(\"å±æ¶å° \" + data.total_record + \" æ¡è®°å½ï¼åºæ¶å° \" + claimedSum + \" æ¡è®°å½\");\r\n");
      out.write("                    $(\"#pager\").pager({ pagenumber: pageclickednumber, pagecount: totalPages, buttonClickCallback: PageClick });\r\n");
      out.write("                    var oTable = document.getElementById(\"onlyyou\");\r\n");
      out.write("\t\t\t\t\tvar rowNum = oTable.rows.length;\r\n");
      out.write("\t\t\t\t\tfor(var i = 0; i < rowNum; ){\r\n");
      out.write("\t\t\t\t\t\toTable.deleteRow(i);\r\n");
      out.write("\t\t\t\t\t\trowNum = rowNum - 1;\r\n");
      out.write("\t\t\t\t\t}\r\n");
      out.write("\r\n");
      out.write("\t\t\t\t\t // æ ¹æ®è¿åç»æç±»åçæä¸åçTABLE\r\n");
      out.write("\t\t\t\r\n");
      out.write("                    var resultType = data.result_type;\r\n");
      out.write("                    if(resultType == 'file'){\r\n");
      out.write("                        \r\n");
      out.write("                    \t$(\"#result\").html(\"æä»¶æ£ç´¢ç»æ\");\r\n");
      out.write("\r\n");
      out.write("                    \toTable.insertRow(0);\r\n");
      out.write("                       \toTable.rows[0].insertCell(0);\r\n");
      out.write("                       \toTable.rows[0].cells[0].appendChild(document.createTextNode('åºå·'));\r\n");
      out.write("                       \toTable.rows[0].insertCell(1);\r\n");
      out.write("                       \toTable.rows[0].cells[1].appendChild(document.createTextNode('è®¾å¤/åºåç¼ç '));\r\n");
      out.write("                       \toTable.rows[0].insertCell(2);\r\n");
      out.write("                       \toTable.rows[0].cells[2].appendChild(document.createTextNode('è®¾å¤/åºååç§°'));\r\n");
      out.write("                       \toTable.rows[0].insertCell(3);\r\n");
      out.write("                       \toTable.rows[0].cells[3].appendChild(document.createTextNode('æä»¶è·¯å¾å'));\r\n");
      out.write("                       \toTable.rows[0].insertCell(4);\r\n");
      out.write("                       \toTable.rows[0].cells[4].appendChild(document.createTextNode('å½åå°å'));\r\n");
      out.write("                       \toTable.rows[0].insertCell(5);\r\n");
      out.write("                       \toTable.rows[0].cells[5].appendChild(document.createTextNode('å½åå¼å§æ¶é´'));\r\n");
      out.write("                       \toTable.rows[0].insertCell(6);\r\n");
      out.write("                       \toTable.rows[0].cells[6].appendChild(document.createTextNode('å½åç»ææ¶é´'));\r\n");
      out.write("                       \toTable.rows[0].insertCell(7);\r\n");
      out.write("                       \toTable.rows[0].cells[7].appendChild(document.createTextNode('ä¿å¯å±æ§'));\r\n");
      out.write("                       \toTable.rows[0].insertCell(8);\r\n");
      out.write("                       \toTable.rows[0].cells[8].appendChild(document.createTextNode('å½åäº§çç±»å'));\r\n");
      out.write("                       \toTable.rows[0].insertCell(9);\r\n");
      out.write("                       \toTable.rows[0].cells[9].appendChild(document.createTextNode('å½åè§¦åèID'));\r\n");
      out.write("\r\n");
      out.write("                     \t $.each(data.dataArray, function(idx, item){\r\n");
      out.write("\r\n");
      out.write("                          \toTable.insertRow(idx + 1);\r\n");
      out.write("                          \toTable.rows[idx + 1].insertCell(0);\r\n");
      out.write("                          \toTable.rows[idx + 1].cells[0].appendChild(document.createTextNode(item.index));\r\n");
      out.write("                          \toTable.rows[idx + 1].insertCell(1);\r\n");
      out.write("                          \toTable.rows[idx + 1].cells[1].appendChild(document.createTextNode(item.id));\r\n");
      out.write("                          \toTable.rows[idx + 1].insertCell(2);\r\n");
      out.write("                          \toTable.rows[idx + 1].cells[2].appendChild(document.createTextNode(item.name));\r\n");
      out.write("                          \toTable.rows[idx + 1].insertCell(3);\r\n");
      out.write("                          \toTable.rows[idx + 1].cells[3].appendChild(document.createTextNode(item.path));\r\n");
      out.write("                          \toTable.rows[idx + 1].insertCell(4);\r\n");
      out.write("                          \toTable.rows[idx + 1].cells[4].appendChild(document.createTextNode(item.address));\r\n");
      out.write("                          \toTable.rows[idx + 1].insertCell(5);\r\n");
      out.write("                          \toTable.rows[idx + 1].cells[5].appendChild(document.createTextNode(item.startTime));\r\n");
      out.write("                          \toTable.rows[idx + 1].insertCell(6);\r\n");
      out.write("                          \toTable.rows[idx + 1].cells[6].appendChild(document.createTextNode(item.endTime));\r\n");
      out.write("                          \toTable.rows[idx + 1].insertCell(7);\r\n");
      out.write("                          \toTable.rows[idx + 1].cells[7].appendChild(document.createTextNode(item.secrecy));\r\n");
      out.write("                          \toTable.rows[idx + 1].insertCell(8);\r\n");
      out.write("                          \toTable.rows[idx + 1].cells[8].appendChild(document.createTextNode(item.type));\r\n");
      out.write("                          \toTable.rows[idx + 1].insertCell(9);\r\n");
      out.write("                          \toTable.rows[idx + 1].cells[9].appendChild(document.createTextNode(item.recordId));\r\n");
      out.write(" \r\n");
      out.write("                     \t })\r\n");
      out.write("                    \t \r\n");
      out.write("                    \t \r\n");
      out.write("                    }else if(resultType == 'catalog'){\r\n");
      out.write("                        \r\n");
      out.write("                    \t$(\"#result\").html(\"ç®å½æ¥è¯¢ç»æ\");\r\n");
      out.write("\r\n");
      out.write("                    \toTable.insertRow(0);\r\n");
      out.write("                      \toTable.rows[0].insertCell(0);\r\n");
      out.write("                      \toTable.rows[0].cells[0].appendChild(document.createTextNode('åºå·'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(1);\r\n");
      out.write("                      \toTable.rows[0].cells[1].appendChild(document.createTextNode('è®¾å¤/åºå/ç³»ç»ç¼ç '));\r\n");
      out.write("                      \toTable.rows[0].insertCell(2);\r\n");
      out.write("                      \toTable.rows[0].cells[2].appendChild(document.createTextNode('è®¾å¤/åºå/ç³»ç»åç§°'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(3);\r\n");
      out.write("                      \toTable.rows[0].cells[3].appendChild(document.createTextNode('è®¾å¤åå'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(4);\r\n");
      out.write("                      \toTable.rows[0].cells[4].appendChild(document.createTextNode('è®¾å¤åå·'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(5);\r\n");
      out.write("                      \toTable.rows[0].cells[5].appendChild(document.createTextNode('è®¾å¤å½å±'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(6);\r\n");
      out.write("                      \toTable.rows[0].cells[6].appendChild(document.createTextNode('è¡æ¿åºå'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(7);\r\n");
      out.write("                      \toTable.rows[0].cells[7].appendChild(document.createTextNode('è­¦åº'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(8);\r\n");
      out.write("                      \toTable.rows[0].cells[8].appendChild(document.createTextNode('å®è£å°å'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(9);\r\n");
      out.write("                      \toTable.rows[0].cells[9].appendChild(document.createTextNode('æ¯å¦æå­è®¾å¤'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(10);\r\n");
      out.write("                      \toTable.rows[0].cells[10].appendChild(document.createTextNode('ç¶è®¾å¤/åºå/ç³»ç»ID'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(11);\r\n");
      out.write("                      \toTable.rows[0].cells[11].appendChild(document.createTextNode('ä¿¡ä»¤å®å¨æ¨¡å¼'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(12);\r\n");
      out.write("                      \toTable.rows[0].cells[12].appendChild(document.createTextNode('æ³¨åæ¹å¼'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(13);\r\n");
      out.write("                      \toTable.rows[0].cells[13].appendChild(document.createTextNode('è¯ä¹¦åºåå·'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(14);\r\n");
      out.write("                      \toTable.rows[0].cells[14].appendChild(document.createTextNode('è¯ä¹¦æææ è¯'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(15);\r\n");
      out.write("                      \toTable.rows[0].cells[15].appendChild(document.createTextNode('æ æåå ç '));\r\n");
      out.write("                      \toTable.rows[0].insertCell(16);\r\n");
      out.write("                      \toTable.rows[0].cells[16].appendChild(document.createTextNode('è¯ä¹¦ç»æ­¢æææ'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(17);\r\n");
      out.write("                      \toTable.rows[0].cells[17].appendChild(document.createTextNode('ä¿å¯å±æ§'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(18);\r\n");
      out.write("                      \toTable.rows[0].cells[18].appendChild(document.createTextNode('è®¾å¤/åºå/ç³»ç»IPå°å'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(19);\r\n");
      out.write("                      \toTable.rows[0].cells[19].appendChild(document.createTextNode('è®¾å¤/åºå/ç³»ç»ç«¯å£'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(20);\r\n");
      out.write("                      \toTable.rows[0].cells[20].appendChild(document.createTextNode('è®¾å¤å£ä»¤'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(21);\r\n");
      out.write("                      \toTable.rows[0].cells[21].appendChild(document.createTextNode('è®¾å¤ç¶æ'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(22);\r\n");
      out.write("                      \toTable.rows[0].cells[22].appendChild(document.createTextNode('ç»åº¦'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(23);\r\n");
      out.write("                      \toTable.rows[0].cells[23].appendChild(document.createTextNode('çº¬åº¦'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(24);\r\n");
      out.write("                      \toTable.rows[0].cells[24].appendChild(document.createTextNode('æåæºç±»å'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(25);\r\n");
      out.write("                      \toTable.rows[0].cells[25].appendChild(document.createTextNode('æåæºä½ç½®ç±»å'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(26);\r\n");
      out.write("                      \toTable.rows[0].cells[26].appendChild(document.createTextNode('å®è£ä½ç½®'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(27);\r\n");
      out.write("                      \toTable.rows[0].cells[27].appendChild(document.createTextNode('ç¨éå±æ§'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(28);\r\n");
      out.write("                      \toTable.rows[0].cells[28].appendChild(document.createTextNode('è¡¥åå±æ§'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(29);\r\n");
      out.write("                      \toTable.rows[0].cells[29].appendChild(document.createTextNode('æ¹ä½å±æ§'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(30);\r\n");
      out.write("                      \toTable.rows[0].cells[30].appendChild(document.createTextNode('åè¾¨ç'));\r\n");
      out.write("                      \toTable.rows[0].insertCell(31);\r\n");
      out.write("                      \toTable.rows[0].cells[31].appendChild(document.createTextNode('ä¸å¡åç»'));\r\n");
      out.write("\r\n");
      out.write("                    \t $.each(data.dataArray, function(idx, item){\r\n");
      out.write("\r\n");
      out.write("                         \toTable.insertRow(idx + 1);\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(0);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[0].appendChild(document.createTextNode(item.index));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(1);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[1].appendChild(document.createTextNode(item.id));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(2);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[2].appendChild(document.createTextNode(item.name));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(3);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[3].appendChild(document.createTextNode(item.manu));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(4);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[4].appendChild(document.createTextNode(item.model));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(5);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[5].appendChild(document.createTextNode(item.owner));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(6);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[6].appendChild(document.createTextNode(item.civilcode));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(7);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[7].appendChild(document.createTextNode(item.block));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(8);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[8].appendChild(document.createTextNode(item.address));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(9);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[9].appendChild(document.createTextNode(item.parental));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(10);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[10].appendChild(document.createTextNode(item.parent));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(11);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[11].appendChild(document.createTextNode(item.safety));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(12);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[12].appendChild(document.createTextNode(item.register));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(13);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[13].appendChild(document.createTextNode(item.certnum));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(14);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[14].appendChild(document.createTextNode(item.certflag));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(15);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[15].appendChild(document.createTextNode(item.errcode));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(16);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[16].appendChild(document.createTextNode(item.endtime));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(17);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[17].appendChild(document.createTextNode(item.secrecy));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(18);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[18].appendChild(document.createTextNode(item.ip));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(19);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[19].appendChild(document.createTextNode(item.port));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(20);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[20].appendChild(document.createTextNode(item.password));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(21);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[21].appendChild(document.createTextNode(item.status));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(22);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[22].appendChild(document.createTextNode(item.longti));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(23);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[23].appendChild(document.createTextNode(item.lati));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(24);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[24].appendChild(document.createTextNode(item.ptztype));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(25);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[25].appendChild(document.createTextNode(item.positiontype));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(26);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[26].appendChild(document.createTextNode(item.roomtype));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(27);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[27].appendChild(document.createTextNode(item.usetype));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(28);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[28].appendChild(document.createTextNode(item.supplylighttype));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(29);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[29].appendChild(document.createTextNode(item.directiontype));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(30);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[30].appendChild(document.createTextNode(item.resolution));\r\n");
      out.write("                         \toTable.rows[idx + 1].insertCell(31);\r\n");
      out.write("                         \toTable.rows[idx + 1].cells[31].appendChild(document.createTextNode(item.businessgroup));\r\n");
      out.write("\r\n");
      out.write("                    \t })\r\n");
      out.write("                    \t \r\n");
      out.write("                    }else{\r\n");
      out.write("                    \t $(\"#result\").html(\"æªè¯å«çç»æç±»å\");\r\n");
      out.write("                    }\r\n");
      out.write("\t\t\t\t\t\r\n");
      out.write("                    document.body.appendChild(oTable);\r\n");
      out.write("  \t\t\t\t},\r\n");
      out.write("  \t\t\t\t'html'\r\n");
      out.write("\t\t\t); \r\n");
      out.write("\t\t\t\r\n");
      out.write("\t\t} \r\n");
      out.write("</script>\r\n");
      out.write("\t\r\n");
      out.write("  </head>\r\n");
      out.write("  \r\n");
      out.write("  <body onLoad=\"init()\">\r\n");
      out.write("    <h1 id=\"result\"></h1>\r\n");
      out.write("    <p id=\"totalnum\"></p> \r\n");
      out.write("\t<div id=\"pager\" ></div>\r\n");
      out.write("\t<a href=\"#\" id=\"export_results\"><b>å¯¼åºæ¥è¯¢ç»æ</b></a><br><input type=\"hidden\" id=\"input_resulttype\">\r\n");
      out.write("\t<table align=left bordercolor=black border=\"1\" style=\"BORDER-COLLAPSE:collapse\" cellspacing=\"0\" cellpadding=\"5\" id=\"onlyyou\" ></table>\r\n");
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
