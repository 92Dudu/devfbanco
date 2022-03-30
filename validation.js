var cuentas = [
  
    { nombre: "Hiromi", saldo: 200, password: 'helloworld' },
    { nombre: "Manuel", saldo: 290, password: 'l33t' },
    { nombre: "Zai", saldo: 67, password: '1234' },
    { nombre: "Anahi", saldo: 67, password: '1235' },
    { nombre: "Luis", saldo: 67, password: '123' }
    
  ];


  //console.log(cuenta.password)
  let named = document.getElementById('inputName');
  let password = document.getElementById('inputPassword');
  let login = document.getElementById('login');
  let alerta = document.getElementById('alerta');
  let cuenta;
function compare(){
    let okay;
    cuenta = cuentas.find(cuenta => {
      if(cuenta.nombre === named.value && cuenta.password === password.value){
        localStorage.setItem("cuenta",JSON.stringify(cuenta));
        window.location.assign("profile.html");

      }else{
        alerta.innerHTML = 'Cuenta no encontrada';
      }
    })
    
}

login.addEventListener('click', compare);

