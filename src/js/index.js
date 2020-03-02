 window.onload = function() {
   var mySwiper = new Swiper ('.swiper-container', {
   	 autoplay: {
   	     disableOnInteraction: false,
   	   },
     loop: true, 
     
     // 如果需要分页器
     pagination: {
       el: '.swiper-pagination',
	   clickable :true,
     },
     // 如果需要前进后退按钮
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },

   })  
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


 
 
 
 
 
 
 
 }   
		   