
import headerFunc from './header.js';
import productsFunc from "./products.js";



// !Add product to local storage start
async function getData() {
  const photos = await fetch('../js/data.json');
  const data = await photos.json();

  data ? localStorage.setItem('products', JSON.stringify(data)) : []

}

getData();

const products = localStorage.getItem("products")

// !Add product to local storage end

// !Add product to CART local storage Start
 const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : "0";

// !Add product to CART local storage end
