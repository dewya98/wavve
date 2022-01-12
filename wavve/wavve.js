$(document).ready(function(){
   if($.cookie("nopopup1")=="Y"){
       $("#pop01").hide();
   }else{
       $("#pop01").show();
   } 

   
   $("#close01").click(function(){
       if(document.frm1.popup01.checked){
           $.cookie("nopopup1","Y",{expires:1}); //쿠키에 변수 nopopup1에 Y에 1일 만료기간 설정
        }
        $("#pop01").hide();
    });

    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $(".top").fadeIn();
        }else{
            $(".top").fadeOut();
        }
    });
    $(".top").click(function(){
        $("body,html").animate({scrollTop:0},800);
    });
    
});


$(".menu>li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
});
$(".menu>li").mouseout(function(){
    $(this).children(".submenu").stop().slideUp();
});

$(".search").click(function(){
$(".pop").addClass("active");
});
$(".pop>button").click(function(){
$(".pop").removeClass("active");
});

var img=7;
var now=0;
var play;
var sp=screen.width/2-345;
var mode=true;
start();

$(".prev").click(function(){
 if(now==0){
    now==7;
 }else{
     now--;
 };
 clearInterval(play);
 curr_slide(now);
 if(mode==true){
     play=setInterval(function(){slide();},3000);
 }
});

$(".next").click(function(){
 if(now==img){
    now==0;
 }else{
     now++;
 };
 clearInterval(play);
 curr_slide(now);
 if(mode==true){
     play=setInterval(function(){slide();},3000);
 }
});

$(".play").click(function(){
 play=setInterval(function(){slide();},3000);
 $(this).css("display","none");
 $(".stop").css("display","block");
 mode=true;
});
$(".stop").click(function(){
 clearInterval(play);
 $(this).css("display","none");
 $(".play").css("display","block");
 mode=true;
});

$(".dot").click(function(){
    now=$(this).index();
    clearInterval(play);
    curr_slide(now);
    if(mode=true){
        play=setInterval(function(){slide();},3000);
    }
});

function start(){
    $(".slides>img").eq(0).css("left",-2100+sp);
    $(".slides>img").eq(1).css("left",-1400+sp);
    $(".slides>img").eq(2).css("left",-700+sp);
    $(".slides>img").eq(3).css("left",0+sp);
    $(".slides>img").eq(4).css("left",700+sp);
    $(".slides>img").eq(5).css("left",1400+sp);
    $(".slides>img").eq(6).css("left",2100+sp);
    $(".slides>img").eq(7).css("left",2800+sp);
    $(".dot").eq(0).css("background-color","blue");
    $(".dot").eq(0).siblings().css("background-color","#aaa")
    play=setInterval(function(){slide();},3000);
};

