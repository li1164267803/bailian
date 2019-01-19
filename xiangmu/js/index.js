window.onload = function(){
	//吸顶效果
	$(window).scroll(function(){
		if( $(".fileheader").offset().top > 200 ){
			$(".fileheader").slideDown(200)
			console.log(2)
		}else if( $(".fileheader").offset().top < 100 ){
			$(".fileheader").slideUp(200)
		}
		console.log(  )
//		console.log(1)
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
	var ulist = $(".banner-wrap ul").find("li");
	var olist = $(".banner-wrap ol").find("li");
	var timer = null;
	var index = 0;
	timer = setInterval(autoplay,2000);
	function autoplay(){
		index++;
		if(index == olist.length){
			index = 0
		}
		ulist.eq(index).fadeIn(200).siblings().fadeOut();
		olist.eq(index).addClass("current").siblings().removeClass()
	};
	olist.hover(function(){
		clearInterval(timer);
		var index = $(this).index();
		ulist.eq(index).fadeIn(200).siblings().fadeOut();
		olist.eq(index).addClass("current").siblings().removeClass()
	},function(){
		timer = setInterval(autoplay,2000);
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
	var $list = $(".box-list").children()
	$list.hover(function(){
		$(this).find("img").stop().animate( {width:154,height:154},300 );
	},function(){
		$(this).find("img").stop().animate( {width:140,height:140},300 )
	})
	var timerIndex = 0;
	var timerOindex = 0;
	var i = 0
	setInterval(function(){
		timerIndex++;
		if( timerIndex == 4 ){
			timerIndex = 1;
		}
		$(".xia-ol li a").eq( timerIndex-1 ).addClass("beijing").animate( { width : 36 },1000,function(){
			timerOindex++;
			if( timerOindex == 4 ){
				timerOindex = 1;
				$(".xia-ul").css("left",0)
			}
			$(".xia-ul").animate( {left : -305 * timerOindex},1000);
//			$(this).siblings().removeClass()
		} )
	}.bind($(".xia-ol li a")),2000)
}
