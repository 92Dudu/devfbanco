let infoReceive = JSON.parse(localStorage.getItem("cuenta"));

let personName = document.getElementById("personName");
personName.innerHTML = infoReceive.nombre;