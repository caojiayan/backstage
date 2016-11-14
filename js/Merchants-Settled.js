
//所有可筛选的下拉框
$(function(){
	//当列表项被点击时，把列表项的值放在输入框里面，
	$(".dropdown").delegate("li", "click", function(e){
		var v = $(this).attr("data-value"),
		drop = $(this).closest(".dropdown");
		drop.attr("data-value", v);
		drop.find(".editor").val(v);
		$(this).parent().hide();
		e.stopPropagation();
	}).delegate(".trigger", "click", function(e){    //当下拉按钮被点击时，显示数据列表
		$(this).closest(".dropdown").find("ul").show();
		e.stopPropagation();  //阻止冒泡，因为冒泡到 document 的时候，会隐藏列表
		}).delegate(".search input", "click", function(e){
			e.stopPropagation(); 
			}).delegate(".search input", "keyup", function(e){    //当检测到列表中的输入框的时候，启动过滤，不满足的项隐藏
			var v = $.trim(this.value), list = $(this).closest("ul").children("li");
			if(v == "") {    //特殊情况，过滤输入框中没有值的时候迭代所有的列表项并显示它们
			list.each(function(){
				if(this.className.indexOf("search") != -1) {return;}//不考虑过滤输入框所在的列表项
				$(this).text(this.innerText || this.textContent).show();
			});
			} else {
				list.each(function(){   //迭代列表，
					if(this.className.indexOf("search") != -1) {return;}  //不考虑过滤输入框所在的列表项
						var lv = $(this).text();   //列表的文本
						if(lv.indexOf(v) === -1) {   //不匹配过滤文本，就隐藏
							$(this).hide();
						} else {                 //匹配，把匹配的文本替换会含有标记的文本（红色）
							$(this).html(lv.replace(v, '<span class="hot">'+v+'</span>')).show();
						}
					});
				}
			});
			$(this).click(function(){   //当数据列表在显示时，如果点击了页面其它区域，则隐藏列表
			    $(".dropdown ul:visible").hide();   
			});
			//加载数据，数据列表中的每一项是一个列表，为了模拟select，每个列表项目还包括一个自定义的属性 data-value,用于保存此列表项的值
			$("#load").click(function(){
				var p = $(".dropdown ul");
				var fragment = document.createDocumentFragment(), li;  //临时容器，为了避免多次添加引起页面高频率重绘
					for(var i=1, len=30;i<len;i++) {
						li = document.createElement("li");
						li.setAttribute("data-value", i);
						li.innerHTML = i;
						fragment.appendChild(li);
						//$('<li data-value="' + i + '">' + i + '</li>').appendTo(fragment);
					}
					p.append(fragment);  //将临时容器添加到无序列表里面，一次添加效率高
				});
			$(".trigger").click(function(){
				$(this).parent().css("z-index","1000");  //点击下拉按钮的时候显示z-index为1000
			});
		});
//个人商家认证
//点击上传图片
function fileSelect() {
        document.getElementById("fileToUpload").click();
   }
    function fileSelected() {
      // 文件选择后触发次函数
    }
//项目简述   
$(function(){
	$("#Form-a").click(function(){
		$("#sketchMain").toggle();
	});
	$("#Form-close").click(function(){
		$("#sketchMain").hide();
	});
});
//填写资料选项卡
$(function(){
	//下一步
	$("#nexttwo").on('click',function(){
		$("#Title1").removeClass("Tactive");
		$("#Title2").addClass("Tactive");
		$("#Datum").removeClass("active").addClass("hide");
		$("#credentials").removeClass("hide").addClass("active");
	});
	$("#nextthree").on('click',function(){
		$("#Title3").addClass("Tactive");
		$("#Title2").removeClass("Tactive");
		$("#aptitude").addClass("active").removeClass("hide");
		$("#credentials").addClass("hide").removeClass("active");
	});
	$("#nextfour").on('click',function(){
		$("#Title4").addClass("Tactive");
		$("#Title3").removeClass("Tactive");
		$("#cost").addClass("active").removeClass("hide");
		$("#aptitude").addClass("hide").removeClass("active");
	});
	//上一步
	$("#lastone").on('click',function(){
		$("#Title1").addClass("Tactive");
		$("#Title2").removeClass("Tactive");
		$("#Datum").addClass("active").removeClass("hide");
		$("#credentials").addClass("hide").removeClass("active");
	});
	$("#lasttwo").on('click',function(){
		$("#Title2").addClass("Tactive");
		$("#Title3").removeClass("Tactive");
		$("#credentials").addClass("active").removeClass("hide");
		$("#aptitude").addClass("hide").removeClass("active");
	});
	$("#lastthree").on('click',function(){
		$("#Title3").addClass("Tactive");
		$("#Title4").removeClass("Tactive");
		$("#aptitude").addClass("active").removeClass("hide");
		$("#cost").addClass("hide").removeClass("active");
	});
});

//认证费用
$(function(){
	//申请人
    var _input = $("#proposerBtn");
    _input.click(function(){
        var _check = $(this).attr("checked") ;
        if(_check=="checked"){
            $("#proposer").show();
        }
    else{
            $("#proposer").hide();
        }
    });
	//实体店
    var ainput = $("#in-storeBtn");
    ainput.click(function(){
        var acheck = $(this).attr("checked") ;
        if(acheck=="checked"){
            $("#in-store").show();
        }
    else{
            $("#in-store").hide();
        }
    });
});

//组织商家认证
//项目简述   
$(function(){
	$("#Form-b").click(function(){
		$("#sketchMain-b").toggle();
	});
	$("#Form-close-b").click(function(){
		$("#sketchMain-b").hide();
	});
});
//营业执照说明
$(function(){
	$("#paperBtn").click(function(){
		$("#ID-paper").toggle();
	});
	$("#paperClose").click(function(){
		$("#ID-paper").hide();
	});
});
//旧版营业执照则显示组织代码跟税务登记
$(function(){
	var binput = $("#licenceBtn");
    binput.click(function(){
        var bcheck = $(this).attr("checked") ;
        if(bcheck=="checked"){
            $("#group-code").show();
            $("#Tax").show();
        }
    else{
            $("#group-code").hide();
            $("#Tax").hide();
        }
    });
});

