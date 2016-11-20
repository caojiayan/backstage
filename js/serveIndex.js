
//con1中类目选择：下拉框的值追加到cs3left后面
$(document).ready(function(){
	$(".c1Proinput1").click(function(){
		var cx1=$(".cs2one").val();
		var cx2=$(".cs2two").val(); 
		var cx3=$(".cs2three").val();
		$('.cs3left').html('');
		$(".cs3left").append(cx1+">"+cx2+">"+cx3);//将下拉框的值追加到cs3left后面
	});
});

//服务别称/全新实物类商品中包装配置的附赠内容新增
function Check(servebtn,serveName,serveList){
	$(servebtn).click(function(){
		var error = $('.Error');
		var text2="请输入服务别称";
		var text3="请输入商品别称";
		var text=$("."+serveName).val();
	    var text1="<li>"+text+"<a href='javascript:void();'><img src='img/delect1.png' alt='删除'></a></li>";
	    //判断值是否为空或为输入框的提示内容
	    if(text == ""||text == text2||text == text3){
	    	//是，则显示提示内容
	    	error.html("<font color='red'>提示：请输入别称!</font>");
	    	//否，将文本追加在列表
	    }else($(serveList).append(text1));
	});
	//服务别称列表点击删除
    $(document).on("click", ".c2navList>li>a", function(e) {
        $(this).parent().remove();
    });
    //附赠内容列表点击删除
    $(document).on("click",".ct51UList>li>a", function(e) {
        $(this).parent().remove();
    });
}


//交易类型
function aCheck1(){ 
document.getElementById("cx11").style.display="block"; 
document.getElementById("cx12").style.display="none";
document.getElementById("cx13").style.display="none";
document.getElementById("cx14").style.display="none";
document.getElementById("cx15").style.display="none";
document.getElementById("cx16").style.display="none";
document.getElementById("cx17").style.display="none";
document.getElementById("cx18").style.display="none";
}
function bCheck2(){ 
document.getElementById("cx11").style.display="none"; 
document.getElementById("cx12").style.display="block";
document.getElementById("cx13").style.display="none";
document.getElementById("cx14").style.display="none";
document.getElementById("cx15").style.display="none";
document.getElementById("cx16").style.display="none";
document.getElementById("cx17").style.display="none";
document.getElementById("cx18").style.display="none";
}
function cCheck3(){ 
document.getElementById("cx11").style.display="none"; 
document.getElementById("cx12").style.display="none";
document.getElementById("cx13").style.display="block";
document.getElementById("cx14").style.display="none";
document.getElementById("cx15").style.display="none";
document.getElementById("cx16").style.display="none";
document.getElementById("cx17").style.display="none";
document.getElementById("cx18").style.display="none";
}
function dCheck4(){ 
document.getElementById("cx11").style.display="none"; 
document.getElementById("cx12").style.display="none";
document.getElementById("cx13").style.display="none";
document.getElementById("cx14").style.display="block";
document.getElementById("cx15").style.display="none";
document.getElementById("cx16").style.display="none";
document.getElementById("cx17").style.display="none";
document.getElementById("cx18").style.display="none";
}
function eCheck5(){ 
document.getElementById("cx11").style.display="none"; 
document.getElementById("cx12").style.display="none";
document.getElementById("cx13").style.display="none";
document.getElementById("cx14").style.display="none";
document.getElementById("cx15").style.display="block";
document.getElementById("cx16").style.display="none";
document.getElementById("cx17").style.display="none";
document.getElementById("cx18").style.display="none";
}
function fCheck6(){ 
document.getElementById("cx11").style.display="none"; 
document.getElementById("cx12").style.display="none";
document.getElementById("cx13").style.display="none";
document.getElementById("cx14").style.display="none";
document.getElementById("cx15").style.display="none";
document.getElementById("cx16").style.display="block";
document.getElementById("cx17").style.display="none";
document.getElementById("cx18").style.display="none";
}
function gCheck7(){ 
document.getElementById("cx11").style.display="none"; 
document.getElementById("cx12").style.display="none";
document.getElementById("cx13").style.display="none";
document.getElementById("cx14").style.display="none";
document.getElementById("cx15").style.display="none";
document.getElementById("cx16").style.display="none";
document.getElementById("cx17").style.display="block";
document.getElementById("cx18").style.display="none";
}
function hCheck8(){ 
document.getElementById("cx11").style.display="none"; 
document.getElementById("cx12").style.display="none";
document.getElementById("cx13").style.display="none";
document.getElementById("cx14").style.display="none";
document.getElementById("cx15").style.display="none";
document.getElementById("cx16").style.display="none";
document.getElementById("cx17").style.display="none";
document.getElementById("cx18").style.display="block";
}

