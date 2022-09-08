function addProduct(e, productInfo, shopingCart, printProductsBuyed) {
	let idProduct = e.target.parentElement.id;
	const product = productInfo.find((item) => item.id == idProduct);

	if (shopingCart[idProduct]) {
		shopingCart[idProduct].amount++;
	} else {
		shopingCart[idProduct] = product;
		shopingCart[idProduct].amount = 1;
	}
	printProductsBuyed(shopingCart);
}
function removeProduct(e, shopingCart, printProductsBuyed) {
	console.log("clik");
	let idProduct = e.target.parentElement.id;

	if (shopingCart[idProduct].amount == 1) {
		delete shopingCart[idProduct];
	} else {
		shopingCart[idProduct].amount--;
	}
	printProductsBuyed(shopingCart);
}

export { addProduct, removeProduct };
