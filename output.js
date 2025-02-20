//make variables of the IDs
const username = document.getElementById('username');
const userEmail = document.getElementById('userEmail')
const userMessage = document.getElementById('userMessage')

//get values from localstorage
userEmailValue = localStorage.getItem('emailValue');
userNameValue = localStorage.getItem('userName');
messageValue = localStorage.getItem('message');

//assign values
username.innerHTML= `<h1 class="display-3"> Name: ${userNameValue}</h1>`
userEmail.innerHTML = `<h1 class="display-3"> Email: ${userEmailValue}</h1>`;
userMessage.innerHTML = `<h1 class="display-3"> Message: ${messageValue}</h1>`;

alert(`Your contact request has been sent.`)

