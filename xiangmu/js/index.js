window.onload = function(){
	//吸顶效果
	$(window).scroll(function(){
		if( $(".fileheader").offset().top > 200 ){
			$(".fileheader").slideDown(200)
		}else if( $(".fileheader").offset().top < 100 ){
			$(".fileheader").slideUp(200)
		}
	})
	//判断是否已经登录
	var denglustr = getCookie('admin')[0].flagName;
	if( denglustr ){
		$('.bl-right ul li').eq(0).html( '尊敬的  '+denglustr+ ' 您好！' )
	}
//	顶部左边划上小箭头
	$(".bl-left").hover(function(){
		$(".gang").html("&nbsp;");
		$(this).find("i").addClass("test-inverse")
	},function(){
		$(".gang").html("|");
		$(this).find("i").removeClass().addClass("test-normal")
	})
	//顶部右边鼠标划上小箭头
	$(".leftfont").hover(function(){
		$(this).find("i").addClass("test-inverse")
	},function(){
		$(this).find("i").removeClass().addClass("test-normal")
	})
//	banner图右的鼠标划上
	$('.right-bottom li a').hover(function(){
		$(this).find('div').css('background-position-y',-28)
	},function(){
		$(this).find('div').css('background-position-y',0)
	})
//	banner轮播图
	var ulist = $(".banner-wrap .banner-ul").find("li");
	var olist = $(".banner-wrap .banner-ol").find("li");
	var bannerTimer = null;
	var bannerIndex = 0;
	bannerTimer = setInterval(bannerplay,2000);
	function bannerplay(){
		bannerIndex++;
		if(bannerIndex == olist.length){
			bannerIndex = 0
		}
		ulist.eq(bannerIndex).fadeIn(200).siblings().fadeOut();
		olist.eq(bannerIndex).addClass("current").siblings().removeClass()
	};
	olist.hover(function(){
		clearInterval(bannerTimer);
		var bannerIndex = $(this).index();
		ulist.eq(bannerIndex).fadeIn(200).siblings().fadeOut();
		olist.eq(bannerIndex).addClass("current").siblings().removeClass()
	},function(){
		bannerTimer = setInterval(bannerplay,2000);
	})
	
//	banner图下的nav
	$(".box-right").click(function(){
		$(".box-list").animate( {left:-960},800,function(){
			$(".box-right").css("display","none")
			$(".box-left").css("display","block");
		} )
	})
	$(".box-left").click(function(){
		$(".box-list").animate( {left:0},800,function(){
			$(".box-left").css("display","none")
			$(".box-right").css("display","block");
		} )
	})
//	图片划上的变大
	var $list = $(".box-list").children()
	$list.hover(function(){
		$(this).find("img").stop().animate( {width:154,height:154},300 );
	},function(){
		$(this).find("img").stop().animate( {width:140,height:140},300 )
	})
	//图片的轮播
	new gouzhao( $(".box-xia .xia-ol li a"),$(".box-xia .xia-ul"),$(".box-xia .xia-ul li"),$(".box-xia .xia-ol li")).init();	
	function gouzhao(obj,obj1,obj2,obj3 ){
/*		obj = $(".xia-ol li a");
		obj1 = $(".xia-ul");
		obj2 = $(".xia-ul li");
		obj3 = $(".xia-ol li");*/
		var timerIndex = 0;//记录a标签的位置
		var timerOindex = 0;//记录图片的位置
		obj.olaTimer = null;
		flagTimer = true;//开关变量
			this.init = function( ){
//				console.log(obj,boj1,boj2,obj3)
			obj.eq( timerIndex ).css("width",0)
			obj.olaTimer = setInterval( olaplay,100 );
			function olaplay(){
//				console.log(12)
				var nowWidth = parseInt( obj.eq( timerIndex ).width() )
//				console.log( nowWidth )
				if( nowWidth < 30 ){
					barWidth = ( nowWidth + 1 )+'px';
					obj.eq( timerIndex ).css( { width : barWidth, "background" : "#938f7f" } );
//					console.log( nowWidth )
				}else{
					if( !flagTimer ){
						return;
					}
					timerOindex++;
//					console.log( timerOindex )
					obj1.animate( {left : -305 * timerOindex},400,function(){
						if( timerOindex == 3 ){//回调重新判断图片的位置
							timerOindex = 0
							obj1.css("left",0)
						}
					});
						obj.eq( timerIndex ).css("width",0);
						obj.eq( timerIndex+1 ).css("width",0);
						timerIndex++;
						if( timerIndex == 3 ){
							timerIndex = 0;
						}
				}
			}
			//鼠标划上轮播图停止
			obj2.hover(function(){
				clearInterval( obj.olaTimer )
				var index = $(this).index();
				flagTimer = false;
				obj.eq(index).css("width",30);
				return false;
			},function(){
				obj.olaTimer = setInterval( olaplay ,100 );
				obj.eq(timerOindex).css("width",0);
				flagTimer = true;
				return false;
			}).bind(this)
			//鼠标划上ola切换图片
			obj3.hover(function(){
				clearInterval( obj.olaTimer )
				var index = $(this).index();
				obj1.animate( {left : -305 * index} );
				 $(this).find("a")
					   	.css( {"width" : "30px" , "background" : "938f7f"} )
						.end()
						.siblings()
						.find("a")
						.css("width",0)
				flagTimer = false;
				return false;
			},function(){
				timerIndex = timerOindex = $(this).index();
				 $(this).find("a")
					    .css("width",0)
					    .end()
						.siblings()
						.find("a")
						.css("width",0)
				obj.olaTimer = setInterval( olaplay ,100 );
				flagTimer = true;
				return false;
			}).bind(this)
			}
		
	}
	
//	下右图片划上的变大
	var $xialist = $(".xia-right ul li")
	$xialist.hover(function(){
		$(this).find("img").stop().animate( {width:313,height:198},300 );
	},function(){
		$(this).find("img").stop().animate( {width:285,height:180},300 )
	})
	
//	1楼梯右
	$(".floor1-right li").hover(function(){
		$(this).find("img").stop().animate({ "margin-left" : -10 })
	},function(){
		$(this).find("img").stop().animate({ "margin-left" : 0 })
	})
//	2楼梯右
	$(".floor2-right li").hover(function(){
		$(this).find("img").stop().animate({ "margin-left" : -10 })
	},function(){
		$(this).find("img").stop().animate({ "margin-left" : 0 })
	})
//	委托图片划上向左移动
	$(".floor-box").on("mouseenter","li:not(.sanmin-left li)",function(){
		$(this).find("img").stop().animate({ "margin-left" : -10 });
	}).on("mouseleave","li",function(){
		$(this).find("img").stop().animate({ "margin-left" : 0 });
	}).on("mouseenter",".sanmin-bottom a img",function(){
		$(this).fadeTo(0,0.7);
	}).on("mouseleave",".sanmin-bottom a img",function(){
		$(this).fadeTo(0,1);
	})
//	开始动态创建楼梯
	$.ajax({
		type:"get",
		url:"js/data.json?id="+new Date().getTime(),
		async:true,
		success : function(json){
			var box = $(".floor-box")
//			console.log(json)
			var jsonindex = 0;
			var strlou = "";
			var strbig = "";
			for(var cname in json){
				var pro = json[cname].list;
				/*console.log( json[cname])
				console.log( json[cname].list.src1 )*/
				if( cname == "floor4" || cname == "floor7"){
					strbig = `<div class="floor4 Louti">
									<div class="wrap">
										<h3>${json[cname].name}</h3>
										<div class="sanmin-left">
											<ul class="xia-ul Ull">
												<li><a href=""><img src="img/index/${pro.src1}"/></a></li>
												<li><a href=""><img src="img/index/${pro.src2}"/></a></li>
												<li><a href=""><img src="img/index/${pro.src3}"/></a></li>
												<li><a href=""><img src="img/index/${pro.src1}"/></a></li>
											</ul>
											<ol class="xia-ol">
												<li style="margin-right: 8px;"><a href="javascript:;"></a></li>
												<li style="margin-right: 8px;"><a href="javascript:;"></a></li>
												<li><a href="javascript:;"></a></li>
											</ol>
										</div>
										<div class="sanbig-right">
											<div class="sanbig-right-top">
												<div class="sanbig-big">
													<li><a href=""><img src="img/index/${pro.src4}"/></a></li>
												</div>
												<div class="sanbing-zhong">
													<li><a href=""><img src="img/index/${pro.src5}"/></a></li>
												</div>
												<div class="sanbing-rig">
													<li><a style="border-bottom: 1px solid #ebebeb;" href=""><img src="img/index/${pro.src6}"/></a></li>
													<li><a href=""><img src="img/index/${pro.src7}"/></a></li>
												</div>
											</div>
											<ul>
												<li class="last-img"><a href=""><img src="img/index/${pro.src8}"/></a></li>
												<li class="last-img"><a href=""><img src="img/index/${pro.src9}"/></a></li>
												<li class="last-img"><a href=""><img src="img/index/${pro.src10}"/></a></li>
												<li class="last-img"><a href=""><img src="img/index/${pro.src11}"/></a></li>
											</ul>
										</div>
										<div class="sanmin-bottom">
											<a href=""><img src="img/index/${pro.src12}"/></a>
											<a href=""><img src="img/index/${pro.src13}"/></a>
											<a href=""><img src="img/index/${pro.src14}"/></a>
											<a href=""><img src="img/index/${pro.src15}"/></a>
											<a href=""><img src="img/index/${pro.src16}"/></a>
										</div>
									</div>
								</div>`
//					$(".floor-box").append( strbig );
					$(strbig).appendTo( $(".floor-box") )
				}else{
					strlou = `<div class="floor3 Louti">
								<div class="wrap">
									<h3 name="qweq">${json[cname].name}</h3>
									<div class="sanmin-left">
										<ul class="xia-ul">
											<li><a href=""><img src="img/index/${pro.src1}"/></a></li>
											<li><a href=""><img src="img/index/${pro.src2}"/></a></li>
											<li><a href=""><img src="img/index/${pro.src3}"/></a></li>
											<li><a href=""><img src="img/index/${pro.src1}"/></a></li>
										</ul>
										<ol class="xia-ol">
											<li style="margin-right: 8px;"><a href="javascript:;"></a></li>
											<li style="margin-right: 8px;"><a href="javascript:;"></a></li>
											<li><a href="javascript:;"></a></li>
										</ol>
									</div>
									<div class="sanmin-right">
										<ul>
											<li class="fast2-img"><a href=""><img src="img/index/${pro.src4}"/></a></li>
											<li class="fast2-img"><a href=""><img src="img/index/${pro.src5}"/></a></li>
											<li class="fast2-img"><a href=""><img src="img/index/${pro.src6}"/></a></li>
											<li class="fast2-img"><a href=""><img src="img/index/${pro.src7}"/></a></li>
											<li class="last-img"><a href=""><img src="img/index/${pro.src8}"/></a></li>
											<li class="last-img"><a href=""><img src="img/index/${pro.src9}"/></a></li>
											<li class="last-img"><a href=""><img src="img/index/${pro.src10}"/></a></li>
											<li class="last-img"><a href=""><img src="img/index/${pro.src11}"/></a></li>
										</ul>
									</div>
									<div class="sanmin-bottom">
										<a href=""><img src="img/index/${pro.src12}"/></a>
										<a href=""><img src="img/index/${pro.src13}"/></a>
										<a href=""><img src="img/index/${pro.src14}"/></a>
										<a href=""><img src="img/index/${pro.src15}"/></a>
										<a href=""><img src="img/index/${pro.src16}"/></a>
									</div>
								</div>
							</div>`
//					$(".floor-box").append( strlou );
					$(strlou).appendTo( $(".floor-box") )
				}
			}
//			new gouzhao(  $(".floor3 .xia-ol li a"),  $(".floor3 .xia-ul"),  $(".floor3 .xia-ul li"),$(".floor3 .xia-ol li") ).init()
//			new gouzhao(  $(".floor4 .xia-ol li a"),  $(".floor4 .xia-ul"),  $(".floor4 .xia-ul li"),$(".floor4 .xia-ol li") ).init()
			var floorChil = $(".floor-box").children();
//			console.log( floorChil )
			var floorChil1 = floorChil.eq(0).find(".xia-ol li a");
			var floorChil2 = floorChil.eq(0).find(".xia-ul");
			var floorChil3 = floorChil.eq(0).find(".xia-ul li");
			var floorChil4 = floorChil.eq(0).find(".xia-ol li");
			new gouzhao(  floorChil1, floorChil2,  floorChil3,floorChil4 ).init();
			
			new gouzhao(  floorChil.eq(1).find(".xia-ol li a"), 
						  floorChil.eq(1).find(".xia-ul"),
						  floorChil.eq(1).find(".xia-ul li"),
						  floorChil.eq(1).find(".xia-ol li") )
						.init();
			new gouzhao(  floorChil.eq(2).find(".xia-ol li a"), 
						  floorChil.eq(2).find(".xia-ul"),
						  floorChil.eq(2).find(".xia-ul li"),
						  floorChil.eq(2).find(".xia-ol li") )
						.init();
			new gouzhao(  floorChil.eq(3).find(".xia-ol li a"), 
						  floorChil.eq(3).find(".xia-ul"),
						  floorChil.eq(3).find(".xia-ul li"),
						  floorChil.eq(3).find(".xia-ol li") )
						.init();
			new gouzhao(  floorChil.eq(4).find(".xia-ol li a"), 
						  floorChil.eq(4).find(".xia-ul"),
						  floorChil.eq(4).find(".xia-ul li"),
						  floorChil.eq(4).find(".xia-ol li") )
						.init();
			new gouzhao(  floorChil.eq(5).find(".xia-ol li a"), 
						  floorChil.eq(5).find(".xia-ul"),
						  floorChil.eq(5).find(".xia-ul li"),
						  floorChil.eq(5).find(".xia-ol li") )
						.init();
			new gouzhao(  floorChil.eq(6).find(".xia-ol li a"), 
						  floorChil.eq(6).find(".xia-ul"),
						  floorChil.eq(6).find(".xia-ul li"),
						  floorChil.eq(6).find(".xia-ol li") )
						.init();
			new gouzhao(  floorChil.eq(7).find(".xia-ol li a"), 
						  floorChil.eq(7).find(".xia-ul"),
						  floorChil.eq(7).find(".xia-ul li"),
						  floorChil.eq(7).find(".xia-ol li") )
						.init();
			
			//楼梯点击
			var $alist = $(".loucheng a").not(".loulast")//获取楼层号
			var $foor = $(".Louti")//获取楼层
			var fooFlag = true;
			$alist.click(function(){
				fooFlag = false;
				$(this).addClass("louhua")
					   .siblings()
					   .removeClass("louhua")
				var index = $(this).index();
				var t = $foor.eq(index).offset().top-100;
				//滚动的距离
				$("body,html").animate({scrollTop : t},1000,function(){
					fooFlag = true;
				})
			})
			//回到顶部
			$(".loulast").click(function(){
				$("html,body").animate( {scrollTop : 0},600,function(){
					fooFlag = true;
				} )
			})
			//滚动条操作
			$(window).scroll(function(){
				if(fooFlag){
					var sTop = $(document).scrollTop();
					var f = $foor.filter(function(){
						return Math.abs( $(this).offset().top - sTop ) < $(this).height()/2;

					 })
				   	var findex = f.index();
				   	if( findex != -1 ){
				   		$alist.eq(findex)
				   			  .addClass("louhua")
				   			  .siblings()
				   			  .removeClass("louhua");
				   	}
				   	if( sTop < 300 ){
				   		$alist.removeClass()
				   	}
				}
				
			})
		}
	})
	
	//动态获取猜你喜欢
	$.ajax({
		type:"get",
		url:"js/like.json?id="+new Date().getTime(),
		async:true,
		success : function(json){
			var str = "";
			for(var i = 0; i < json.list.length; i++){
				var pro = json.list[i]
				str += `<li>
							<a class="a-img" href=""><img src="img/index/${pro.src}"/></a>
							<p><a href="">${pro.str}</a></p>
							<div class="like-money">
								￥<span style="font-size: 18px;">${pro.monry}</span>
								<a href="javascript:;">收藏</a>
							</div>
						</li>`
				
			}
			$(".like-ol ol").html( str )
		}
	});
	//隐藏楼层号
	$(window).scroll(function(){
		var Top = $(window).scrollTop()
		if( Top < 1000 ){
			$(".loucheng").css("display","none")
		}else{
			$(".loucheng").css("display","block")
		}
		
	})

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
			console.log(json);
			vertiData = json;
			vertiIndex = rand(0,vertiData.length-1);
			$('.img-yan img').attr('src', vertiData[vertiIndex].src )
			console.log( vertiData[vertiIndex].src )
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
	//页面最上方登录按钮
	$('.denglu').click(function(){
		$('.right-slidebar').animate({ right : 0});
	})
}
