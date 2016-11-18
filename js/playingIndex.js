
//con1中类目选择：下拉框的值追加到cs3left后面
$(document).ready(function(){
	$(".c1Playinginput").click(function(){
		var cx1=$(".cs2one").val();
		var cx2=$(".cs2two").val(); 
		var cx3=$(".cs2three").val();
		$('.csPlayingleft').html('');
		$(".csPlayingleft").append(cx1+">"+cx2+">"+cx3);//将下拉框的值追加到cs3left后面
	});
});

//服务别称/全新实物类商品中包装配置的附赠内容新增
function Check(servebtn,serveName,serveList){
	$(servebtn).click(function(){
		var error = $('.Error');
		var text2="请输入服务别称";
		var text3="请输入商品别称";
		var text4="请输入作品别称";
		var text=$("."+serveName).val();
	    var text1="<li>"+text+"<a href='javascript:void();'><img src='img/delect1.png' alt='删除'></a></li>";
	    //判断值是否为空或为输入框的提示内容
	    if(text == ""||text == text2||text == text3||text == text4){
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


//con3中点击图片删除当列
$(document).ready(function(){
	$(".playingDeleteimg1").click(function(){
		$(".playingDeleteUl1").remove();
	});
});
$(document).ready(function(){
	$(".playingDeleteimg2").click(function(){
		$(".playingDeleteUl2").remove();
	});
});
$(document).ready(function(){
	$(".playingDeleteimg3").click(function(){
		$(".playingDeleteUl3").remove();
	});
});

//con5中交易类型选择
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


//删除项
$(document).ready(function(){
	$(".c4Videodelimg1").click(function(){
		$(".c4Videodel1").hide();
	});
});
$(document).ready(function(){
	$(".c4Videodelimg2").click(function(){
		$(".c4Videodel2").hide();
	});
});
$(document).ready(function(){
	$(".c4Videodelimg3").click(function(){
		$(".c4Videodel3").hide();
	});
});
$(document).ready(function(){
	$(".c4Videodelimg4").click(function(){
		$(".c4Videodel4").hide();
	});
});
$(document).ready(function(){
	$(".c4Videodelimg5").click(function(){
		$(".c4Videodel5").hide();
	});
});
$(document).ready(function(){
	$(".c4Videodelimg6").click(function(){
		$(".c4Videodel6").hide();
	});
});
$(document).ready(function(){
	$(".c4Videodelimg7").click(function(){
		$(".c4Videodel7").hide();
	});
});
$(document).ready(function(){
	$(".c4Videodelimg8").click(function(){
		$(".c4Videodel8").hide();
	});
});
$(document).ready(function(){
	$(".c4Videodelimg9").click(function(){
		$(".c4Videodel9").hide();
	});
});
