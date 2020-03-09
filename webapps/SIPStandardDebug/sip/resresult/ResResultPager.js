/**
 * 提供设备目录和历史录像检索结果导出的功能
 * 
 **/


/**
 * 初始化按钮函数
 * 
 * @return
 */
function init(){
	initFunction();
}

function initFunction(){
	
	document.getElementById("export_results").onclick = function(){
		//alert("fffff");
		var resultType = document.getElementById('input_resulttype').value;
		
		$.post(
					'/SIPStandardDebug/ajax',
					{
						requestType:'export_results',
						resultType:resultType
					},
					function (raw_data) // 回传函数
	  				{   
						//var data = eval("(" + raw_data + ")");
						alert("导出完成");
	  				},
					'html'
			 );
	};
}