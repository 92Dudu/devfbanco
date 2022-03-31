let infoReceive = JSON.parse(localStorage.getItem("cuenta"));
let deposit = document.getElementById('deposit');
let inputAmount = document.getElementById('inputAmount').value;
let saldo = parseInt(infoReceive.saldo,10);
function depositAmount(){

    console.log(saldo)
    console.log(inputAmount)
}

// function depositAmount(){
//     if (saldo + inputAmount.value > 990 || saldo + inputAmount.value < 10){
//         console.log(infoReceive.saldo + inputAmount)
//         return ` <div class="alert alert-danger d-flex align-items-center" role="alert">
//         <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
//         <div>
//           An example danger alert with an icon
//         </div>
//       </div>
//       `;
//     } else{
//         console.log(inputAmount.value)
//     }
// }

deposit.addEventListener('click', depositAmount);