var basketItems = JSON.parse(localStorage.getItem("storedBasketItems")) || [];
var basketButton = document.getElementById("cart-button");
console.log(basketItems);
var basketButtonPopup = document.getElementById("cart-button-popup");

function updateCart(e){
    var prodName = document.getElementById("product-name");
    var prodSize = document.querySelector("input[type='radio'][name='size']:checked");
    var grindSize = document.querySelector("input[type='radio'][name='grind-size']:checked");
    // console.log(prodSize);
    // console.log(prodName);
    // console.log(grindSize);
    prodNameStrpt = prodName.textContent;
    prodSizeStrpt = prodSize.value;
    grindSizeStrpt = grindSize.value;
    // console.log(prodSizeStrpt);
    // console.log(prodNameStrpt);
    // console.log(grindSizeStrpt);
    // add new products to the array
    var addProduct = new Array(prodNameStrpt, prodSizeStrpt, grindSizeStrpt);
    console.log(addProduct);
    // add the product to the array
    basketItems.push(addProduct);
    // update local storage
    localStorage.setItem("storedBasketItems", JSON.stringify(basketItems));
}

// add event listeners to the buttons

basketButton.addEventListener("click", updateCart);
basketButtonPopup.addEventListener("click", updateCart);

// change the text on the 'add to cart' button once clicked - 2 buttons. 1 in popup(mob), 1 in page body(non-mob)
var addToCartButton = document.getElementById('cart-button-popup');
var addToCartButtonMain = document.getElementById('cart-button');
addToCartButton.addEventListener('click', updateCartText);
addToCartButtonMain.addEventListener('click', updateCartText);

function updateCartText(e) {
    if (e.target.getAttribute("text-to-swap") == e.target.innerHTML) {
        e.target.innerHTML = e.target.getAttribute('original-text');
    } else {
        e.target.setAttribute("original-text", e.target.innerHTML);
        e.target.innerHTML = e.target.getAttribute("text-to-swap");
        e.target.removeEventListener("click", updateCart);
        e.target.addEventListener("click", function (){
            document.location.href = "http://localhost/KiwiCoffeeCo2/basket";
        })
    }
}