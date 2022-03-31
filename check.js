let infoReceive = JSON.parse(localStorage.getItem("cuenta"));
let amount = document.getElementById('amount');
amount.innerHTML = "$" + infoReceive.saldo;