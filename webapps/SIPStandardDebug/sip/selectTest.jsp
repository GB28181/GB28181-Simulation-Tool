<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>My JSP starting page</title>
    <META http-equiv=Content-Type content="text/html; charset=utf-8">
    <LINK href="../lib/multiSelect/common.css" type=text/css rel=stylesheet>
    <LINK href="../lib/multiSelect/jquery-ui.css" type=text/css rel=stylesheet>
    <LINK href="../lib/multiSelect/ui.multiselect.css" type=text/css rel=stylesheet>
	<SCRIPT src="../lib/multiSelect/jquery.min.js" type=text/javascript></SCRIPT>
	<SCRIPT src="../lib/multiSelect/jquery-ui.min.js" type=text/javascript></SCRIPT>
	<SCRIPT src="../lib/multiSelect/jquery.localisation-min.js" type=text/javascript></SCRIPT>
	<SCRIPT src="../lib/multiSelect/jquery.scrollTo-min.js" type=text/javascript></SCRIPT>
	<SCRIPT src="../lib/multiSelect/ui.multiselect.js" type=text/javascript></SCRIPT>
	<SCRIPT type=text/javascript>
		$(function(){
			$.localise('ui-multiselect', {/*language: 'en',*/ path: 'js/locale/'});
			$(".multiselect").multiselect();
			$('#switcher').themeswitcher();
		});
	</SCRIPT>

  </head>
  
  <body>
    
	<SELECT class=multiselect id=countries multiple name=countries[]>
	<OPTION value=AFG>Afghanistan</OPTION>
	<OPTION value=ALB>Albania</OPTION>
	<OPTION value=DZA>Algeria</OPTION>
	<OPTION value=AND>Andorra</OPTION>
	<OPTION value=ARG>Argentina</OPTION>
	<OPTION value=ARM>Armenia</OPTION>
	<OPTION value=ABW>Aruba</OPTION>
	<OPTION value=AUS>Australia</OPTION>
	<OPTION value=AUT selected>Austria</OPTION>
	<OPTION value=AZE>Azerbaijan</OPTION>
	<OPTION value=BGD>Bangladesh</OPTION>
	<OPTION value=BLR>Belarus</OPTION>
	<OPTION value=BEL>Belgium</OPTION>
	<OPTION value=BIH>Bosnia and Herzegovina</OPTION>
	<OPTION value=BRA>Brazil</OPTION>
	<OPTION value=BRN>Brunei</OPTION>
	<OPTION value=BGR>Bulgaria</OPTION>
	<OPTION value=CAN>Canada</OPTION>
	<OPTION value=CHN>China</OPTION>
	</SELECT>
  
  </body>
</html>
