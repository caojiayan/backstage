//con2
//电视剧编剧/制片/导演/主演新增
function specCheck(specbtn,specName,specList,Error){
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
	    	error.html("<font color='red'>提示：请输入内容!</font>");
	    	//否，将文本追加在列表
	    }else($(specList).append(text1));
	});
	//点击删除
    $(document).on("click",specList+">li>a", function(e) {
        $(this).parent().remove();
    });
}
//con3
//点击打开上传视频文件的盒子
$(function() {
    $(".c3VideoupInput").click(function() {
        $(".c3Videoup").toggle();
    });
    //已上传列表中的删除键
    $(".delVideo").click(function(){
    	$(this).parent().parent().remove();
    });
});
//向已上传的列表中添加“新增的内容”
$(function(){
    //动态添加事件
    $("#c3Vkeep").on("click",function(){
        var name=$("#Videoname").val(); //文件名
    	var parts=$("#parts").val();    //集数
    	var type=$("#Videotype option:selected").text(); //类型
    	var pvq=$("#pvq option:selected").text();        //质量
//  	var size= ?;                      //大小
        //视频文件新增盒子关闭
    	$(".c3Videoup").hide();
    	//已上传的列表中添加“新增的内容”
    	$("#c3three").append("<ul class='c3Videowrite'><li>文件名：<span>"+name+"</span></li><li>大小：<span>后台获取大小</span>M</li><li>集数：第<span>"+parts+"</span>集</li><li><span>"+type+"</span></li><li>视频质量：<span>"+pvq+"</span></li><li><a href='javascript:void();' id='c3Videoedit4'><img src='img/writeW.png' align='center'></a><a href='javascript:void();' class='delVideo'><img src='img/trash.png' align='center'></a></li></ul>");
    });
    //对动态添加的元素添加事件-删除
    $("#c3three").on("click",".delVideo",function(){
        console.log("内容删除成功");
        $(this).parent().parent().remove();
    });
    //对动态添加的元素添加事件-修改内容的盒子被打开
    $("#c3three").on("click","#c3Videoedit4",function(){
        console.log("修改内容的盒子被打开");
        $(".c3VideoBoxall").show();
    });
}); 


//视频编辑新增 c3Videoedit
function writeCheck(Vdit){
	var box=$(".c3VideoBoxall");
	var img=$(Vdit+" img")
    $(Vdit).click(function() {
    	box.toggle();
    	//修改图标变成红色
    	if(box.show()){
    	    img.attr("src","img/writeRed.png");
       }
    });
	$("#c3Vclose").click(function(){
		box.hide();
		//当修改图标变成灰色
		if(box.hide()){
    	    img.attr("src","img/writeW.png");
        }
	});
	$("#c3Vsure").click(function(){
		box.hide();
		//修改图标变成灰色
		if(box.hide()){
    	    img.attr("src","img/writeW.png");
        }
	});
}
