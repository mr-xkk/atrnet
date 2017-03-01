/**
 * Created by hxsd on 2017/2/18.
 */
$(function(){
   $(window).on("scroll",function(){
       if($(document).scrollTop()>=$(".about_logo").offset().top){
           $("#index_top").addClass("index_top_on");
       }else{
           $("#index_top").removeClass("index_top_on");
       }
   });
    $("#index_top").on("click",function(){
        $('body,html').animate({scrollTop:0},1000);
    });
});
