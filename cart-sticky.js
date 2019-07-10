var button = document.getElementById("cart-sticky");
var popupButton = document.getElementById('cart-sticky-popup');
popupButton.addEventListener("click", cartStickyClick);


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