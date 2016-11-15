
function allcheck(c1aabtn,c1aaMain){
    $(c1aabtn).click(function(){
        $(c1aabtn+" img").toggle();
        $(c1aaMain).toggle();
    });
}

(function($){
    $.fn.checkall = function(options){
        var defaults = {chname:"checkname[]", callback:function(){}},
        options = $.extend(defaults, options),
        $obj = $(this),
        $items = $("input[name='"+options.chname+"']"),
        checkedItem = 0;
        $items.click(function(){
            if($items.filter(":checked").length === $items.length){
                $obj.attr("checked",true);
            }else{
                $obj.removeAttr("checked");
            }
            checkedItem = $items.filter(":checked").length;
            if(typeof options.callback === 'function') options.callback(checkedItem);
        });
        return $obj.each(function(){
            $(this).click(function(){
                if($(this).attr('checked')){
                    $items.attr("checked",true);
                }else{
                    $items.removeAttr("checked");
                }
                checkedItem = $items.filter(":checked").length;
                if(typeof options.callback === 'function') options.callback(checkedItem);
            });
        });
    }
})(jQuery);
//回调
$(function(){
    $("#check11").checkall({chname:"text11", callback: function(e){}});
});
$(function(){
    $("#check12").checkall({chname:"text12", callback: function(e){}});
});
$(function(){
    $("#check13").checkall({chname:"text13", callback: function(e){}});
});
$(function(){
    $("#check14").checkall({chname:"text14", callback: function(e){}});
});

$(function(){
    $("#check21").checkall({chname:"text21", callback: function(e){}});
});
$(function(){
    $("#check22").checkall({chname:"text22", callback: function(e){}});
});
$(function(){
    $("#check23").checkall({chname:"text23", callback: function(e){}});
});
$(function(){
    $("#check24").checkall({chname:"text24", callback: function(e){}});
});

