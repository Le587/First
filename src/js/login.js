
//点击登录时候页面登录框显示
$('.login').click(function(){
	$('.login-form').css('display','block')
	.next().css('display','none')
})

//点击注册框页面注册框显示
$('.login-2').click(function(){
	$('.login-form').css('display','none')
	.next().css('display','block')
})
//点击手机号快速注册
$('.zhuce').click(function(){
	$('.login-form').css('display','none')
	.next().css('display','block')
})
//点击已经注册去登录
$('.backlogin').click(function(){
	$('.login-form').css('display','block')
	.next().css('display','none')
})

//登录正则
let us = false
let pas = false
$('.input-box .a1').on('input',function(){
	let t = $('.input-box .a1').val()
	let r = /\S/
	if(!r.test(t)){
		$('.zhengze').text('账号不能为空')
	}else{
		$('.zhengze').text('')
		us = true
	}
})
$('.input-box .a2').on('input',function(){
	let t = $('.input-box .a2').val()
	let r = /\S/
	if(!r.test(t)){
		$('.zhengze').text('密码不能为空')
	}else{
		$('.zhengze').text('')
		pas = true
	}
})

//登录发送请求
$('.login-btn').click(function(){
	getSend(`http://jx.xuzhixiang.top/ap/api/login.php?username=${$('.input-box .a1').val()}&password=${$('.input-box .a2').val()}`,
	function(res){
		console.log(JSON.parse(res))
		if(JSON.parse(res).code == 1){
			location.href = '../pages/index.html'
		}else{
			alert('请输入正确的用户名和密码')
		}
	})
})
//注册发送请求
$('.fast').click(function(){
	getSend(` http://jx.xuzhixiang.top/ap/api/reg.php?username=${$('.b1').val()}&password=${$('.b2').val()}`,
	function(res){
		if(JSON.parse(res).code == 1){
			alert(JSON.parse(res).msg)
			location.href = '../pages/index.html'
		}else{
			alert(JSON.parse(res).msg)
		}
	})
})
// // //
// getSend('https://mall.sogou.com/json/pc/setting.json?c=pc&s=10000&t=1582957154368&v=1.0',function(res){
// 	console.log(JSON.parse(res))
// })


$('.menu li:first').click(function(){
	location.href = '../pages/index.html'
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
 