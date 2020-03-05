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

//本地存储渲染
const goodsInfo = JSON.parse(localStorage.getItem('goods_info'))
 if (goodsInfo === null) {
      alert('您查看的商品详情不存在了')
    } else {
      $('.hizoom').children('.small').children('img').attr('src',goodsInfo.img)
	  $('.big').children('img').attr('src',goodsInfo.img)
	  $('.small-img2').children('img').attr('src',goodsInfo.img)
	  $('.detail-tit').text(goodsInfo.name)
	  $('detail-intro').text(goodsInfo.desc)
	  $('.pprice').text(goodsInfo.price)
	  
}
//增加件数
	let i = 1
$('.nummore').click(function(){
	i++
	$('.d-count').text(i) 
	
})
//减少件数
$('.numless').click(function(){

	if($('.d-count').text()>1){
		i--
		$('.d-count').text(i)
	}
	
	
})


	
//点击加入购物车
var arr =[]
if(localStorage.getItem('carts')){
	arr = JSON.parse(localStorage.getItem('carts'))
	
}else{
	arr = []
}



$('.btn-boxl').click(function(){
		//点击购物车  把数量加进去
		let num = $('.d-count').text()
		
		//相同不添加
		let exits = arr.some(item => {
		  return item.id === goodsInfo.id
		})
		if(exits){
			for(let i = 0 ;i<arr.length;i++){
				if(arr[i].id === goodsInfo.id){
					arr[i].num++
					console.log(arr[i].num)
				}
			}
		}else{
			goodsInfo.num = num
				
				
			arr.push(goodsInfo)
		}
		
		
		localStorage.setItem('carts',JSON.stringify(arr))
		window.location.href = '../pages/cart.html'
})