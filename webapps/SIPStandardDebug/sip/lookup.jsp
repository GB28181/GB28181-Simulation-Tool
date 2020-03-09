<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="/WEB-INF/showtable.tld" prefix="showtable"%>

<html>
<head><title>链路管理</title>
<link href="../index.css" rel="stylesheet" type="text/css" />
<link href="../table.css" rel="stylesheet" type="text/css" />
<link rel="shortcut icon" type="image/ico" href="images/logo.ico" />
	<script type="text/javascript">
	
	function $(id){
    	if(document.getElementById){
        	return document.getElementById(id);
    	}
	}
	
	function delink(linkid){
		
    	var formObj = $('sendBye_' + linkid);
        formObj.submit();
	}
	
	function delsub(key){
		
    	var formObj = $('delSub_' + key);
        formObj.submit();
	}
	
  	</script>
  	
</head>
<body>
<!--页面层容器-->
  <div id="container">
  	<!--页面头部-->
	<div id="header">
		
  	</div>
		
	<!--页面主体-->
	<div id="pagebody">
	<showtable:lookup/>
	
	<!--  a href="/SIPStandardDebug/index.jsp">返回主页面</a>-->

	</div>
		

	<!--页面底部-->
	<div id="footer">
		
	</div> 
  
  </div>
</body>
</html>