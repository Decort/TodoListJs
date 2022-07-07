function capture(){
    var userName = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    if (userName !== 'abc') {
        alert('Nombre incorrecto');
        document.getElementById('user').focus();
    } else if (password !== '123') {
            alert('contraseña incorrecta');
            document.getElementById('password').focus(); 
    } else if ( userName === 'abc' && password === '123') {
        alert('registro correcto!');
    }
    }


    
        
    
    
    