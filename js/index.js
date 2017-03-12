$(function(){
	var slidesImgLen=$(".slides ul li").length;
	var i=0;
	var times;
	$(".slides ul li").hide();
	$(".slides ul li").eq(0).show();
	$(".slidesSelect span").attr({"class":"bai"});
	$(".slidesSelect span").eq(0).attr({"class":"lan"});
	times=setInterval(function(){
		  i+=1;
		  if(i==slidesImgLen){i=0;imgShow(i);}
		  else{imgShow(i);}
          },2500);
    $(".slides").hover(
	function(){
			clearInterval(times);	
		},function(){
			times=setInterval(function(){
				i+=1;
				if(i==slidesImgLen){i=0;}
				imgShow(i);
			},2500);	
		}
	)
     $(".slidesSelect span").mouseover(function(){
		 var j=$(".slidesSelect span").index(this);
		 i=j;
         imgShow(i);
		 })
	  function imgShow(i){
		  $(".slides ul li").hide();
		  $(".slides ul li").eq(i).stop().fadeIn();
		  $(".slidesSelect span").attr({"class":"bai"});
		  $(".slidesSelect span").eq(i).attr({"class":"lan"});
		  }
	})
	
	//活动中心
$(function(){
  $(".activity_slides ul li").hide();
  $(".activity_slides ul li").eq(0).show();
  var mainRightTopSlides_lens=$(".activity_slides ul li").length;
  $(".activity_slides_select a").css({"background-color":"#fff","color":"#00521c"});
  $(".activity_slides_select a").eq(0).css({"background-color":"#00521c","color":"#fff"});
  var time;
  var j=0;
  
  time=setInterval(function(){
	  j+=1;
	  if(j>mainRightTopSlides_lens-1){j=0;}
	  sprots(j);	
  }	,3000);//初始化开始调用切换
  
  
  $(".activity_slides").hover(
	  function(){
		  clearInterval(time);
	  },function(){
		  time=setInterval(function(){
			  j+=1;
			  if(j>mainRightTopSlides_lens-1){j=0;}
			  sprots(j);	
		  }	,3000);
	  }
  )//鼠标移上slidesNav容器停止调用，移开继续调用
  
  $(".activity_slides_select a").mouseover(function(){
	  var indexs=$(".activity_slides_select a").index(this);	
	  j=indexs;
	  sprots(j);
  })//鼠标以上选项卡切换
  
  function sprots(j){
	  $(".activity_slides_select a").css({"background-color":"#fff","color":"#00521c"});
	  $(".activity_slides_select a").eq(j).css({"background-color":"#00521c","color":"#fff"});
	  $(".activity_slides ul li").hide();
	  $(".activity_slides ul li").eq(j).stop().fadeIn();
  }
})

$(function(){
		$(".member_center_left ul li").css({"color":"#4d4d4d"});
		$(".member_center_left ul li").eq(0).css({"color":"#5ca131"});
		$(".member_right dt").hide();
		$(".member_right dt").eq(0).show();	
		$(".member_center_left ul li").click(function(){
			var i=$(".member_center_left ul li").index(this);	
			$(".member_center_left ul li").css({"color":"#4d4d4d"});
			$(".member_center_left ul li").eq(i).css({"color":"#5ca131"});
			$(".member_right dt").hide();
			$(".member_right dt").eq(i).show();	
			$(".member_right h2 span:first").html($(".member_center_left ul li").eq(i).html());
			$(".member_right h2 span:last").html($(".member_center_left ul li").eq(i).html());
		})
})
