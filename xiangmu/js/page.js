window.onload = function(){
	//登录
	$('.denglu').click(function(){
		$('.right-slidebar').animate({ right : 0});
	})
	var peiStr = '';
	var peiIndex = 0;
	var showFlag = true;
	$('.peisong-show').click(function(){
		if( showFlag ){//显示
			$('.peisong-xianshi').css("display",'block');
			$('.xianshi-span').css("display",'block');
			$('.content').eq(0).css("display",'block').siblings().css('display','none')
			$('.peisong-show i').addClass('iico').css("background-position-y",0);
			$('.peisong-show p').css('border-bottom','none');
			$('.xianshi-span a').eq(0).addClass('active').siblings().removeClass('active');
			peiIndex = 0;
			peiStr = '';
			showFlag = false;
		}else{//隐藏
			$('.peisong-xianshi').css("display",'none');
			$('.peisong-show i').css("background-position-y",-5);
			$('.peisong-show p').css('border-bottom','1px solid #ddd')
			showFlag = true;
		}
		return false
	})
	$('.xianshi-span a').click(function(){
		$(this).addClass('active')
			   .siblings()
			   .removeClass('active');
		var index = $(this).index();
		$('.content').eq(index)
					 .css('display','block')
					 .siblings()
					 .css('display','none')
		return false
	})
	
	$('.content li').click(function(){
		peiIndex++;
		peiStr += $(this).html();
		$(this).addClass('beijing')
			   .siblings()
			   .removeClass('beijing')
			   .parent()
			   .css('display','none')
		var index = $(this).parent().index()+1;
//		console.log(index)
		$(".xianshi-span a").eq(index).addClass('active').siblings().removeClass('active');
		$('.content').eq(index)
					 .css('display','block')
					 .siblings()
					 .css('display','none')
		if( peiIndex == 3 ){
			$('.xianshi-span').css("display",'none');
			$('.peisong-xianshi').css("display",'none');
			$('.content').css("display",'none');
			$('.peisong-show p').html( peiStr+"<i></i>" );
			$('.peisong-show i').css("background-position-y",-5);
			$('.peisong-show p').css('border-bottom','1px solid #ddd')
			showFlag = true;
		}
		return false
	})
	$('#ulbox').click(function(){//阻止冒泡
		return false
	})
	$(document).click(function(){//点击关闭
		$('.peisong-xianshi').css("display",'none');
		$('.xianshi-span').css("display",'none');
		$('.peisong-show i').css("background-position-y",-5);
		$('.peisong-show p').css('border-bottom','1px solid #ddd')
		$('.content').css("display",'none');
		showFlag = true;
	})
	//放大镜
	$('.product-ul').mouseenter(function(){
		$('#mask').css('display','block')
		$('#big').css('display','block')
	})
	$('.product-ul').mouseleave(function(){
		$('#mask').css('display','none')
		$('#big').css('display','none')
	})
	$('.product-ul').mousemove(function(e){
		var e = e || event;
		var x = e.pageX - $('.product-box').offset().left - $('#mask').width()/2;
		var y = e.pageY - $('.product-box').offset().top - $('#mask').height()/2;
//		获取mask最大的left和top
		var maxL = $('.product-box').width() - $('#mask').width();
		var maxL = $('.product-box').height() - $('#mask').height();
		//边界处理
		var x = Math.min( Math.max(0,x), maxL)
		var y = Math.min( Math.max(0,y), maxL)
//		设置mask的left和top
		$('#mask').css( {'left':x,'top':y} );
		//获取大图的移动时的left和top值
	 	//bigImgLeft / x =  大图宽度-大图显示区宽度  / 小图宽度 - 小图显示区宽度
		var bigimgLeft = x*( $('.bigimg').width() - $('#big').width() ) / ( $('#smallimg').width()-$('#mask').width() )
		var bigimgTOP = y*( $('.bigimg').height() - $('#big').height() ) / ( $('#smallimg').height()-$('#mask').height() )
		//设置大图的left  top
		$('.bigimg').css( { "left":-bigimgLeft,"top":-bigimgTOP } )
		//要想实现等比放大  需要设置下面的比例关系
	 	//大图宽度  / 小图宽度 = 大图显示区宽度 / 小图显示区宽度
	 	//  800 / 450    400 / 225
	})
	$('.product-ol li').mouseenter(function(){
		var index = $(this).index();
		$('.product-ul li').eq(index)
						   .addClass('quanzhong')
						   .siblings()
						   .removeClass('quanzhong')
		$('.bigimg').eq(index)
					.addClass('bigxian')
				    .siblings()
				    .removeClass('bigxian')
	})
	$('.product-olbox .right').click(function(){
		$('.product-ol').animate({'left':-85})
		console.log(22)
	})
	$('.product-olbox .left').click(function(){
		$('.product-ol').animate({'left':5})
		console.log(11)
	})
	
//	右侧固定nav
	//登录操作
	var $ulist = $(".box-ulist li");
	$("#uname").blur(function(){
		var strname = $("#uname").val();
		if( !strname ){
			$ulist.eq(0).css("display","block")
						.siblings()
				  		.css("display","none");
		}else{
			$ulist.eq(0).css("display", "none")
			$(this).css("color","#999999");
		}
	})
	$("#upwd").blur(function(){
		var strpwd = $("#upwd").val();
		if( !strpwd ){
			$ulist.eq(1).css("display","block")
				  .siblings()
				  .css("display","none")
		}else{
			$ulist.eq(1).css("display", "none")
			$(this).css("color","#999999");
		}
	})
	$("#uyan").blur(function(){
		var stryan = $("#uyan").val();
		if( !stryan ){
			$ulist.eq(2).css("display","block")
				  .siblings()
				  .css("display","none")
		}else{
			$ulist.eq(2).css("display", "none")
			$(this).css("color","#999999");
		}
	})
	//换验证码
	var vertiData = [];
	var vertiIndex = 0;
	$.ajax({
		type:"get",
		url:"json/verti.json",
		async:true,
		success : function(json){
//			console.log(json);
			vertiData = json;
			vertiIndex = rand(0,vertiData.length-1);
			$('.img-yan img').attr('src', vertiData[vertiIndex].src )
//			console.log( vertiData[vertiIndex].src )
		}
	});
	$('.img-yan img').click(function(){//点击切换验证码
		vertiIndex = rand(0,vertiData.length-1);
		$(this).attr('src', vertiData[vertiIndex].src )
	})
	
	$(".btn").click(function(){
//		if( fnName &&  )
		var brr = getCookie("admin");
		var name = $("#uname").val();
		var pwd = $("#upwd").val();
		var yan = $("#uyan").val();
		var flag = true;
		if( name ){
			if( pwd ){
				if( yan == vertiData[vertiIndex].ans ){//判断验证码
					for( var i = 0; i < brr.length; i++ ){
						if( brr[i].flagName == name ){
							if( brr[i].flagPwd == pwd ){
								alert("登录成功")
								flag = false;
								break;
							}else{//密码错误
								$ulist.eq(4).css("display","block")
											  .siblings()
											  .css("display","none")
								flag = false;
								break;
							}
						}
					}
					if(flag){//用户名不存在
						$ulist.eq(3).css("display","block")
											  .siblings()
											  .css("display","none")
					}
				}else{//验证码不正确
					$ulist.eq(5).css("display", "block")
								.siblings()
						 		.css("display","none")
				}
			}else{
				$ulist.eq(1).css("display","block")
				  .siblings()
				  .css("display","none")
			}
			
		}else{
			$ulist.eq(0).css("display","block")
				  .siblings()
				  .css("display","none")
		}
		
	})
	
//	鼠标划上左侧nav
	var $leftNav = $('.slidebar-min').children().not(".er")
	$leftNav.hover(function(){
		$(this).css("background","#d62233")
			   .find(".jian-right")
			   .css("display","block")
			   .end()
			   .find(".jian-left")
			   .css("display","block")
			   .end()
			   .find("p")
			   .css("display","block")
			   .animate( {left:-86},300 )
	},function(){
		$(this).css("background","")
			   .find(".jian-right")
			   .css("display","none")
			   .end()
			   .find(".jian-left")
			   .css("display","none")
			   .end()
			   .find("p")
			   .css("display","none")
			   .animate({left:-43},200)
	})
	
	$leftNav.click(function(){//点击添加颜色
		$(this).addClass('lenav')
			   .siblings()
			   .removeClass("lenav")
	})
	$('.er').hover(function(){
		$(this).css("background","#d62233")
			   .find(".jian-right")
			   .css("display","block")
			   .end()
			   .find(".jian-left")
			   .css("display","block")
			   .end()
			   .find("p")
			   .css("display","block")
			   .animate( {left:-150},300 )
	},function(){
		$(this).css("background","")
			   .find(".jian-right")
			   .css("display","none")
			   .end()
			   .find(".jian-left")
			   .css("display","none")
			   .end()
			   .find("p")
			   .css("display","none")
			   .animate({left:-110},200)
	})
	$('.TOP').click(function(){
		$("html,body").animate( {scrollTop : 0},300)
	})
	$('.box-jian').click(function(){
		$('.right-slidebar').animate({ right : -276});
		$leftNav.eq(0).removeClass("lenav");
	})
	var slidebar = $('.slidebar-min').children().not(".tttt");
	slidebar.click(function(){
		$('.right-slidebar').animate({ right : 0});
	})
}
