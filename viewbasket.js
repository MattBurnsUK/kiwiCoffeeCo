var basketItems = JSON.parse(localStorage.getItem("storedBasketItems")) || [];
var gridContainer = document.getElementById("basket");

// display all items in the basket
for (let l = 0; l < basketItems.length; l++){
    //set the image
    var image = document.createElement("img");
    image.setAttribute('src','mexican-coffee.png')
    gridContainer.appendChild(image);
    // set the title
    var title = document.createElement('section');
    title.setAttribute('class','title');
    title.textContent = basketItems[l][0];
    gridContainer.appendChild(title);
    // set the bag size
    var size = document.createElement('section');
    size.setAttribute('class', 'bag-size');
    size.textContent = basketItems[l][1];
    gridContainer.appendChild(size);
    var priceFor = size.textContent;
    // set the grind size
    var grindSize = document.createElement('section');
    grindSize.setAttribute('class','grind-size');
    grindSize.textContent = basketItems[l][2];
    gridContainer.appendChild(grindSize);
    // set the price
    var price = document.createElement('price');
    price.setAttribute('class','price');
    console.log(priceFor)
    if (priceFor === '200g') {
        price.textContent = 9.99;
    } else {
        price.textContent = 14.99;
    }
    gridContainer.appendChild(price);
    // remove from cart button
    var removeFromCart = document.createElement("button");
    removeFromCart.setAttribute('class','remove-from-cart');
    gridContainer.appendChild(removeFromCart);
}

// remove from cart button




/*
function binClick(e){
    let listItem = e.target.parentElement.parentElement;
    theList.removeChild(listItem);
    // update the array to remove the clicked item
    let arrVal = listItem.textContent;
    //console.log(arrVal);
    for (let i = 0; i < retrievedListItems.length; i++){
        if (retrievedListItems[i][0] === arrVal) {
            retrievedListItems.splice(i, 1);
        }
    }

    // update local storage with the new array
    localStorage.setItem("storedListItems", JSON.stringify(retrievedListItems));
}
*/