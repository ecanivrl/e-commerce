const config = {
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

new Glide(".product-carousel", config).mount();

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

new Glide(".product-carousel2", config2).mount();