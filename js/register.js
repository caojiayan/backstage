//输入密码
function wordCheck(wordHide,wordShow){
    $(wordShow).click(function(){
        $(wordShow).hide();
        $(wordHide).show().focus();
    });
}

//手机号码验证
$(function(){
    $("#phoneBtn").click(function(){
        $("#phoneNum").toggle();
//  隐藏验证码
        if($("#phoneCode").show()){
        	$("#phoneCode").hide();
        }
    });
    $("#pCodebtn").click(function(){
        $("#phoneCode").toggle();
        //注册界面向上调整
        $(".register-a").css("margin-top","20px");
    });
});

//手机验证部分
function validate () {    
	
var mobile = $("#mobile").val();
var password = $("#password").val();
var checkCode = $("#input1").val();	
if(mobile==""||mobile==null||mobile!="^1([23578])\d{9}$"){
	$('#mobile-tip').append("<span class='formtips onError' style='color:red'>请输入商户号或注册邮箱</span>");
$("#m-tip").html("请输入手机号码");
	return false;
}
else{	
	$("#m-tip").html("");

var inputCode = document.getElementById("input1").value.toUpperCase();      
var codeToUp=code.toUpperCase();  
if(inputCode.length <=0) {      
//alert("请输入验证码！");      
$("#c-tip").html("请输入验证码！");
  return false;      
}      
else if(inputCode != codeToUp ){      
// alert("验证码输入错误！");      
$("#c-tip").html("验证码输入错误！");
   createCode();      
   return false;      
}      
else {$("#c-tip").html("");}if(password==""||password==null){      
//alert("输入正确，输入的验证码为："+inputCode);
$("#p-tip").html("请输入密码！")

  return false;      
}
$("#p-tip").html("")
return true;
}  
}