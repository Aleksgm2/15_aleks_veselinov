function calcularNotaFinal() {
    var notaPrimeraEv = document.getElementById("nota_primera_ev").value;
    console.log("Nota primer input;" + notaPrimeraEv);

    var notaSegundaEv = document.getElementById("nota_segunda_ev").value;
    console.log("Nota segundo input;" + notaSegundaEv);

    var divResultado = document.getElementById("resultado");

    var notaFinal = (parseInt(notaPrimeraEv) + (notaSegundaEv) / 2);

    var nombre = document.getElementById("nombre").value;

    console.log("nota media: " + notaFinal)
    if (notaFinal >= 5) {
        divResultado.style.backgroundColor = "green";
        divResultado.innerHTML = "Aprobado";
        //TODO: recuperar por id el elemento resultado, y asignar a su propiedad innerHTML el texto "APROBADO :)"
        //TODO: recuperar por id el elemento resultado y asignar a su propiedad style.backgroundColor el color "green"
    } else {
        //TODO: recuperar por id el elemento resultado, y asignar a su propiedad innerHTML el texto "VUELVE A INTENTARLO :("
        //TODO: recuperar por id el elemento resultado y asignar a su propiedad style.backgroundColor el color "red"
        divResultado.style.backgroundColor = "red";
        divResultado.innerHTML = "Has suspendido, " + nombre + ".tu nota es " + notaFinal;
    }
}

function calcularNotaMedia(valor1, valor2) {
    return (parseInt(valor1) + parseInt(valor2) / 2);
}