// grab the form elements
var firstName = document.getElementById('first-name');
var lastName = document.getElementById('last-name');
var email = document.getElementById('email');
var confirmEmail = document.getElementById('confirm-email');

// define the checks
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

function numbersOnly(){

}
function validEmail() {
    //- contains @
}
function isTheSame() {

}


function cantBeBlank() {
    
}

// add the event listeners
firstName.addEventListener("focusout", textOnly);
lastName.addEventListener("focusout", textOnly);
email.addEventListener("focusout", validEmail);
confirmEmail.addEventListener("focusout", isTheSame);