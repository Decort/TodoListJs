function capture(){
    var userName = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    if (userName !== 'abc') {
        alert('Nombre incorrecto');
        document.getElementById('user').focus();
    } else {
        if (password !== '123') {
            alert('contraseñaincorrecta');
            document.getElementById('password').focus();
        }
    }   alert('registro correcto!')
    }
    
    
    