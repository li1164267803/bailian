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
	var timerIndex = 0;//记录a标签的位置
	var timerOindex = 0;//记录图片的位置
	var olaTimer = null;
	var flagTimer = true;//开关变量
	var ola = $(".xia-ol li a");
		ola.eq( timerIndex ).css("width",0)
		olaTimer = setInterval( olaplay,100 );
		function olaplay(){
			var nowWidth = parseInt( ola.eq( timerIndex ).width() )
			if( nowWidth < 30 ){
				barWidth = ( nowWidth + 1 )+'px';
				ola.eq( timerIndex ).css( { width : barWidth, "background" : "#938f7f" } );
//				console.log( nowWidth )
			}else{
				if( !flagTimer ){
					return;
				}
				timerOindex++;
				$(".xia-ul").animate( {left : -305 * timerOindex},400,function(){
					if( timerOindex == 3 ){//回调重新判断图片的位置
						timerOindex = 0
						$(".xia-ul").css("left",0)
					}
				});
					ola.eq( timerIndex ).css("width",0);
					ola.eq( timerIndex+1 ).css("width",0);
					timerIndex++;
					if( timerIndex == 3 ){
						timerIndex = 0;
					}
			}
		}
		//鼠标划上轮播图停止
		$(".xia-ul li").hover(function(){
			clearInterval( olaTimer )
			var index = $(this).index();
			flagTimer = false;
			ola.eq(index).css("width",30);
			return false;
		},function(){
			olaTimer = setInterval( olaplay ,100 );
			ola.eq(index).css("width",0);
			flagTimer = true;
			return false;
		})
		//鼠标划上ola切换图片
		$(".xia-ol li").hover(function(){
			clearInterval( olaTimer )
			var index = $(this).index();
			$(".xia-ul").animate( {left : -305 * index} );
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
		})
	
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
}
