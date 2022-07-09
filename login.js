let userName;
let password;



const loginButton = document.getElementById('login');
const form = document.getElementById('login-form');
form.addEventListener('submit', onSubmit);




function onSubmit(event){ 
    userName = document.getElementById('user').value;
    password = document.getElementById('password').value;
    if (userName !== 'abc' || password !== '123') {
        alert('Credenciales incorrectass');
        event.preventDefault();
        return 
    } 
    window.location.replace('www.google.com');  
}


    
        
    
    
    