function guardar() {
    validarCampos()
}
function validarCampos() {
    let id_cardholdername = document.getElementById("id_cardholdername").value;

    if (id_cardholdername === "") {
        mostrarMensaje("Campo Nombre vacío");
        mostrarAsterisco('id_cardholdername');
        return;
    }
    let id_cardnumber = document.getElementById("id_cardnumber").value;
    if (id_cardnumber === "") {
        mostrarMensaje("Campo Apellido vacío");
        mostrarAsterisco('id_cardnumber');
        return;
    }


    let id_expdate = document.getElementById("id_expdate").value;
    if (id_expdate === "") {
        mostrarMensaje("Campo Fecha vacío");
        mostrarAsterisco('id_expdate');
        return;
    }
    let id_cvv = document.getElementById("id_cvv").value;

    if (id_cvv === "") {
        mostrarMensaje("Campo Email vacío");
        mostrarAsterisco('id_cvv');
        return;
    }
    let password = document.getElementById("id_password").value;
    if (password === "") {
        mostrarMensaje("Campo Password vacío");
        mostrarAsterisco('id_error_password');
        return;
    }


}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = msg;
    mensaje.style.display = "block";
    setTimeout(() => {
        mensaje.style.display = "none";
    }, 1500)
}

function mostrarAsterisco(idElemento) {

    let mostrarAsterisco = document.getElementById(idElemento);
    mostrarAsterisco.innerText = "*";
    mostrarAsterisco.style.display = "inline";
    setTimeout(() => {
        mostrarAsterisco.style.display = "none";
    }, 1500)


}
