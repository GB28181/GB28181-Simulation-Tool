<%@ page language="java" pageEncoding="UTF-8"%>
<%@ taglib uri="/WEB-INF/showtable.tld" prefix="showtable"%>

<html>
<head><title>响应消息编辑</title>
<link href="../index.css" rel="stylesheet" type="text/css" />
<link href="resedit.css" rel="stylesheet" type="text/css" />
<link rel="shortcut icon" type="image/ico" href="images/logo.ico" />
  	
  	<script type="text/javascript" src="../lib/jquery-1.4.4.js"></script>
  	
  	<script type="text/javascript">
  		
  		//保存编辑后的消息
  		$('#SaveMessage_link').onclick = function(){
    	alert("come 1");
        $.post(
  				'/SIPStandardDebug/ajax',
  				{
  					requestType:'savemessagebody',
  					messagetype:$('#reslist').val(),
  					messagetext:$('#resediter').val()
  				},
  				function (data) // 回传函数
  				{   
  					// alert('aaaa');
  					var jquerydata = $(data);
     				// alert(jquerydata.text())
                    // var results=eval(data);
                    // alert(results[0].result);
                    alert(jquerydata.text());
  				},
  				'html'
			);
        
		};
		
		//选择List选项从后台获取消息内容
		function select(obj)
		{
			alert($('#reslist').val());
			$.post(
  				'/SIPStandardDebug/ajax',
  				{
  					requestType:'getmessagebody',
  					messagetype:$('#reslist').val()
  				},
  				function (data) // 回传函数
  				{   
  					// alert('aaaa');
  					var jquerydata = $(data);
     				// alert(jquerydata.text())
                    // var results=eval(data);
                    // alert(results[0].result);
                    $('#resediter').val(jquerydata.text());
  				},
  				'html'
			);
		}
	</script>
		
</head>
<body>
<br><br><!--页面层容器-->
  <div id="container">
		
	<!--页面主体-->
	<div id="pagebody"> 
		<div id="reslistdiv">
			<select size="1" id="reslist"  onchange="select(this)">
				<option value="Catalog" selected="selected">目录查询响应</option>
				<option value="RecordInfo">文件查询响应</option>
				<option value="DeviceInfo">信息查询响应</option>
				<option value="DeviceStatus">状态查询响应</option>
			</select>
 		</div>
 		<div id="editerdiv">
 			<textarea cols="80" rows="30" id="resediter" wrap="off"></textarea>
 			<a href="#" id="SaveMessage_link" style="float:left;"><img src="../images/clearMsg.png" border="0" /></a>
 		</div>
	</div>
	
	<!--页面底部-->
	<div id="footer">
		
	</div> 
  
  </div>
</body>
</html>