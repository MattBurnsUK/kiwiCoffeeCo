var button = document.getElementById("cart-sticky");
var popupButton = document.getElementById('cart-sticky-popup');
popupButton.addEventListener("click", cartStickyClick);

/*
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var staticCartParent = document.getElementById('static-cart-container');
var staticCart = document.getElementById('addToCart');

function removeStaticCart(){
    if (w < 425) {
        staticCartParent.removeChild(staticCart);
    }
}

removeStaticCart();

*/

function cartStickyClick(e){
    var stateWhenClicked = button.getAttribute("class");
    switch (stateWhenClicked) {
        case 'cart-sticky':
            update('cart-sticky--clicked');
        break;
        case 'cart-sticky--clicked':
            update('cart-sticky');
        break;
    }
}

function update(newClass) {
    button.setAttribute("class", newClass);
}