window.onload = function(){
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
	
//	轮播图
	var ulist = $(".banner-wrap ul").find("li");
	var olist = $(".banner-wrap ol").find("li");
	var timer = null;
	var index = 0;
	timer = setInterval(function(){
		index++;
		if(index == olist.length){
			index = 0
		}
		ulist.eq(index).fadeIn(200).siblings().fadeOut();
		olist.eq(index).addClass("current").siblings().removeClass()
	},2000)
}
