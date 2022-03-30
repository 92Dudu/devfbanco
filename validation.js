var cuentas = [
    { nombre: "Hiromi", saldo: 200, password: 'helloworld' },
    { nombre: "Manuel", saldo: 290, password: 'l33t' },
    { nombre: "Luis", saldo: 67, password: '123' }
  ];


  //console.log(cuenta.password)
  let named = document.getElementById('inputName');
  let password = document.getElementById('inputPassword');
  let login = document.getElementById('login');
  let texto = document.getElementById('texto');

function compare(){
    

    let cuenta = cuentas.find(cuenta => cuenta.nombre === named.value && cuenta.password === password.value)
    

    //window.location.assign("profile.html");
    

   
}

login.addEventListener('click', compare);
console.log(named)
