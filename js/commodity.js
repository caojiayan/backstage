
//互补类目中删除项
$(function(){
	$(".c1mTableul>li>a").click(function(){
		$(this).parent().remove();
	});
});

//商品SKU
$(document).ready(function(argument) {
		
        var container = $("#table-container"),
            ltTable = container.find(".table-lt"),
            topTable = container.find(".table-top"),
            leftTable = container.find(".table-left"),
            rightTable = container.find(".table-right"),
  
            containerWidth = 0,
            containerHeight =0,
  
            ltTableWidth = 0,
            ltTableHeight = 0,
  
            widthJson = {},
  
            timerLT = null;
  
        ltTableWidth = ltTable.width();
        ltTable.width(ltTableWidth);
        topTable.css("marginLeft",ltTableWidth);
        leftTable.width(ltTableWidth);
        rightTable.css("marginLeft",ltTableWidth);
        ltTableHeight = ltTable.height();
        leftTable.css("marginTop",ltTableHeight+"px");
        rightTable.css("marginTop",ltTableHeight-37+"px");
  
        containerHeight = container.height();
        containerWidth = container.width();
        topTable.width((containerWidth - ltTableWidth  - (container.innerWidth() - container[0].clientWidth)));
        leftTable.height(containerHeight - ltTableHeight - (container.innerHeight() - container[0].clientHeight));
  
        // figure out the width of each DIV in TD  --start
        function setDivWidth(obj){
          $(obj).find("div").each(function(index){
            if(!widthJson[index]){
              widthJson[index] = 0;
            }
            if(widthJson[index]<$(this).width()) {
              widthJson[index] = $(this).width();
            }
          });
        }
        topTable.find("tr").each(function(){
          setDivWidth(this);
        });
        rightTable.find("tr").each(function(){
          setDivWidth(this);
        });
  
        topTable.find("tr:first div").each(function(index){
          $(this).width(widthJson[index]+10);
        });
        rightTable.find("tr:first div").each(function(index){
          $(this).width(widthJson[index]+10);
        });
        // figure out the width of each DIV in TD  --end
  
        container.scroll(function(){
          var currentScrollTop = $(this).scrollTop(),
              currentScrollLeft = $(this).scrollLeft();
          topTable.find(".table-mask").css("left", -currentScrollLeft+"px");
          leftTable.find(".table-mask").css("top", -currentScrollTop+"px");
  
        });
  
        $(document).scroll(function(){
          var currentScrollTop = $(this).scrollTop(),
              currentScrollLeft = $(this).scrollLeft();
          ltTable.css("marginTop", -currentScrollTop+"px");
          ltTable.css("marginLeft", -currentScrollLeft+"px");
          topTable.css("marginTop", -currentScrollTop+"px");
          topTable.css("marginLeft", ltTableWidth - currentScrollLeft+"px");
          leftTable.css("marginTop", ltTableHeight - currentScrollTop+"px");
          leftTable.css("marginLeft", -currentScrollLeft+"px");
  
        });
  
        // for IE, when window's scrollbar is moved, keep ltTable,leftTable,topTable in the correct position
        $(window).resize(function(){
          $(document).scroll();
        });
  
        //reset the width of topTable and the height of leftTable when container's size is changed, if container's size is fixed, you can skip the code below.
        timerLT = setInterval(function(){
          if(containerWidth != container.width() || containerHeight != container.height()){
            topTable.width(container.width() - ltTableWidth - (container.innerWidth() - container[0].clientWidth));
            leftTable.height(container.height() - ltTableHeight - (container.innerHeight() - container[0].clientHeight));
  
            containerWidth = container.width();
            containerHeight = container.height();
  
            container.scroll();// for IE
              
          };
                     
        },0);
  
      });
 
