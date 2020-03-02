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

// 1 $("#Pagination").pagination(pageCount, {
// 2         num_edge_entries: 2,
// 3         num_display_entries: 4
// 4         callback: pageselectCallback,
// 5         items_per_page:10,
// 6         prev_text: "上一页",
// 7         next_text: "下一页"
// 8     });