//服务规格新增
function specCheck(specbtn,specName,specList,Error,specAll){
	$(specbtn).click(function(){
		var error = $("."+Error);
		var text=$("."+specName).val();
	    var text1="<li>"+text+"<a href='javascript:void();'><img src='img/delete2.png' alt='删除'></a></li>";
	    var text2="请输入规格名称";
		var text3="请输入内容";
		var text4="<div id='spec2' class='clearfix'><span class='specn'><span>"+text+"</span><input type='text' class='specName2' value='请输入内容' onfocus='javascript:if(this.value=='请输入内容')this.value='';'/><input type='button' id='specbtn2' value='新增'><span class='Error2' style='font-size: 14px;'></span></span><ul class='c4Ul' id='specList2'></ul>";
	    //判断值是否为空或为输入框的提示内容
	    if(text == ""||text == text2||text == text3){
	    	//是，则显示提示内容
	    	error.html("<font color='red'>提示：请输入别称!</font>");
	    	//否，将文本追加在列表
	    }else($(specList).append(text1)&&$(specAll).append(text4));
	});
	//点击删除
    $(document).on("click",specList+">.c4Ul>li>a", function(e) {
        $(this).parent().remove();
    });
}

//服务规格SKU列表
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
//删除
$(function(){
	$("#delBtn").click(function () {
        $(".listBox").find("input[name='test[]']").each(function () {
            if($(this).prop("checked")) {
               $(this).parent().parent().remove();
            }
        });
    });
});

//服务设置
//服务设置中服务要素
$(function(){
  $('#c6Techcheck1').click(function(){
    if($('.c6Techtwo').is(':hidden')){
      $('.c6Techtwo').show();
      $('#c6Techcheck1').val('点击隐藏');
    }
    else{
      $('.c6Techtwo').hide();
      $('#c6Techcheck1').val('点击显示');
    }
  });
});

$(function(){
  $('#c6Techcheck2').click(function(){
    if($('.c6Techthree').is(':hidden')){
      $('.c6Techthree').show();
      $('#c6Techcheck2').val('点击隐藏');
    }
    else{
      $('.c6Techthree').hide();
      $('#c6Techcheck2').val('点击显示');
    }
  });
});

$(function(){
  $('#c6Techcheck3').click(function(){
    if($('.c6Techfour').is(':hidden')){
      $('.c6Techfour').show();
      $('#c6Techcheck3').val('点击隐藏');
    }
    else{
      $('.c6Techfour').hide();
      $('#c6Techcheck3').val('点击显示');
    }
  });
});

//服务设置中服务人员
$(function(){
	$(".c6TechpopClick").click(function(){   //服务人员新增
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
        $("#c6TechpopupN input").attr("value",""); //点击新增的时候，清空input里的value值
		$("#c6TechpopupN").show();
	});
	$(".c6TechpopWrite").click(function(){  //服务人员修改
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
		$("#c6Techpopup").show();
	});
	$(".c6TechpopClose").click(function(){
		$("#c6Techpopup").hide(); //点击关闭
		$("#c6TechpopupN").hide();
		$(".maskingLayer").hide();
	});
	$(".c6TechpopHold").click(function(){
		$("#c6Techpopup").hide(); //点击关闭
		$("#c6TechpopupN").hide();
		$(".maskingLayer").hide();
		alert("已保存数据")
	});
});

