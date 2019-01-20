window.onload = function(){
	//吸顶效果
	$(window).scroll(function(){
		if( $(".fileheader").offset().top > 200 ){
			$(".fileheader").slideDown(200)
		}else if( $(".fileheader").offset().top < 100 ){
			$(".fileheader").slideUp(200)
		}
	})
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
	/*var a = $(".floor1 .xia-ol li a");
	var b = $(".floor1 .xia-ul");
	var c = $(".floor1 .xia-ul li");
	var d = $(".floor1 .xia-ol li")*/
	new gouzhao( $(".floor1 .xia-ol li a"),$(".floor1 .xia-ul"),$(".floor1 .xia-ul li"),$(".floor1 .xia-ol li")).init();
	new gouzhao( $(".floor2 .xia-ol li a"),$(".floor2 .xia-ul"),$(".floor2 .xia-ul li"),$(".floor2 .xia-ol li")).init();
//	new gouzhao( x ,e,r,t).init();
	
	function gouzhao(obj,obj1,obj2,obj3 ){
/*		obj = $(".xia-ol li a");
		obj1 = $(".xia-ul");
		obj2 = $(".xia-ul li");
		obj3 = $(".xia-ol li");*/
		var timerIndex = 0;//记录a标签的位置
		var timerOindex = 0;//记录图片的位置
		var olaTimer = null;
		flagTimer = true;//开关变量
			this.init = function( ){
//				console.log(obj,boj1,boj2,obj3)
			obj.eq( timerIndex ).css("width",0)
			olaTimer = setInterval( olaplay,100 );
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
				clearInterval( olaTimer )
				var index = $(this).index();
				flagTimer = false;
				obj.eq(index).css("width",30);
				return false;
			},function(){
				olaTimer = setInterval( olaplay ,100 );
				obj.eq(timerOindex).css("width",0);
				flagTimer = true;
				return false;
			}).bind(this)
			//鼠标划上ola切换图片
			obj3.hover(function(){
				clearInterval( olaTimer )
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
				olaTimer = setInterval( olaplay ,100 );
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
//			console.log(json)
			var jsonindex = 0;
			var strlou = "";
			var strbig = "";
			for(var cname in json){
				var pro = json[cname].list;
				/*console.log( json[cname])
				console.log( json[cname].list.src1 )*/
				if( cname == "floor4" || cname == "floor7"){
					strbig = `<div class="floor4">
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
					$(".floor-box").append( strbig )
				}else{
					strlou = `<div class="floor3">
								<div class="wrap">
									<h3>${json[cname].name}</h3>
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
					$(".floor-box").append( strlou )
				}
			}
		}
	});
	var x = $(".floor3 .xia-ol li a")
	var e = $(".floor3 .xia-ul")
	var r = $(".floor3 .xia-ul li")
	var t = $(".floor3 .xia-ol li")
	var nn = document.querySelector(".floor-box")

//	var pp = $(".floor-box").find(".floor3")
//	var nn = document.getElementsByClassName(".floor-box")[1]
//	var nn1 = $(".floor2")
//	new gouzhao( x, e ,r , t).init()
var ool = null;
	$("body,html").on("mouseenter",".floor3 .xia-ol li a",function(){
		xiaola = $(this);
		console.log(123)
	}).on("mouseenter",".floor3 .xia-ul",function(){
		xiaul = $(this)
		console.log(456)
	})
	
	$(document).click(function(){
		console.log(xiaola)
		console.log( xiaul )
	})
/*	$(".floor-box").on("mouseenter",function(){
		console.log(222222222)
	})*/
	
/*	nn.onmouseenter = function(){
		console.log(1111111111)
	}*/
/*	pp.hover(function(){
		console.log(123)
	})
*/
}