function slide(){
 if(img==now){
    now=0;
 }else{
     now++;
 };
 curr_slide(now);
};
 function curr_slide(e){
     if(e==1){
         $(".slides>img").eq(1).css("left",-2100+sp);
         $(".slides>img").eq(2).css("left",-1400+sp);
         $(".slides>img").eq(3).css("left",-700+sp);
         $(".slides>img").eq(4).css("left",0+sp);
         $(".slides>img").eq(5).css("left",700+sp);
         $(".slides>img").eq(6).css("left",1400+sp);
         $(".slides>img").eq(7).css("left",2100+sp);
         $(".slides>img").eq(8).css("left",2800+sp);
         $(".dot").eq(1).css("background-color","blue");
         $(".dot").eq(1).siblings().css("background-color","#aaa")
        }else if(e==2){
            $(".slides>img").eq(2).css("left",-2100+sp);
            $(".slides>img").eq(3).css("left",-1400+sp);
            $(".slides>img").eq(4).css("left",-700+sp);
            $(".slides>img").eq(5).css("left",0+sp);
            $(".slides>img").eq(6).css("left",700+sp);
            $(".slides>img").eq(7).css("left",1400+sp);
            $(".slides>img").eq(0).css("left",2100+sp);
            $(".slides>img").eq(1).css("left",2800+sp);
            $(".dot").eq(2).css("background-color","blue");
            $(".dot").eq(2).siblings().css("background-color","#aaa")
   
        }else if(e==3){
            $(".slides>img").eq(3).css("left",-2100+sp);
            $(".slides>img").eq(4).css("left",-1400+sp);
            $(".slides>img").eq(5).css("left",-700+sp);
            $(".slides>img").eq(6).css("left",0+sp);
            $(".slides>img").eq(7).css("left",700+sp);
            $(".slides>img").eq(0).css("left",1400+sp);
            $(".slides>img").eq(1).css("left",2100+sp);
            $(".slides>img").eq(2).css("left",2800+sp);
            $(".dot").eq(3).css("background-color","blue");
            $(".dot").eq(3).siblings().css("background-color","#aaa")
   
        }else if(e==4){
            $(".slides>img").eq(4).css("left",-2100+sp);
            $(".slides>img").eq(5).css("left",-1400+sp);
            $(".slides>img").eq(6).css("left",-700+sp);
            $(".slides>img").eq(7).css("left",0+sp);
            $(".slides>img").eq(0).css("left",700+sp);
            $(".slides>img").eq(1).css("left",1400+sp);
            $(".slides>img").eq(2).css("left",2100+sp);
            $(".slides>img").eq(3).css("left",2800+sp);
            $(".dot").eq(4).css("background-color","blue");
            $(".dot").eq(4).siblings().css("background-color","#aaa")
   
        }else if(e==5){
            $(".slides>img").eq(5).css("left",-2100+sp);
            $(".slides>img").eq(6).css("left",-1400+sp);
            $(".slides>img").eq(7).css("left",-700+sp);
            $(".slides>img").eq(0).css("left",0+sp);
            $(".slides>img").eq(1).css("left",700+sp);
            $(".slides>img").eq(2).css("left",1400+sp);
            $(".slides>img").eq(3).css("left",2100+sp);
            $(".slides>img").eq(4).css("left",2800+sp);
            $(".dot").eq(5).css("background-color","blue");
            $(".dot").eq(5).siblings().css("background-color","#aaa")
   
        }else if(e==6){
            $(".slides>img").eq(6).css("left",-2100+sp);
            $(".slides>img").eq(7).css("left",-1400+sp);
            $(".slides>img").eq(0).css("left",-700+sp);
            $(".slides>img").eq(1).css("left",0+sp);
            $(".slides>img").eq(2).css("left",700+sp);
            $(".slides>img").eq(3).css("left",1400+sp);
            $(".slides>img").eq(4).css("left",2100+sp);
            $(".slides>img").eq(5).css("left",2800+sp);
            $(".dot").eq(6).css("background-color","blue");
            $(".dot").eq(6).siblings().css("background-color","#aaa")
   
        }else if(e==7){
            $(".slides>img").eq(7).css("left",-2100+sp);
            $(".slides>img").eq(0).css("left",-1400+sp);
            $(".slides>img").eq(1).css("left",-700+sp);
            $(".slides>img").eq(2).css("left",0+sp);
            $(".slides>img").eq(3).css("left",700+sp);
            $(".slides>img").eq(4).css("left",1400+sp);
            $(".slides>img").eq(5).css("left",2100+sp);
            $(".slides>img").eq(6).css("left",2800+sp);
            $(".dot").eq(7).css("background-color","blue");
            $(".dot").eq(7).siblings().css("background-color","#aaa")
   
        }else if(e==0){
            $(".slides>img").eq(0).css("left",-2100+sp);
            $(".slides>img").eq(1).css("left",-1400+sp);
            $(".slides>img").eq(2).css("left",-700+sp);
            $(".slides>img").eq(3).css("left",0+sp);
            $(".slides>img").eq(4).css("left",700+sp);
            $(".slides>img").eq(5).css("left",1400+sp);
            $(".slides>img").eq(6).css("left",2100+sp);
            $(".slides>img").eq(7).css("left",2800+sp);
            $(".dot").eq(0).css("background-color","blue");
            $(".dot").eq(0).siblings().css("background-color","#aaa")
   
        }
    };

    var list=$(".notilist>li").length;
    var cur=0;
    listUp();
    
    function listUp(){
    $(".notilist>li").eq(0).css("top",0);
    $(".notilist>li").eq(1).css("top","45px");
    $(".notilist>li").eq(2).css("top","90px");
    $(".notilist>li").eq(3).css("top","135px");
    $(".notilist>li").eq(4).css("top","180px");
   play=setInterval(function(){notice();},3000);
};
function notice(){
    cur++;
    if(cur==5){
        cur=0;
    };
    
    if(cur==1){
        $(".notilist>li").eq(1).animate({"top":"0px"});
        $(".notilist>li").eq(2).css("display","block");

        $(".notilist>li").eq(2).animate({"top":"45px"});
        $(".notilist>li").eq(3).animate({"top":"90px"});
        $(".notilist>li").eq(4).animate({"top":"135px"});
        $(".notilist>li").eq(0).css("display","none");
        $(".notilist>li").eq(0).animate({"top":"-45px"});

        
    }else if(cur==2){
        $(".notilist>li").eq(2).animate({"top":"0px"});
        $(".notilist>li").eq(3).css("display","block");

        $(".notilist>li").eq(3).animate({"top":"45px"});
        $(".notilist>li").eq(4).animate({"top":"90px"});
        $(".notilist>li").eq(0).animate({"top":"135px"});
        $(".notilist>li").eq(1).css("display","none");

        $(".notilist>li").eq(1).animate({"top":"-45px"});
    }else if(cur==3){
  $(".notilist>li").eq(3).animate({"top":"0px"});
  $(".notilist>li").eq(4).css("display","block");

  $(".notilist>li").eq(4).animate({"top":"45px"});
  $(".notilist>li").eq(0).animate({"top":"90px"});
  $(".notilist>li").eq(1).animate({"top":"135px"});
  $(".notilist>li").eq(2).css("display","none");

  $(".notilist>li").eq(2).animate({"top":"-45px"});

}else if(cur==4){
  $(".notilist>li").eq(4).animate({"top":"0px"});
  $(".notilist>li").eq(0).css("display","block");

  $(".notilist>li").eq(0).animate({"top":"45px"});
  $(".notilist>li").eq(1).animate({"top":"90px"});
  $(".notilist>li").eq(2).animate({"top":"135px"});
  $(".notilist>li").eq(3).css("display","none");

  $(".notilist>li").eq(3).animate({"top":"-45px"});

}else if(cur==0){
  $(".notilist>li").eq(0).animate({"top":"0px"});
  $(".notilist>li").eq(1).css("display","block");

  $(".notilist>li").eq(1).animate({"top":"45px"});
  $(".notilist>li").eq(2).animate({"top":"90px"});
  $(".notilist>li").eq(3).animate({"top":"135px"});
  $(".notilist>li").eq(4).css("display","none");

  $(".notilist>li").eq(4).animate({"top":"-45px"});  
}
    };