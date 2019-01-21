window.onload = function(){
	$("#uname").blur(function(){
		
	})
	$("#upwd").blur(function(){
		
	})
	
	
	
	$(".btn").click(function(){
		var brr = getCookie("admin");
		var name = $("#uname").val();
		var pwd = $("#upwd").val();
		console.log(name,pwd,brr,brr.length)
		var flag = true;
		for( var i = 0; i < brr.length; i++ ){
			if( brr[i].flagName == name ){
				if( brr[i].flagPwd == pwd ){
					alert( "登录成功" );
					flag = false;
				}else{
				alert("登录密码不正确");
				flag = false;
				}
			}
		}
		if(flag){
			alert("用户名不存在")
		}
	})
}