//商品SKU添加列
//声明一个js函数
function addCv21addC(){
	//删除这个元素的时候，当前函数不会被删除
	$("#cv21addC").remove();       //点击新增列后移除掉”新增按钮“
	
	$(".tableRt").append("<td><div><input type='text' value=''/><img src='img/img6.png' align='center'><img src='img/img5.png' align='center' style='display: none;'><a href='javascript:void();' id='cv21addC'><img src='img/addGS.png' align='center'></a></div></td>");
    $(".table-rFilter").append("<td><div><input type='text' value=''/><a href='javascript:void();'>确定</a></div></td>");
    $(".table-rList").append("<td><div></div></td>");
    
    //重新添加之后，重新给控件点击事件
    $("#cv21addC").click(addCv21addC);
}

$(function(){
	$("#cv21addC").click(function(){  //在列表最右边追加内容
		addCv21addC();
    });
    $(".field").change(function(){     
        $(".tableRtAdd img").toggle();   //新增输入框输入完成之后转换图片
    });
    var ltr=$(".table-mask table tr");
    var Len=ltr.length;
    var Lnum=ltr.index($(this).closest("tr"));  //点击删除，获取在当前tr在table中的排序
    var newL=Lnum+1;                            //获取在左边文本列表中的真实排序
    var newR=Lnum+3;                            //获取右边文本列表中的真实排序
    $(".tabletr_del").click(function(){
    	$(".table_ltr").eq(newL).remove();        //删除左边tr
    	$(".table-right tr").eq(newR).remove();   //删除右边tr
    });
});   
//点击全选删除行
$(function(){
    $(".deletebtna").click(function(){
        $(".table_boxa tr").each(function(){
            if($(this).find("input").attr("checked")&&$(this).index()!=0){   //右边列表全删除
                $(this).remove();
            }
        });
        $(".table-rList").remove();     //左边列表全部删除
    });
});


//点击文本跳到输入框进行修改
var allCheckone_obj;
function allCheckone(t_rone){ 
	var Rtr=$(".table-right .table-rList");
	var Rnum=Rtr.index($(this).closest(".table-rList"));  //获取顺序
	var newR=Rnum+2;
    $("."+t_rone).click(function(){
    	allCheckone_obj = $(this);
        $(".table_rLone").val($(this).text()); //修改库存数量
    });
    $(".t_raone").click(function(){   
    	var rLa=$(".table_rLone").val();  //库存被修改后赋值给列表
        allCheckone_obj.text(rLa);
    });
};

var allChecktwo_obj;
function allChecktwo(t_rtwo){
    $("."+t_rtwo).click(function(){
    	allChecktwo_obj = $(this);
        $(".table_rLtwo").val(allChecktwo_obj.text()); //修改起购数量
    });
    
    $(".t_ratwo").click(function(){
    	var rLa=$(".table_rLtwo").val();  //起购被修改后赋值给列表
        allChecktwo_obj.text(rLa);
    });
};

var allCheckthree_obj;
function allCheckthree(t_rthree){ 
    $("."+t_rthree).click(function(){
    	allCheckthree_obj = $(this);
        $(".table_rLthree").val($(this).text()); //修改一口价数量
    });
    $(".t_rathree").click(function(){   
    	var rLa=$(".table_rLthree").val();  //一口价被修改后赋值给列表
        allCheckthree_obj.text(rLa);
    });
};

var allCheckfour_obj;
function allCheckfour(t_rfour){ 
    $("."+t_rfour).click(function(){
    	allCheckfour_obj = $(this);
        $(".table_rLfour").val($(this).text()); //修改老客折上折的值
    });
    $(".t_rafour").click(function(){   
    	var rLa=$(".table_rLfour").val();  //点击确定，老客折上折被修改后赋值给列表
        allCheckfour_obj.text(rLa);
    });
};
//SKU间差异属性新增
$(function(){
	var val=$("#SKUval").val();
	var text="输入名称点“新增”按钮";
	var text1="<td>"+val+"<img src='img/delect1.png' alt='删除'></td>";
	var text2="<td>&nbsp</td>"
	if(val == ""||val == text){
	    	//是，则显示提示内容
	    	error.html("<font color='red'>提示：请输入SKU属性!</font>");
	    	//否，将文本追加在列表
	   }else{
	    	$(".tr1").append(text1);
		    $(".tr2").append(text2);
		    $(".tr3").append(text2);
	    }
	});
});
