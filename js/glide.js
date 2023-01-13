const productsContainer = document.getElementById("product-list");


export function product1(){
    const config = {
        // type: "carousel",
        bound: true,
        gap:20,
        autoplay: 3000,
        perView: 4,
        hoverpause: true,
        breakpoints: {
            1200: {
                perView: 3,
            },
            992: { 
                perView: 2,
             },
            768: {
                perView: 1,
            },
        },
        
    }
    
 productsContainer &&   new Glide(".product-carousel", config).mount();
}

const config2 = {
    type: "carousel",
    gap:20,
    autoplay: 3000,
    perView: 4,
    hoverpause: true,
    breakpoints: {
        1200: {
            perView: 3,
        },
        992: { 
            perView: 2,
         },
        768: {
            perView: 1,
        },
    },
    
}

productsContainer &&  new Glide(".product-carousel2", config2).mount();