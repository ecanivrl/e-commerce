
import headerFunc from './header.js';



// !Add product to local storage start
async function getData() {
  const photos = await fetch('../js/data.json');
  const data = await photos.json();

  data ? localStorage.setItem('products', JSON.stringify(data)) : []

}

getData();

const products = localStorage.getItem("products")

// !Add product to local storage end