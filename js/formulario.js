function guardar(){
validarCampos()
}

function validarCampos(){
    let nombre= document.getElementById("id_nombre").value;

    if(nombre===""){
        mostrarMensaje("Campo Incompleto");
        mostrarAsterisco('id_error_nombre');
        return;
    }
    let apellido = document.getElementById("id_apellido").value;
        if(apellido===""){
        mostrarMensaje("Campo Incompleto");
        mostrarAsterisco('id_error_apellido');
        return;
    }


    let fecha = document.getElementById("id_fecha").value;
        if(fecha===""){
        mostrarMensaje("Campo Incompleto");
        mostrarAsterisco('id_error_fecha');
        return;
    }
    let email = document.getElementById("id_email").value;
                    if(!validarEmail(email)){
                            mostrarMensaje("Email Incorrecto");
        mostrarAsterisco('id_error_email');
                }
            if(email===""){

        mostrarMensaje("Campo Incompleto");
        mostrarAsterisco('id_error_email');
        return;
    }

    
}

function mostrarMensaje(msg){
   let mensaje =  document.getElementById('id_msg_error');
   mensaje.innerText = msg;
   mensaje.style.display = "block";
   setTimeout(()=>{
     mensaje.style.display = "none";
   },1000)
}

function mostrarAsterisco(idElemento){

    let mostrarAsterisco =  document.getElementById(idElemento);
    mostrarAsterisco.innerText = "*";
       mostrarAsterisco.style.display = "inline";
       setTimeout(()=>{
           mostrarAsterisco.style.display = "none"; 
   },1000)
  

}

function limpiarMensajes(){
    let mensaje = document.getElementById('id_msg_error');
    mensaje.innerText = "";
    mensaje.style.display = "none";

    const erroresAsterisco= document.querySelectorAll('.error_asterisco');
    erroresAsterisco.forEach(e => e.innerText='');
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}