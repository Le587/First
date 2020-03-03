//点击登录
 $('.login').click(function(){
	 location.href = '../pages/login.html'
 	$('.login-form').css('display','block')
 	.next().css('display','none')
 })
 
 //点击注册框页面注册框显示
 $('.login-2').click(function(){
	 location.href = '../pages/login.html'
 	$('.login-form').css('display','none')
 	.next().css('display','block')
 })
//导航
$(".menu>li").mouseenter(function(){
	if($(this).attr('data-show')){
		 $('.show').eq($(this).index()-1).show()
		 .siblings('.show').hide();
	}
})
$(".menu>li").mouseleave(function(){
	$(".show").hide();
})
$(".show").mouseenter(function(){
	$(this).show();
})
$(".show").mouseleave(function(){
	$(this).hide();
})
$('.menu>li').eq(3).click(function(){
	location.href = '../pages/list.html'
})



//放大镜
$('.gakki').hiZoom({
  width: 498,
  position: 'right'
  
});

			