const submitFunction = (event) => {
  if (!validarFormulario()) {
    event.preventDefault(); // Evita el envio del formulario si la validacion falla
  }else{
    event.preventDefault();
    alert(
        'Los datos enviados son:\n' +
        'Nombre: ' + document.getElementById("nombre").value + '\n' +
        'Apellido: ' + document.getElementById("apellido").value + '\n' +
        'Documento: ' + document.getElementById("documento").value + '\n' +
        'Email: ' + document.getElementById("email").value + '\n' +
        'Edad: ' + document.getElementById("edad").value + '\n' +
        'Actividad: ' + document.getElementById("actividad").value + '\n' +
        'Nivel de Estudio: ' + document.getElementById("nivelEstudio").value + '\n' +
        'Terminos y Condiciones: Aceptados')
  }
}

document.getElementById("formulario").addEventListener("submit", submitFunction);// Escucha el envio del formulario

function validarFormulario() {

    // Validacion de campos de texto
    const camposTexto = document.querySelectorAll("input[type='text']");
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

    // Validacion de email
    const email = document.getElementById("email");
    let errorEmail = document.getElementById("errorEmail");

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ // este regex valida el formato del email
        ocultarError(errorEmail);
    }else{
        mostrarError(errorEmail, "Por favor ingrese un email válido");
        validacionCorrecta = false; 
    }

    // Validacion Edad

    const edad = document.getElementById("edad");
    let errorEdad = document.getElementById("errorEdad");

    if(edad.value  < 18){
        mostrarError(errorEdad, "Debes ser mayor de 18 años");
        validacionCorrecta = false; 
    }else{
        ocultarError(errorEdad);
    }


    //Validacion de Actividad

    const actividad = document.getElementById("actividad");
    const errorActividad = document.getElementById("errorActividad");

    if(actividad.value === ""){
        mostrarError(errorActividad, "Por favor selecciona una actividad");
        validacionCorrecta = false; 
    }else{
        ocultarError(errorActividad);
    }   

    //Validacion Nivel de Estudio

    const nivelEstudio = document.getElementById("nivelEstudio");
    const errorNivelEstudio = document.getElementById("errorNivelEstudio");

    if(nivelEstudio.value === ""){
        mostrarError(errorNivelEstudio, "Por favor selecciona un nivel de estudio");
        validacionCorrecta = false; 
    }else{
        ocultarError(errorNivelEstudio);
    }

    //Validar Terminos y condiciones

    const aceptoTerminos = document.getElementById("aceptoTerminos");
    const errorAceptoTerminos = document.getElementById("errorAceptoTerminos");

    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, "Debes aceptar los términos y condiciones");
        validacionCorrecta = false; 
    }else{
        ocultarError(errorAceptoTerminos);
    }

    return validacionCorrecta; //Esto indica si el formulario es valido o no

}

const mostrarError = (elemento, mensaje) => {
    elemento.innerText = mensaje;
    elemento.style.display = "block";
    }

const ocultarError = (elemento) => {
     elemento.innerText = '';
    elemento.style.display = "none";
    }