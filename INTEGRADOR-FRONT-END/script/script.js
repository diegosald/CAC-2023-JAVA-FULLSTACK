const cPrecios = {

    "Estudiante": {


        precio: 1000,
        descuento: 0.80
    },
    "Trainee": {


        precio: 1000,
        descuento: 0.5
    },
    "Junior": {


        precio: 1000,
        descuento: 0.15
    },
    
    "General": {


        precio: 1000,
        descuento: 0
    },


}


function veriCont() {
    const patronLetras = /^([a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,10}.){1,5}/
    const patronNumeros = /^[1-5]{1}$/
    const patronCorreo = /^((?:[A-Za-z0-9!#$%&'*+\-\/=?^_`{|}~]|(?<=^|\.)"|"(?=$|\.|@)|(?<=".*)[ .](?=.*")|(?<!\.)\.){1,64})(@)((?:[A-Za-z0-9.\-])*(?:[A-Za-z0-9])\.(?:[A-Za-z0-9]){2,})$/g
    const errores = []
    const nombre = document.getElementById("nombre-txt").value
    const apellido = document.getElementById("apellido-txt").value
    const cantidad = document.getElementById("cantidad-txt").value
    const correo = document.getElementById("correo-txt").value

    if (nombre == "") {
        errores.push("EL CAMPO NOMBRE NO PUEDE ESTAR VACIO")

    }
    else {
        if (!patronLetras.test(nombre)) {
            errores.push("DEBE INGRESAR BIEN SU NOMBRE")
            console.log(patronLetras.test(nombre))
        }
    }

    if (apellido == "") {
        errores.push("EL CAMPO APELLIDO NO PUEDE ESTAR VACIO")
    }
    else {

        if (!patronLetras.test(apellido)) {
            errores.push("DEBE INGRESAR BIEN SU APELLIDO")
            console.log(patronLetras.test(apellido))
        }

    }

    if (correo == "") {
        errores.push("EL CAMPO CORREO NO PUEDE ESTAR VACIO")

    }
    else {

        if (!patronCorreo.test(correo)) {
            errores.push("DEBE INGRESAR UN CORREO VALIDO")
            console.log(patronCorreo.test(correo))
        }

    }


    if (cantidad == "") {
        errores.push("EL CAMPO CANTIDAD NO PUEDE ESTAR VACIO")

    }
    else {
        if (!patronNumeros.test(cantidad)) {
            errores.push("SOLO PUEDE COMPRAR DE 1 HASTA 5 ENTRADAS")
            console.log(patronLetras.test(cantidad))
        }

    }


    return errores


}

function calcPrecio() {

    const tipo = document.getElementById("tipoent").value
    const cantidad = document.getElementById("cantidad-txt")
    const total = document.getElementById("total")
    let descuento = (cPrecios[tipo].precio * cPrecios[tipo].descuento)

    if (veriCont().length == 0) {

        total.innerHTML = (cantidad.value * (cPrecios[tipo].precio - descuento))
        //document.getElementById("antes-compra").className = "d-none"
        document.getElementById("bt-comprar").className = "mb-3 d-flex justify-content-center"
    }

    else {
        let cadena = ""
        for (let i = 0; i < veriCont().length; i++) {


            cadena += ("<p>" + veriCont()[i] + "<p>")
            // cadena += (veriCont()[i] + "\n")

        }
        //alert(cadena)

        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
            keyboard: false
        })
        document.getElementById("modal-body").innerHTML = cadena
        myModal.show()
    }

    // total.innerHTML = (cantidad.value * (cPrecios[tipo].precio - descuento))

}

function limpiar() {

    const noVacio = document.getElementsByClassName("no-vacio")
    document.getElementById("total").innerHTML = "0"
    document.getElementById("bt-comprar").className = "d-none"
    for (let i = 0; i < noVacio.length; i++) {

        noVacio[i].value = ""


    }

}

function selticket(nombre) {
    const tipo = document.getElementById("tipoent")
    document.getElementById("nombre-txt").focus()
    tipo.value = nombre


}