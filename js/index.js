/*--------------导航栏固定---------------------*/
$(function(){

    $(window).on("scroll",function(){
        if($(document).scrollTop()>=$(".one").offset().top){
            $("#nav").addClass("fix");
        }else{
            $("#nav").removeClass("fix");
        }
        if($(document).scrollTop()>=$(".one").offset().top){
            $("#index_top").addClass("index_top_on");
        }else{
            $("#index_top").removeClass("index_top_on");
        }
    });

    /*--------动态上滑---------------*/
    $("#index_top").on("click",function(){
        $('body,html').animate({scrollTop:0},1000);
    });

    /*-------------tab----------------*/
    var n=0;
    var m=$(".man");
    $(".arrows_l").on("click",function(){
        if(n==0){
            n= m.length;
            m.eq(n).show().siblings().hide();
        }
        m.eq(n).show().siblings().hide();
        n--;
    });
    $(".arrows_r").on("click",function(ev){
        ev.preventDefault();
        n++;
        if(n>m.length-1){
            n= 0;
            m.eq(n).show().siblings().hide();
        }
        m.eq(n).show().siblings().hide();
    })


});
