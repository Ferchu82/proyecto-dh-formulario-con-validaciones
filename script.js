const submitFunction = (event) => {
  event.preventDefault();
  validarFormulario() // Evita el envío del formulario por defecto
}

document.getElementById("formulario").addEventListener("submit", submitFunction);// Escucha el envio del formulario

function validarFormulario() {
    let camposTexto = document.querySelectorAll("input[type='text']");
    let validacionCorrecta = true;

    camposTexto.forEach (campo => {
        let errorCampo = document.getElementById("error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)); //error + id con la primera letra mayuscula
        if (campo.value.length == ''){
            mostrarError(errorCampo, "Este campo es obligatorio");
            validacionCorrecta = false;
        }else if(campo.value.length >0 && campo.value.length < 3){
            mostrarError(errorCampo, "Este campo debe tener al menos 3 caracteres");
            validacionCorrecta = false;
        }else{
            ocultarError(errorCampo);
        }
    });
}


const mostrarError = (elemento, mensaje) => {
    elemento.innerText = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
     elemento.innerText = '';
    elemento.style.display = "none";
}