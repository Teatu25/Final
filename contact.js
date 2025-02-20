const form = document.getElementById("contactForm")

form.addEventListener('submit',function(event){
    event.preventDefault()

    const emailValue = document.getElementById('email').value;
    const userName = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    localStorage.setItem('emailValue',emailValue);
    localStorage.setItem('userName',userName);
    localStorage.setItem('message',message);

  
    window.location.assign("output.html")
})