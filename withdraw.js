let infoReceive = JSON.parse(localStorage.getItem("cuenta"));
let withdraw = document.getElementById('withdraw');
let alerta = document.getElementById('alerta');
let inputAmount;
let saldo = parseInt(infoReceive.saldo,10);
function withdrawAmount(){
    inputAmount = parseInt(document.getElementById('inputAmount').value,10);
    console.log(saldo)
    console.log(saldo - inputAmount )

    if (inputAmount < 0){
        alerta.innerHTML = "Intente otra cantidad";
    } else if(saldo - inputAmount < 10){
        alerta.innerHTML = "El saldo es menor de 10";
    }else {
        alerta.innerHTML = "";
        infoReceive.saldo -= inputAmount;
        localStorage.setItem("cuenta",JSON.stringify(infoReceive));
        document.getElementById('inputAmount').value = "";
        success.innerHTML = " Retiro exitoso"
        checkLink.innerHTML = " Consultar saldo"
    
    }
       
}

withdraw.addEventListener('click', withdrawAmount);