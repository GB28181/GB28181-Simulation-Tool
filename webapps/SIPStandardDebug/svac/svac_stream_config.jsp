<%@ page language="java" import="java.util.*" 
	import="javax.servlet.http.HttpServlet" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
	
	String filePath = System.getProperty("catalina.home");//获取tomcat的根目录
	System.out.println("filePath="+filePath);
	
	int length = filePath.indexOf("\\");
	String filePathResult = "";
	//目录转换
	while(length >= 0){
		filePathResult += filePath.substring(0, length) + "/";
		String tempPath = filePath.substring(length + 1, filePath.length());
		length = tempPath.indexOf("\\");
		filePath = tempPath; 
	}
	filePathResult += filePath;
	filePathResult += "/bin/psSender/svac_file";
	
	System.out.println("filePathResult=" + filePathResult);
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>SVAC码流配置</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

  <title>JQueryFileTree</title>  
    <!-- 由 于css和图片没有放在css代码中可读的图片路径下,所在这里的css读取图片路径的代码改成适应本示例路径 -->  
    <link type="text/css" rel="stylesheet" href="../SIPStandardDebug/lib/jquery_file_tree/jqueryFileTree.css"></link> 
    <script type="text/javascript" language="javascript"  src="../SIPStandardDebug/lib/jquery_file_tree/jquery-1.5.min.js" ></script>
	<script type="text/javascript" language="javascript" src="../SIPStandardDebug/lib/jquery_file_tree/jqueryFileTree.js" ></script> 
    
    <style type="text/css" >   
            BODY,  
            HTML {  
                padding: 0px;  
                margin: 0px;  
            }  
            BODY {  
                font-family: Verdana, Arial, Helvetica, sans-serif;  
                font-size: 11px;  
                background: #EEE;  
                padding: 15px;  
            }  
            H2 {  
                font-family: Georgia, serif;  
                font-size: 16px;  
                font-weight: normal;  
                margin: 0px 0px 10px 0px;  
            }  
              
            .example {  
                float: center;  
                margin: 25px;  
            }  
              
            .show {  
                width: 300px;  
                height: 450px;  
                border-top: solid 1px #BBB;  
                border-left: solid 1px #BBB;  
                border-bottom: solid 1px #FFF;  
                border-right: solid 1px #FFF;  
                background: #FFF;  
                overflow: scroll;  
                padding: 5px;
                text-align: left;//让显示的目录靠左，add by lixiangshu  
            }  
        </style>   
      
    <script type="text/javascript" charset="gb2312">
    	var filePath="<%=filePathResult%>";
    	var fileName=null;
    	var fileNameReturn=null;
    	var actionKind=null;
    	var requestType=null;
    	
        $(document).ready( function() {
        	actionKind="readFile";
        	requestType="saveFileName";
        	fileName="";
        	$.ajax({
        		url:'/SIPStandardDebug/ajax',
	        	dataType:"html",
	        	contentType:"application/x-www-form-urlencoded;charset=UTF-8",
	        	type:"POST",
	        	data:"fileName="+fileName+"&actionKind="+actionKind+"&requestType="+requestType,
	        	success:function(fnr){
	        		fileNameReturn=fnr;
	        		change();
	        	},
	        	error:function(fnr){
	        		fileNameReturn=fnr;
	        	}
        	});
        	
            $("#show").fileTree({  
                root: filePath,//指定加载文件的路径  
                script: "../SIPStandardDebug/lib/jquery_file_tree/jqueryFileTree.jsp",  
                expandSpeed: 750,
                collapseSpeed: 750,
                multiFolder: false 
            }, 
            function(file) {  
                //点击文件后的回调函数,自己可实现要的逻辑  
                fileName = file;
            });  
        });
        
        function file_save(){
        	actionKind="saveFile";
        	requestType="saveFileName";
        	if(fileName==""){
        		alert("您还没有选择文件！");
        		return false;
        	}
        	$.ajax({
        		url:'/SIPStandardDebug/ajax',
	        	dataType:"html",
	        	contentType:"application/x-www-form-urlencoded;charset=UTF-8",
	        	type:"POST",
	        	data:"fileName="+fileName+"&actionKind="+actionKind+"&requestType="+requestType,
	        	success:function(fnr){
	        		fileNameReturn=fnr;
	        		alert("选择文件 " + fnr + " 成功！");
	        		change();
	        	},
	        	error:function(fnr){
	        		fileNameReturn=fnr;
	        		alert("选择文件 " + fnr + " 失败！");
	        	}
        	});
        }
        
        function file_delete(){
        	actionKind="deleteFile";
        	requestType="saveFileName";
        	
       		$.ajax({
        		url:"/SIPStandardDebug/ajax",
        		contentType:"application/x-www-form-urlencoded;charset=UTF-8",
	        	dataType:"html",
	        	type:"POST",
	        	data:"fileName="+fileName+"&actionKind="+actionKind+"&requestType="+requestType,
	        	success:function(fnr){
	        		fileNameReturn="还未选择文件！";
	        		alert("清除文件成功！");
	        		change();
	        	},
	        	error:function(fnr){
	        		fileNameReturn="还未选择文件！";
	        		alert("清除文件失败！");
	        	}
        	});
        }
        //改变“已经选择文件：”的值，显示最新的文件名称。
        function change() {
			document.getElementById("fileName").value=fileNameReturn;
		}
      </script> 
  </head>  
  <body>
  	<div align="center">
    <div class="example">   
        <h2>SVAC码流文件列表</h2>   
        <div id="show" class="show"></div>   
    </div>
    <div id="selectFile">
    <table>
    	<tr>
    		<td>已经选择文件：</td>
    		<td>
    			<input type="text" size="30" readonly="readonly" id="fileName" value="还未选择文件！" disabled="disabled">
    		</td>
    	</tr>
    </table> 
    </div>
    <div id="option">
    <table>
    	<tr>
    		<td>
    			<a href="javascript:void(0)" id="file_save" onclick="file_save();">确定</a>
    			<a href="javascript:void(0)" id="file_delete" onclick="file_delete();">清除选择</a>
    		</td>
    	</tr>
    </table> 
    </div>
    </div>
  </body>
</html>
