let infoReceive = JSON.parse(localStorage.getItem("cuenta"));
let deposit = document.getElementById('deposit');
let alerta = document.getElementById('alerta');
let success = document.getElementById('success');
let checkLink = document.getElementById('checkLink');
let inputAmount;
let saldo = parseInt(infoReceive.saldo,10);
function depositAmount(){
    inputAmount = parseInt(document.getElementById('inputAmount').value,10);
    console.log(saldo)
    console.log(inputAmount + saldo)

    if (saldo + inputAmount > 990){
        alerta.innerHTML = "El saldo excede de 990";
    } else if(saldo + inputAmount < 10){
        alerta.innerHTML = "El saldo es menor de 10";
    }else {
        alerta.innerHTML = "";
        infoReceive.saldo +=  inputAmount;
        localStorage.setItem("cuenta",JSON.stringify(infoReceive));
        document.getElementById('inputAmount').value = "";
        success.innerHTML = " Abono exitoso"
        checkLink.innerHTML = " Consultar saldo"
    }
}


deposit.addEventListener('click', depositAmount);