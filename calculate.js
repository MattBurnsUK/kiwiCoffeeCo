var prices = document.getElementsByClassName('price');
console.log(prices);

var priceArray = [0];

for (let h=0; h < prices.length; h++) {
    var theString = prices[h].textContent;
    var numbered = parseFloat(theString);
    priceArray.push(numbered);
}


function addUp(total, num) {
    return total + num;
}

function updateTotalPrice(){
    var subtotal = priceArray.reduce(addUp);
    console.log("updated subtotal is");
    console.log(subtotal);
    document.getElementById('total-price').innerHTML = subtotal;
}


