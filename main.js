import { productInfo } from "./js/datos.js";
import {
	printProductsList,
	printProductsBuyed,
} from "./js/imprimir_contenido.js";
import { addProduct, removeProduct } from "./js/add_remove_product.js";
const shopingCartContainer = document.querySelector("aside");
const productsList = document.querySelector("#productsList");
const purchased = document.querySelector("#purchased");
const nav = document.querySelector("nav");
let shopingCart = {};

productsList.addEventListener("click", (e) => {
	if (e.target.classList.contains("add")) {
		addProduct(e, productInfo, shopingCart, printProductsBuyed);
	}
});
purchased.addEventListener("click", (e) => {
	if (e.target.classList.contains("remove")) {
		console.log("click");
		removeProduct(e, shopingCart, printProductsBuyed);
	}
});
nav.addEventListener("click", (e) => {
	if (e.target.classList.contains("shoping_cart-desplegar")) {
		shopingCartContainer.classList.toggle("desplegar_shoping_cart");
	}
});

printProductsList(productInfo);
