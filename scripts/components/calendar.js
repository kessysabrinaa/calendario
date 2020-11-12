
function calendario(){
    var data = new Date();

    var mes = document.getElementById("mes");
    mes.textContent = data.toLocaleDateString(navigator.language, {month:"long"});

    var diaSemana = document.getElementById("diaSemana");
    diaSemana.textContent = data.toLocaleDateString(navigator.language, {weekday: "long"});

    var diaMes = document.getElementById("diaMes");
    diaMes.textContent = data.getDate();

    var ano = document.getElementById("ano");
    ano.textContent = data.getFullYear();
}

export default calendario;