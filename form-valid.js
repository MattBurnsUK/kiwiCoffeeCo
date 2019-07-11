// grab the form elements
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var confirmEmail = document.getElementById('confirm-email');
var addressLineOne = document.getElementById('address1');
var postcode = document.getElementById('postcode');
var cardNumber = document.getElementById('card-number');
var cardName = document.getElementById('card-name');
var cardCVV = document.getElementById('card-cvv');
var cardExp = document.getElementById('card-exp');

// ----- define the checks -----

// check for numbers
function textOnly(e){
    const toCheck = e.target.value;
    console.log(toCheck);
    const regex = new RegExp("\\d");
    const errorMsgContainer = e.target.previousSibling.previousSibling.firstChild.nextSibling;
    console.log(errorMsgContainer);
    if (regex.test(toCheck) === true) {
        errorMsgContainer.innerHTML = "No numbers!";
        console.log("there is a number");
    } else {
        errorMsgContainer.innerHTML = "";
        console.log("no numbers here");
    }
}

// check that the input value contains an '@'
function validEmail(e) {
    //- contains @
    const toCheck = e.target.value;
    console.log(toCheck);
    const regex = new RegExp('@');
    const errorMsgContainer = e.target.previousSibling.previousSibling.firstChild.nextSibling;
    console.log(errorMsgContainer);
    if (regex.test(toCheck) === true) {
        errorMsgContainer.innerHTML = "";
        console.log("email address valid");
    } else {
        errorMsgContainer.innerHTML = "Please enter a valid email address";
        console.log("email address not valid");
    }
}

//check that the values in the 2 email fields match
function isTheSame(e) {
    const firstEmail = email.value;
    const confEmail = confirmEmail.value;
    const errorMsgContainer = e.target.previousSibling.previousSibling.firstChild.nextSibling;

    console.log(firstEmail);
    console.log(confEmail);

    if (firstEmail !== confEmail) {
        console.log('no match');
        errorMsgContainer.innerHTML = "Email addresses don't match";
    } else {
        console.log('match');
    }
}

// check the input field is not blank
function cantBeBlank(e) {
    const userInput = e.target.value;
    console.log(userInput);
    const errorMsgContainer = e.target.previousSibling.previousSibling.firstChild.nextSibling;

    if (userInput == '') {
        errorMsgContainer.innerHTML = "Cant be blank";
    } else {
        console.log('is not blank');
    }
}

// add the event listeners - 2 sets, depends on which page
if (firstName != null) {
    firstName.addEventListener("focusout", textOnly);
    lastName.addEventListener("focusout", textOnly);
    email.addEventListener("focusout", validEmail);
    confirmEmail.addEventListener("focusout", isTheSame);

    firstName.addEventListener("focusout", cantBeBlank);
    lastName.addEventListener("focusout", cantBeBlank);
    email.addEventListener("focusout", cantBeBlank);
    confirmEmail.addEventListener("focusout", cantBeBlank);
    addressLineOne.addEventListener("focusout", cantBeBlank);
    postcode.addEventListener("focusout", cantBeBlank);

} else {

    cardNumber.addEventListener("focusout", cantBeBlank);
    cardName.addEventListener("focusout", cantBeBlank);
    cardCVV.addEventListener("focusout", cantBeBlank);
    cardExp.addEventListener("focusout", cantBeBlank);
}