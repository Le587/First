"use strict";$(".menu>li").mouseenter(function(){$(this).attr("data-show")&&$(".show").eq($(this).index()-1).show().siblings(".show").hide()}),$(".menu>li").mouseleave(function(){$(".show").hide()}),$(".show").mouseenter(function(){$(this).show()}),$(".show").mouseleave(function(){$(this).hide()}),$(".login").click(function(){location.href="../pages/login.html",$(".login-form").css("display","block").next().css("display","none")}),$(".login-2").click(function(){location.href="../pages/login.html",$(".login-form").css("display","none").next().css("display","block")}),$.ajax({url:"/dt",data:{c:"pc",s:1e4,v:1,category_id:61,sort_field:1,sort_order:2,pn:1,ps:20},cache:!1,dataType:"json",success:function(t){var s="";t.data.pageList.forEach(function(t){s+='\n\t\t\t\t\t<a href="#" class="products">\n\t\t\t\t\t\t<img src='.concat(t.image,' >\n\t\t\t\t\t\t<span class="name">').concat(t.name,'</span>\n\t\t\t\t\t\t<span class="desc">').concat(t.desc,'</span>\n\t\t\t\t\t\t<span class="price"j>¥ ').concat(t.linePrice/100,"</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t"),$(".list-box").html(s)})}});