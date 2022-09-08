const productListContainer = document.querySelector("#productsList");
const productListBuyed = document.querySelector("#purchased");
const productListTotal = document.querySelector(".total");
const productListCount = document.querySelector(".product-count");

function printProductsList(data) {
	let html = "";
	data.forEach(({ img, productName, duration, modality, price, id }) => {
		html += `<div class="card">
<div class="card-img"><img src="${img}" alt="imagen" /></div>
<div class="card-info">
  <p class="text-title">${productName}</p>
  <p class="text-body"><span>Duración:</span> ${duration}</p>
  <p class="text-body"><span>Modalidad:</span> ${modality}</p>
  </div>
<div class="card-footer">
<span class="text-title">$${price}</span>
<div class="card-button" id="${id}">
<svg xmlns="http://www.w3.org/2000/svg" width="24" class="add" height="24" style="fill: rgba(0, 0, 0, 1);"><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle><path d="m14 13.99 4-5h-3v-4h-2v4h-3l4 5z"></path><path d="M17.31 15h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14z"></path></svg>
</div>
</div></div>`;
	});
	productListContainer.innerHTML = html;
}

function printProductsBuyed(data) {
	let html = "";
	let totalPrice = 0;
	let totalCount = 0;
	let arrayCart = Object.values(data);
	arrayCart.forEach(({ img, amount, price, id }) => {
		html += `<div class="purchaserd_container" id="${id}">
		<img src="${img}" alt="imagen" /><svg class="remove"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			style="fill: rgba(0, 0, 0, 1);"
		>
			<path
				d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"
			></path>
			<span>Plazas: ${amount}</span>
			<p>  $${price * amount}</p>
			
		</svg>
	</div>
	`;
	});
	arrayCart.forEach(({ amount, price }) => {
		totalPrice += amount * price;
	});
	arrayCart.forEach(({ amount }) => {
		totalCount += amount;
	});

	productListBuyed.innerHTML = html;
	productListTotal.innerHTML = `<p>Total: $${totalPrice}</p><button class="btn"> ¡Comprar!
	</button>`;
	productListCount.textContent = totalCount;
}
export { printProductsList };
export { printProductsBuyed };
