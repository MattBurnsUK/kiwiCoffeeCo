var basketItems = JSON.parse(localStorage.getItem("storedBasketItems")) || [];
var gridContainer = document.getElementById("basket");

document.addEventListener('DOMContentLoaded', setPageUp());
//document.addEventListener('DOMContentLoaded', updateTotalPrice());

function setPageUp(){
    // display all items in the basket
    var cartItemID = 0;
    for (let l = 0; l < basketItems.length; l++){
        // create a new section for each item
        var item = document.createElement('section');
        item.setAttribute('class','basket-item');
        gridContainer.appendChild(item);

        // add cart item IDs
        cartItemID ++
        var prodID = document.createElement('section');
        prodID.setAttribute('class','item-id');
        prodID.textContent = cartItemID;
        item.appendChild(prodID);

        //set the image;
        var image = document.createElement("img");
        image.setAttribute('src','mexican-coffee.png')
        item.appendChild(image);

        // set the title
        var title = document.createElement('section');
        title.setAttribute('class','title');
        title.textContent = basketItems[l][0];
        item.appendChild(title);

        // set the bag size
        var size = document.createElement('section');
        size.setAttribute('class', 'bag-size');
        size.textContent = basketItems[l][1];
        item.appendChild(size);
        var priceFor = size.textContent;

        // set the grind size
        var grindSize = document.createElement('section');
        grindSize.setAttribute('class','grind-size');
        grindSize.textContent = basketItems[l][2];
        item.appendChild(grindSize);

        // set the price
        var price = document.createElement('price');
        price.setAttribute('class','price');
        console.log(priceFor)
        if (priceFor === '200g') {
            price.textContent = 9.99;
        } else {
            price.textContent = 14.99;
        }
        item.appendChild(price);

        // add in remove from cart buttons
        var removeFromCart = document.createElement("button");
        removeFromCart.textContent = "remove item";
        removeFromCart.setAttribute('class','remove-from-cart');
        item.appendChild(removeFromCart);

        // add event listeners to all remove buttons
        updateEventListeners();
    }
    //update the total price
    updateTotalPrice();
}


// remove from cart button
function removeClick(e){
    let cartItem = e.target.parentElement;
    let deleteItemID = e.target.parentElement.firstChild.textContent;
    let deleteArrIndex = deleteItemID - 1;
    console.log(cartItem);
    console.log(deleteItemID);
    console.log(deleteArrIndex);
    //remove the clicked item from the page
    gridContainer.removeChild(cartItem);
    // update the array with the new basket - delete item from the array
    basketItems.splice(deleteArrIndex, 1);
    // update local storage with the new array
    localStorage.setItem("storedBasketItems", JSON.stringify(basketItems));
    // update the total price
    updateTotalPrice();
}


// Apply the event listeners to all itmes

function updateEventListeners () {
    var removeButtons = document.getElementsByClassName('remove-from-cart');
    for (let i=0; i<removeButtons.length; i++){
        removeButtons[i].addEventListener("click", removeClick);
    }
}

// price updates

function updateTotalPrice() {
    var prices = document.getElementsByClassName('price');
    console.log(prices);

    var priceArray = [];

    for (let h=0; h < prices.length; h++) {
        var theString = prices[h].textContent;
        var numbered = parseFloat(theString);
        priceArray.push(numbered);
    }

    function addUp(total, num) {
        return total + num;
    }

    var subtotal = priceArray.reduce(addUp);
    console.log("updated subtotal is");
    console.log(subtotal);
    document.getElementById('total-price').innerHTML = subtotal;
};