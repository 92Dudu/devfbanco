  //console.log(cuenta.password)
  let named = document.getElementById('inputName');
  let password = document.getElementById('inputPassword');
  let login = document.getElementById('login');
  let alerta = document.getElementById('alerta');
  let cuenta;
function compare(){
    cuenta = cuentas.find(cuenta => {
      if(cuenta.nombre === named.value && cuenta.password === password.value){
        alerta.innerHTML = '';
        localStorage.setItem("cuenta",JSON.stringify(cuenta));
        window.location.assign("profile.html");
      }else{
         alerta.innerHTML = 'Cuenta no encontrada';
      }
    })

    
}

login.addEventListener('click', compare);

