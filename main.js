let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#clos-cart");
cartIcon.onclick = () =>{
    cart.classList.add(".active");
};