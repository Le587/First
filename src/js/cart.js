let carts = JSON.parse(localStorage.getItem('carts'))
console.log(carts)
let str = ''

carts.forEach(item => {
	
	
	
	let total = item.price * item.num
	str += `
			<div class="tr" >
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
					<div class="col-price">${item.price}.00</div>
					<div class="col-num">
						<div class="cunt-box">
							<div class="jianshao"></div>
							<div class="zongshu">${item.num}</div>
							<div class="zengjia"></div>
						</div>
					</div>
					<div class="col-total">${total}.00</div>
					<div class="col-handle" data-id="${item.id}">
						<a href="#">删除</a>
					</div>
				</div>
				
				
			</div>
	
			`
			$('col-tatol').text()
			$('.tbody').html(str)
				let more = document.querySelectorAll('.zengjia')
				let xiao = document.querySelectorAll(".tr-hidden .col-total")
				let less = document.querySelectorAll('.jianshao')
				let txt = document.querySelectorAll('.zongshu')
				let pricehe = document.querySelectorAll(".tr-hidden .col-total")
				for(let i = 0;i<more.length;i++){
					more[i].onclick = function(){
						for(let j = 0;j<txt.length;j++){
							txt[i].innerHTML = parseFloat(txt[i].innerHTML) + 0.5 
							for(let k = 0;k<xiao.length;k++){
								xiao[i].innerHTML = parseInt(txt[i].innerHTML) * item.price
								let s = 0
								for(let i = 0 ;i<pricehe.length;i++){
									s+= parseInt(pricehe[i].innerHTML)
								}
								$('.cart-info .cart-total1').text(s)
							}
						}
					}
				}
				for(let i = 0;i<less.length;i++){
					less[i].onclick = function(){
						for(let j = 0;j<txt.length;j++){
							if(txt[i].innerHTML > 1){
								txt[i].innerHTML = parseFloat(txt[i].innerHTML) - 0.5
								for(let k = 0;k<xiao.length;k++){
									xiao[i].innerHTML = parseInt(txt[i].innerHTML) * item.price
									let s = 0
									for(let i = 0 ;i<pricehe.length;i++){
										s+= parseInt(pricehe[i].innerHTML)
									}
									$('.cart-info .cart-total1').text(s)
								}
							}
						}
					}
				}
			
			
			let btn = document.querySelectorAll('.tr-hidden .col-handle')
			for(let i = 0;i<btn.length;i++){
				btn[i].onclick = function(){
					let id = this.getAttribute('data-id')
					console.log(id)
					carts = carts.filter(v=>v.id != id)
					console.log(carts)
					localStorage.setItem('carts',JSON.stringify(carts))
					location.reload()
				}
			}

			let ss = 0
			for(let i = 0 ;i<pricehe.length;i++){
				ss+= parseInt(pricehe[i].innerHTML)
			}
			$('.cart-info .cart-total1').text(ss)
})








// $('.tbody').html(str)
// 	let more = document.querySelectorAll('.zengjia')
// 	let xiao = document.querySelectorAll(".col-total")
// 	let less = document.querySelectorAll('.jianshao')
// 	let txt = document.querySelectorAll('.zongshu')
// 	for(let i = 0;i<more.length;i++){
// 		more[i].onclick = function(){
// 			for(let j = 0;j<txt.length;j++){
// 				txt[i].innerHTML = parseFloat(txt[i].innerHTML) + 0.5 
// 				for(let k = 0;k<xiao.length;k++){
// 					xiao[i].innerHTML = parseInt(txt[i].innerHTML) * 
// 				}
// 			}
// 		}
// 	}
// 	for(let i = 0;i<less.length;i++){
// 		less[i].onclick = function(){
// 			for(let j = 0;j<txt.length;j++){
// 				if(txt[i].innerHTML > 1){
// 					txt[i].innerHTML = parseFloat(txt[i].innerHTML) - 0.5
// 				}
// 			}
// 		}
// 	}
// $('col-tatol').text()