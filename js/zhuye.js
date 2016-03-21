$(function() {
	var hh=$(window).height()*0.5;
	$('.neirong').css({height: hh});
	$('.fa').click(function(){
		$('#footer').css({display: 'none'});
	})
	$('.btn1').click(function(){
		$('.neirong').css({display: 'none'});
		$('.neirong').css({opacity: 0});
		$('.neirong1').css({display: 'block'}).animate({opacity: 1},600);
		/*$('nav').css({display: 'block'});*/
	})
	$('.btn2').click(function(){
		$('.neirong').css({display: 'none'});
		$('.neirong').css({opacity: 0});
		$('.neirong2').css({display: 'block'}).animate({opacity: 1},600);
	})
	$('.btn3').click(function(){
		$('.neirong').css({display: 'none'});
		$('.neirong').css({opacity: 0});
		$('.neirong3').css({display: 'block'}).animate({opacity: 1},600);
	})
	$('.btn4').click(function(){
		$('.neirong').css({display: 'none'});
		$('.neirong').css({opacity: 0});
		$('.neirong4').css({display: 'block'}).animate({opacity: 1},600);
	})
	$('.btn5').click(function(){
		$('.neirong').css({display: 'none'});
		$('.neirong').css({opacity: 0});
		$('.neirong5').css({display: 'block'}).animate({opacity: 1},600);
	})

	var $neirong=$('.neirong');
	$neirong.bind('swipeLeft',function(){
		if($(this).next().length){
			$(this).css({display: 'none',opacity: 0});
			$(this).next().css({display: 'block'}).animate({opacity: 1},600);
		}else{
			$(this).css({display: 'block'}).animate({opacity: 1},600);
		}
		      $(".c1").animate({
				  height: "98%"
			  },2000);
			  $(".c2").animate({
				  height: "98%"
			  },2000)
			  $(".c3").animate({
				  height: "99%"
			  },2000)
			  $(".c4").animate({
				  height: "99%"
			  },2000)
			  $(".c5").animate({
				  height: "90%"
			  },2000)
			  $(".c6").animate({
				  height: "90%"
			  },2000)
	})
	$neirong.bind('swipeRight',function(){
		if($(this).prev().length){
			$(this).css({display: 'none',opacity: 0});
			$(this).prev().css({display: 'block'}).animate({opacity: 1},600);
		}else{
			$(this).css({display: 'block'}).animate({opacity: 1},600);
		}
		      $(".c1").animate({
				  height: "98%"
			  },2000);
			  $(".c2").animate({
				  height: "98%"
			  },2000)
			  $(".c3").animate({
				  height: "99%"
			  },2000)
			  $(".c4").animate({
				  height: "99%"
			  },2000)
			  $(".c5").animate({
				  height: "90%"
			  },2000)
			  $(".c6").animate({
				  height: "90%"
			  },2000)
	})

	$('.zhuye').click(function(){
		$('.neirong').css({display: 'none'});
	})

	   
	   $('.btn3').click(function(){
	      $(".c1").animate({
			  height: "98%"
		  },2000);
		  $(".c2").animate({
			  height: "98%"
		  },2000)
		  $(".c3").animate({
			  height: "99%"
		  },2000)
		  $(".c4").animate({
			  height: "99%"
		  },2000)
		  $(".c5").animate({
			  height: "90%"
		  },2000)
		  $(".c6").animate({
			  height: "90%"
		  },2000)

	   })	
	   
})