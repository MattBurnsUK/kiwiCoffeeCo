// updating the cart item count on the basket button
var basketItems = JSON.parse(localStorage.getItem("storedBasketItems")) || [];

var cartCount = document.getElementById('cart-count');
var theCount = basketItems.length;
console.log(theCount);
cartCount.innerHTML = ' (' + theCount + ')';