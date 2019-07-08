var basketItems = JSON.parse(localStorage.getItem("storedBasketItems")) || [];
var basketButton = document.getElementById("cart-button");
console.log(basketItems);


// add item to cart on button cick
basketButton.onclick = function() {
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
