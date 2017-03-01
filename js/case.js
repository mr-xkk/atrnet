/**
 * Created by Administrator on 2017/2/19 0019.
 */
$(document).ready(function () {
    $(".mask").each(function (i) {
        $(".mask").eq(i).click(function () {
            $(".mask").eq(i).addClass('mask_change');
        });
       /* $(".mask").eq(i).mouseleave(function () {
            $(".mask").eq(i).addClass('mask_remove');
        });*/
    });
});
