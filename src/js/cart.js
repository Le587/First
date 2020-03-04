let carts = JSON.parse(localStorage.getItem('carts'))
console.log(carts)
let str = ''
carts.forEach(item => {
	str += `
			<div class="tr">
				<div class="tr-hidden">
					<div class="col-select">
						<span class="select-square">
							<span class="select-icon"></span>
						</span>
					</div>
					<div class="col-i">
						<a href="#" class="fl"><img src=${item.img} ></a>
						<div class="fr">
							<a href="#">${item.name}</a>
						</div>
					</div>
					<div class="col-price">￥${item.price}.00</div>
					<div class="col-num">
						<div class="cunt-box">
							<div class="jianshao"></div>
							<div class="zongshu">1</div>
							<div class="zengjia"></div>
						</div>
					</div>
					<div class="col-total">￥${item.price}.00</div>
					<div class="col-handle">
						<a href="#">删除</a>
					</div>
				</div>
				
				
			</div>
	
			`
	$('.tbody').html(str)
})

