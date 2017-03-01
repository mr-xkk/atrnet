/**
 * Created by hxsd on 2017/2/18.
 */
$(document).ready(function(){
    $("#cheak1").click(function(){
        var url="js/data.json";
        $.getJSON(url,function(data){
            for(var i=0;i<data.data1.length;i++){
                var datas=data.data1[i];
                var $div = $("<div class='act_move'>");
                $("<h2>").append("活动策划1").appendTo($div);
                $("<p class='p_move'>").append(datas.text).appendTo($div);
                $("<span>").append('<img src="images/'+datas.img+'" class="img">').appendTo($div);
                $("<div>").append('<a href="activity.html">返回列表</a>').appendTo($div);
                $(".act_text").eq(0).html('');
                $(".act_text").eq(0).append($div);
           }
        });

    });
    $("#cheak2").click(function(){
        var url="js/data.json";
        $.getJSON(url,function(data){
            for(var i=0;i<data.data2.length;i++){
                var datas=data.data2[i];
                var $div = $("<div class='act_move'>");
                $("<h2>").append("活动策划2").appendTo($div);
                $("<p class='p_move'>").append(datas.text).appendTo($div);
                $("<span>").append('<img src="images/'+datas.img+'" class="img">').appendTo($div);
                $("<div>").append('<a href="activity.html">返回列表</a>').appendTo($div);
                $(".act_text").eq(0).html('');
                $(".act_text").eq(0).append($div);
            }
        });

    });
});
