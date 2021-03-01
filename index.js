// STEP 1 Hide and Show Subscribe Form
let formBtn = document.getElementById(`close-form`);
let form = document.getElementsByClassName(`form`);

function toggler() {
form.classList.toggle(`hide`);
 if (formBtn.innerText === `X`) {
     formBtn.innerText = `+`;
 } else {
     formBtn,innerText = `X`
 }
}

// STEP 2 Form Validation

let nameInput = document.getElementById(`name`);
let emailInput = document.getElementById(`email`);
let emailList = [];

function validateForm() {
    if (nameInput.value === false && emailInput.value === false) {
        nameInput.style.border = `solid red 2px`;
        emailInput.style.border = `solid red 2px`;
        alert(`You must enter a name and an email address to subscribe!`)
    } else if (nameInput.value === false) {
        nameInput.style.border = `solid red 2px`;
        alert(`Please enter a name to subscribe!`)
    } else if (emailInput.value === false) {
        emailInput.style.border = `solid red 2px`;
        alert(`Please enter an email address to subscribe!`)
    } else {
        emailList.push(emailList.name);
        emailList.push(emailList.email);
        displayThankYou()
    }
}

form.addEventListener(`submit`, function(event) {
    event.preventDefault()
    validateForm()

})

// STEP 3 Thank You Message

let formContainer = document.getElementsByClassName(`form-container`);
function removeMessage() {
    formContainer.remove()
}
function displayThankYou() {
    formContainer.innerText = `Thank you for subscribing!`
    setTimeout(removeMessage(), 3000)
}

// STEP 4

nameInput.addEventListener(`change`, function(){
    nameInput.style.border = `none`;
})

emailInput.addEventListener(`change`, function(){
    emailInput.style.border = `none`;
})

// STEP 5

let cart = document.createElement(`div`);
let main = document.getElementsByClassName(`hero`);
let cartItems = 0;
function addToCart() {
    if (cartItems = 0) {
        cartItems = 1;
        cart.setAttribute(`cart-display`);
        cart.innerText = `Your Cart: 1 item`;
        main.appendChild(cart);
    } else {
        cartItems++;
        cart.innerText = `Your Cart: ${cartItems} items`
    }
}