<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>查询结果</title>
	
    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
    <meta http-equiv="description" content="this is my page">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    
    <link href="../../index.css" rel="stylesheet" type="text/css" />
	<link href="../../layout.css" rel="stylesheet" type="text/css" />
    
    <link href="../../lib/JQueryPager/Pager.css" rel="stylesheet" type="text/css" /> 
	<script src="../../lib/jquery-1.4.4.js" type="text/javascript"></script> 
	<script src="../../lib/JQueryPager/jquery.pager.js" type="text/javascript"></script>
	
	<script type="text/javascript" src="ResResultPager.js" charset="utf-8"></script>
	
	<script type="text/javascript" language="javascript"> 
	
		$(document).ready(function() { 
		PageClick(1);}); 
		
		PageClick = function(pageclickednumber) { 
			var totalPages = 4;
			var rt = "<%=request.getParameter("resultType")%>";
			document.getElementById('input_resulttype').value = rt;
			
			$.post(
  				'/SIPStandardDebug/ajax',
  				{
  					requestType:'getresresult',
  					pageNum:pageclickednumber,
  					resultType:rt
  				},
  				function (raw_data) // 回传函数
  				{   
                    var data = eval("(" + raw_data + ")");
                    totalPages = data.total_page;
                    var claimedSum = data.claimedSum;                    

                    $("#totalnum").html("共收到 " + data.total_record + " 条记录，应收到 " + claimedSum + " 条记录");
                    $("#pager").pager({ pagenumber: pageclickednumber, pagecount: totalPages, buttonClickCallback: PageClick });
                    var oTable = document.getElementById("onlyyou");
					var rowNum = oTable.rows.length;
					for(var i = 0; i < rowNum; ){
						oTable.deleteRow(i);
						rowNum = rowNum - 1;
					}

					 // 根据返回结果类型生成不同的TABLE
			
                    var resultType = data.result_type;
                    if(resultType == 'file'){
                        
                    	$("#result").html("文件检索结果");

                    	oTable.insertRow(0);
                       	oTable.rows[0].insertCell(0);
                       	oTable.rows[0].cells[0].appendChild(document.createTextNode('序号'));
                       	oTable.rows[0].insertCell(1);
                       	oTable.rows[0].cells[1].appendChild(document.createTextNode('设备/区域编码'));
                       	oTable.rows[0].insertCell(2);
                       	oTable.rows[0].cells[2].appendChild(document.createTextNode('设备/区域名称'));
                       	oTable.rows[0].insertCell(3);
                       	oTable.rows[0].cells[3].appendChild(document.createTextNode('文件路径名'));
                       	oTable.rows[0].insertCell(4);
                       	oTable.rows[0].cells[4].appendChild(document.createTextNode('录像地址'));
                       	oTable.rows[0].insertCell(5);
                       	oTable.rows[0].cells[5].appendChild(document.createTextNode('录像开始时间'));
                       	oTable.rows[0].insertCell(6);
                       	oTable.rows[0].cells[6].appendChild(document.createTextNode('录像结束时间'));
                       	oTable.rows[0].insertCell(7);
                       	oTable.rows[0].cells[7].appendChild(document.createTextNode('保密属性'));
                       	oTable.rows[0].insertCell(8);
                       	oTable.rows[0].cells[8].appendChild(document.createTextNode('录像产生类型'));
                       	oTable.rows[0].insertCell(9);
                       	oTable.rows[0].cells[9].appendChild(document.createTextNode('录像触发者ID'));

                     	 $.each(data.dataArray, function(idx, item){

                          	oTable.insertRow(idx + 1);
                          	oTable.rows[idx + 1].insertCell(0);
                          	oTable.rows[idx + 1].cells[0].appendChild(document.createTextNode(item.index));
                          	oTable.rows[idx + 1].insertCell(1);
                          	oTable.rows[idx + 1].cells[1].appendChild(document.createTextNode(item.id));
                          	oTable.rows[idx + 1].insertCell(2);
                          	oTable.rows[idx + 1].cells[2].appendChild(document.createTextNode(item.name));
                          	oTable.rows[idx + 1].insertCell(3);
                          	oTable.rows[idx + 1].cells[3].appendChild(document.createTextNode(item.path));
                          	oTable.rows[idx + 1].insertCell(4);
                          	oTable.rows[idx + 1].cells[4].appendChild(document.createTextNode(item.address));
                          	oTable.rows[idx + 1].insertCell(5);
                          	oTable.rows[idx + 1].cells[5].appendChild(document.createTextNode(item.startTime));
                          	oTable.rows[idx + 1].insertCell(6);
                          	oTable.rows[idx + 1].cells[6].appendChild(document.createTextNode(item.endTime));
                          	oTable.rows[idx + 1].insertCell(7);
                          	oTable.rows[idx + 1].cells[7].appendChild(document.createTextNode(item.secrecy));
                          	oTable.rows[idx + 1].insertCell(8);
                          	oTable.rows[idx + 1].cells[8].appendChild(document.createTextNode(item.type));
                          	oTable.rows[idx + 1].insertCell(9);
                          	oTable.rows[idx + 1].cells[9].appendChild(document.createTextNode(item.recordId));
 
                     	 })
                    	 
                    	 
                    }else if(resultType == 'catalog'){
                        
                    	$("#result").html("目录查询结果");

                    	oTable.insertRow(0);
                      	oTable.rows[0].insertCell(0);
                      	oTable.rows[0].cells[0].appendChild(document.createTextNode('序号'));
                      	oTable.rows[0].insertCell(1);
                      	oTable.rows[0].cells[1].appendChild(document.createTextNode('设备/区域/系统编码'));
                      	oTable.rows[0].insertCell(2);
                      	oTable.rows[0].cells[2].appendChild(document.createTextNode('设备/区域/系统名称'));
                      	oTable.rows[0].insertCell(3);
                      	oTable.rows[0].cells[3].appendChild(document.createTextNode('设备厂商'));
                      	oTable.rows[0].insertCell(4);
                      	oTable.rows[0].cells[4].appendChild(document.createTextNode('设备型号'));
                      	oTable.rows[0].insertCell(5);
                      	oTable.rows[0].cells[5].appendChild(document.createTextNode('设备归属'));
                      	oTable.rows[0].insertCell(6);
                      	oTable.rows[0].cells[6].appendChild(document.createTextNode('行政区域'));
                      	oTable.rows[0].insertCell(7);
                      	oTable.rows[0].cells[7].appendChild(document.createTextNode('警区'));
                      	oTable.rows[0].insertCell(8);
                      	oTable.rows[0].cells[8].appendChild(document.createTextNode('安装地址'));
                      	oTable.rows[0].insertCell(9);
                      	oTable.rows[0].cells[9].appendChild(document.createTextNode('是否有子设备'));
                      	oTable.rows[0].insertCell(10);
                      	oTable.rows[0].cells[10].appendChild(document.createTextNode('父设备/区域/系统ID'));
                      	oTable.rows[0].insertCell(11);
                      	oTable.rows[0].cells[11].appendChild(document.createTextNode('信令安全模式'));
                      	oTable.rows[0].insertCell(12);
                      	oTable.rows[0].cells[12].appendChild(document.createTextNode('注册方式'));
                      	oTable.rows[0].insertCell(13);
                      	oTable.rows[0].cells[13].appendChild(document.createTextNode('证书序列号'));
                      	oTable.rows[0].insertCell(14);
                      	oTable.rows[0].cells[14].appendChild(document.createTextNode('证书有效标识'));
                      	oTable.rows[0].insertCell(15);
                      	oTable.rows[0].cells[15].appendChild(document.createTextNode('无效原因码'));
                      	oTable.rows[0].insertCell(16);
                      	oTable.rows[0].cells[16].appendChild(document.createTextNode('证书终止有效期'));
                      	oTable.rows[0].insertCell(17);
                      	oTable.rows[0].cells[17].appendChild(document.createTextNode('保密属性'));
                      	oTable.rows[0].insertCell(18);
                      	oTable.rows[0].cells[18].appendChild(document.createTextNode('设备/区域/系统IP地址'));
                      	oTable.rows[0].insertCell(19);
                      	oTable.rows[0].cells[19].appendChild(document.createTextNode('设备/区域/系统端口'));
                      	oTable.rows[0].insertCell(20);
                      	oTable.rows[0].cells[20].appendChild(document.createTextNode('设备口令'));
                      	oTable.rows[0].insertCell(21);
                      	oTable.rows[0].cells[21].appendChild(document.createTextNode('设备状态'));
                      	oTable.rows[0].insertCell(22);
                      	oTable.rows[0].cells[22].appendChild(document.createTextNode('经度'));
                      	oTable.rows[0].insertCell(23);
                      	oTable.rows[0].cells[23].appendChild(document.createTextNode('纬度'));
                      	oTable.rows[0].insertCell(24);
                      	oTable.rows[0].cells[24].appendChild(document.createTextNode('摄像机类型'));
                      	oTable.rows[0].insertCell(25);
                      	oTable.rows[0].cells[25].appendChild(document.createTextNode('摄像机位置类型'));
                      	oTable.rows[0].insertCell(26);
                      	oTable.rows[0].cells[26].appendChild(document.createTextNode('安装位置'));
                      	oTable.rows[0].insertCell(27);
                      	oTable.rows[0].cells[27].appendChild(document.createTextNode('用途属性'));
                      	oTable.rows[0].insertCell(28);
                      	oTable.rows[0].cells[28].appendChild(document.createTextNode('补光属性'));
                      	oTable.rows[0].insertCell(29);
                      	oTable.rows[0].cells[29].appendChild(document.createTextNode('方位属性'));
                      	oTable.rows[0].insertCell(30);
                      	oTable.rows[0].cells[30].appendChild(document.createTextNode('分辨率'));
                      	oTable.rows[0].insertCell(31);
                      	oTable.rows[0].cells[31].appendChild(document.createTextNode('业务分组'));

                    	 $.each(data.dataArray, function(idx, item){

                         	oTable.insertRow(idx + 1);
                         	oTable.rows[idx + 1].insertCell(0);
                         	oTable.rows[idx + 1].cells[0].appendChild(document.createTextNode(item.index));
                         	oTable.rows[idx + 1].insertCell(1);
                         	oTable.rows[idx + 1].cells[1].appendChild(document.createTextNode(item.id));
                         	oTable.rows[idx + 1].insertCell(2);
                         	oTable.rows[idx + 1].cells[2].appendChild(document.createTextNode(item.name));
                         	oTable.rows[idx + 1].insertCell(3);
                         	oTable.rows[idx + 1].cells[3].appendChild(document.createTextNode(item.manu));
                         	oTable.rows[idx + 1].insertCell(4);
                         	oTable.rows[idx + 1].cells[4].appendChild(document.createTextNode(item.model));
                         	oTable.rows[idx + 1].insertCell(5);
                         	oTable.rows[idx + 1].cells[5].appendChild(document.createTextNode(item.owner));
                         	oTable.rows[idx + 1].insertCell(6);
                         	oTable.rows[idx + 1].cells[6].appendChild(document.createTextNode(item.civilcode));
                         	oTable.rows[idx + 1].insertCell(7);
                         	oTable.rows[idx + 1].cells[7].appendChild(document.createTextNode(item.block));
                         	oTable.rows[idx + 1].insertCell(8);
                         	oTable.rows[idx + 1].cells[8].appendChild(document.createTextNode(item.address));
                         	oTable.rows[idx + 1].insertCell(9);
                         	oTable.rows[idx + 1].cells[9].appendChild(document.createTextNode(item.parental));
                         	oTable.rows[idx + 1].insertCell(10);
                         	oTable.rows[idx + 1].cells[10].appendChild(document.createTextNode(item.parent));
                         	oTable.rows[idx + 1].insertCell(11);
                         	oTable.rows[idx + 1].cells[11].appendChild(document.createTextNode(item.safety));
                         	oTable.rows[idx + 1].insertCell(12);
                         	oTable.rows[idx + 1].cells[12].appendChild(document.createTextNode(item.register));
                         	oTable.rows[idx + 1].insertCell(13);
                         	oTable.rows[idx + 1].cells[13].appendChild(document.createTextNode(item.certnum));
                         	oTable.rows[idx + 1].insertCell(14);
                         	oTable.rows[idx + 1].cells[14].appendChild(document.createTextNode(item.certflag));
                         	oTable.rows[idx + 1].insertCell(15);
                         	oTable.rows[idx + 1].cells[15].appendChild(document.createTextNode(item.errcode));
                         	oTable.rows[idx + 1].insertCell(16);
                         	oTable.rows[idx + 1].cells[16].appendChild(document.createTextNode(item.endtime));
                         	oTable.rows[idx + 1].insertCell(17);
                         	oTable.rows[idx + 1].cells[17].appendChild(document.createTextNode(item.secrecy));
                         	oTable.rows[idx + 1].insertCell(18);
                         	oTable.rows[idx + 1].cells[18].appendChild(document.createTextNode(item.ip));
                         	oTable.rows[idx + 1].insertCell(19);
                         	oTable.rows[idx + 1].cells[19].appendChild(document.createTextNode(item.port));
                         	oTable.rows[idx + 1].insertCell(20);
                         	oTable.rows[idx + 1].cells[20].appendChild(document.createTextNode(item.password));
                         	oTable.rows[idx + 1].insertCell(21);
                         	oTable.rows[idx + 1].cells[21].appendChild(document.createTextNode(item.status));
                         	oTable.rows[idx + 1].insertCell(22);
                         	oTable.rows[idx + 1].cells[22].appendChild(document.createTextNode(item.longti));
                         	oTable.rows[idx + 1].insertCell(23);
                         	oTable.rows[idx + 1].cells[23].appendChild(document.createTextNode(item.lati));
                         	oTable.rows[idx + 1].insertCell(24);
                         	oTable.rows[idx + 1].cells[24].appendChild(document.createTextNode(item.ptztype));
                         	oTable.rows[idx + 1].insertCell(25);
                         	oTable.rows[idx + 1].cells[25].appendChild(document.createTextNode(item.positiontype));
                         	oTable.rows[idx + 1].insertCell(26);
                         	oTable.rows[idx + 1].cells[26].appendChild(document.createTextNode(item.roomtype));
                         	oTable.rows[idx + 1].insertCell(27);
                         	oTable.rows[idx + 1].cells[27].appendChild(document.createTextNode(item.usetype));
                         	oTable.rows[idx + 1].insertCell(28);
                         	oTable.rows[idx + 1].cells[28].appendChild(document.createTextNode(item.supplylighttype));
                         	oTable.rows[idx + 1].insertCell(29);
                         	oTable.rows[idx + 1].cells[29].appendChild(document.createTextNode(item.directiontype));
                         	oTable.rows[idx + 1].insertCell(30);
                         	oTable.rows[idx + 1].cells[30].appendChild(document.createTextNode(item.resolution));
                         	oTable.rows[idx + 1].insertCell(31);
                         	oTable.rows[idx + 1].cells[31].appendChild(document.createTextNode(item.businessgroup));

                    	 })
                    	 
                    }else{
                    	 $("#result").html("未识别的结果类型");
                    }
					
                    document.body.appendChild(oTable);
  				},
  				'html'
			); 
			
		} 
</script>
	
  </head>
  
  <body onLoad="init()">
    <h1 id="result"></h1>
    <p id="totalnum"></p> 
	<div id="pager" ></div>
	<a href="#" id="export_results"><b>导出查询结果</b></a><br><input type="hidden" id="input_resulttype">
	<table align=left bordercolor=black border="1" style="BORDER-COLLAPSE:collapse" cellspacing="0" cellpadding="5" id="onlyyou" ></table>
  </body>
</html>