//服务设置中服务项目
$(function(){
	$(".c6PWriClick").click(function(){   //服务项目新增
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
        $("#c6ProWriteN input").attr("value",""); //点击新增的时候，清空input里的value值
		$("#c6ProWriteN").show();
	});
	$(".c6ProteW").click(function(){   //服务项目修改
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
		$("#c6ProWrite").show();
	});
	$(".c6ProWriClose").click(function(){
		$("#c6ProWriteN").hide();
		$("#c6ProWrite").hide();
		$(".maskingLayer").hide();
	});
	$(".c6ProWriHold").click(function(){
		$("#c6ProWriteN").hide();
		$("#c6ProWrite").hide();
		$(".maskingLayer").hide();
		alert("已保存数据")
	});
});
//服务设置中服务资源
$(function(){
	$(".c6PresClick").click(function(){   //服务资源新增
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
        $("#c6PresourceN input").attr("value",""); //点击新增的时候，清空input里的value值
		$("#c6PresourceN").show();
	});
	$(".c6resourceW").click(function(){   //服务资源修改
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
		$("#c6Presource").show();
	});
	$(".c6PresClose").click(function(){
		$("#c6PresourceN").hide();
		$("#c6Presource").hide();
		$(".maskingLayer").hide();
	});
	$(".c6PresHold").click(function(){
		$("#c6PresourceN").hide();
		$("#c6Presource").hide();
		$(".maskingLayer").hide();
		alert("已保存数据")
	});
});
//服务设置中弹框盒子里上传图片部分
$(function(){
    $('.imgRemove').click(function(){   //点击删除键，删除该图片
        $(this).parent().remove();  //移除掉他的父级li
    });
});

//商家补充属性
//新增按钮
$(function(){
	$(".c7PpClick").click(function(){
		var bh = $("body").height();
        var bw = $("body").width();
        $(".maskingLayer").css({
            height:bh,
            width:bw,
            display:"block"
        });
		$(".c7Popup input").attr("value",""); 
		$(".c7Popup").show();
	});
	$(".c7PopupNo").click(function(){
		$(".maskingLayer").hide();
		$(".c7Popup").hide();
	});
	$(".c7PopupYes").click(function(){
		$(".maskingLayer").hide();
		$(".c7Popup").hide();
		alert("已保存数据");
	});
});

//服务设置列表 
function allCheckBox(allcheckbox,titletr,classid,delect){
    $(allcheckbox).click(function(){
        if($(this).attr("checked")){
            $("."+classid+" td input").attr("checked",true);
        }else{
            $("."+classid+" td input").attr("checked",false);
        }
    });
    $("."+classid+" input").not(allcheckbox).click(function(){
        $("."+classid+" input").not(allcheckbox).each(function(){
            if($("."+classid+" input[type='checkbox']:checked").not(allcheckbox).length==$("."+classid+" tr").not(titletr).length){
                $(allcheckbox).attr("checked",true);
            }else{
                $(allcheckbox).attr("checked",false);
            }
        });
    });
    //删除
    $(delect).click(function(){
        $("."+classid+" tr").each(function(){
            if($(this).find("input").attr("checked")&&$(this).index()!=0){
                $(this).remove();
            }
        });
    });
}

//服务内容中的textarea
 $(function(){
    $("#c7textarea").keyup(function(){
        var len = $(this).val().length;
        if(len > 99){
            $(this).val($(this).val().substring(0,100));
        }
        var num = 100 - len;
        $("#word").text(num);
    });
});

//点击"删除"，删除当列

//规格
$(function(){
	$(".c4Ul>li>a").click(function(){
		$(this).parent().remove();
	});
});
//SKU
$(function(){
	$(".cv2Ul2>li>a").click(function(){
		$(this).parent().parent().remove();
	});
});
//商家补充属性
$(function(){
	$(".c7seven>li>a").click(function(){
		$(this).parent().remove();
	});
});