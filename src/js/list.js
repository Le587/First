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



//页面最初的渲染
function paixu(num){
	$.ajax({
	url:'/dt',
	data:{
		c: 'pc',
		s: 10000,
		v: 1.0,
		category_id: 61,
		sort_field: 1,
		sort_order: 2,
		pn: num,
		ps: 20
	},
	cache:false,
	dataType:'json',
	success:function(res){
		console.log(res)
		let str = ''
		let arr = res.data.pageList
		arr.forEach(item =>{
			str +=	`
					<a href="#" class="products">
						<img src=${item.image} >
						<span class="name">${item.name}</span>
						<span class="desc">${item.desc}</span>
						<span class="price"j>¥ ${item.linePrice /100}</span>
					</a>
					`
			
					
		$('.list-box').html(str)
		})
	}
})
}
paixu(1)




//点击价格排序
//点击一次加个class名字
$('.jiage-btn').one('click',function(){
	$('.sort-icon i').last().addClass('redjiantoub')
})
//点击切换class名字
$('.jiage-btn').click(function(){
	$('.jiage-btn').css('color','red')
	$('.sort-icon i').first().toggleClass('redjiantou')
	$('.sort-icon i').last().toggleClass('redjiantoub')
	if($('.sort-icon i').first().hasClass('redjiantou')){
		$.ajax({
			url:'/dt',
			data:{
				c: 'pc',
				s: 10000,
				v: 1.0,
				category_id: 61,
				sort_field: 1,
				sort_order: 2,
				pn: 1,
				ps: 20
			},
			cache:false,
			dataType:'json',
			success:function(res){
				console.log(res)
				let str = ''
				let arr = res.data.pageList.sort(function(x,y){
					return x.salePrice - y.salePrice
				})
				arr.forEach(item =>{
					str +=	`
							<a href="#" class="products">
								<img src=${item.image} >
								<span class="name">${item.name}</span>
								<span class="desc">${item.desc}</span>
								<span class="price"j>¥ ${item.linePrice /100}</span>
							</a>
							`
					
							
				$('.list-box').html(str)
				})
			}
		})
	}else{
		$.ajax({
			url:'/dt',
			data:{
				c: 'pc',
				s: 10000,
				v: 1.0,
				category_id: 61,
				sort_field: 1,
				sort_order: 2,
				pn: 1,
				ps: 20
			},
			cache:false,
			dataType:'json',
			success:function(res){
				console.log(res)
				let str = ''
				let arr = res.data.pageList.sort(function(x,y){
					return y.salePrice - x.salePrice
				})
				arr.forEach(item =>{
					str +=	`
							<a href="#" class="products">
								<img src=${item.image} >
								<span class="name">${item.name}</span>
								<span class="desc">${item.desc}</span>
								<span class="price"j>¥ ${item.linePrice /100}</span>
							</a>
							`
					
							
				$('.list-box').html(str)
				})
			}
		})
	}
	
})
//点击第二页
$('.page-item').last().click(function(){
		$('.page-item').last().addClass('no1').prev().removeClass('no1')
		$('.page-btn').last().addClass('pa1')
		$('.page-btn').first().removeClass('pa1')
		paixu(2)
		
		
	})
//点击第一页
$('.page-item').first().click(function(){
	$('.page-item').first().addClass('no1')
	$('.page-item').last().removeClass('no1')
	$('.page-btn').first().addClass('pa1')
	$('.page-btn').last().removeClass('pa1')
	paixu(1)
})
//点击下一页
$('.page-btn').last().click(function(){
	$('.page-item').last().addClass('no1').prev().removeClass('no1')
	$('.page-btn').last().addClass('pa1')
	$('.page-btn').first().removeClass('pa1')
	
	paixu(2)

})
//点击上一页
$('.page-btn').first().click(function(){
	$('.page-item').first().addClass('no1')
	$('.page-item').last().removeClass('no1')
	$('.page-btn').first().addClass('pa1')
	$('.page-btn').last().removeClass('pa1')
	paixu(1)
})

