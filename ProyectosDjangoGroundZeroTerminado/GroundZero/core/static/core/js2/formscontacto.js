document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});


function validarFormulario(evento) {
    evento.preventDefault();

    var email = document.getElementById('nombre').value;
    if (email.length == 0) {
        alert('Debe ingresar nombre');
        return;
    }
    var password = document.getElementById('autor').value;
    if (password.length == 0) {
        alert('Debe ingresar nombre del autor de la obra');
        return;


    }
    var email = document.getElementById('tecnica').value;
    if (email.length == 0) {
        alert('Debes ingresar la tecnica usada');
        return;
    }

    var email = document.getElementById('precio').value;
    if (email.length == 0) {
        alert('Debes Ingresar precio');
        return;
    }

    var email = document.getElementById('dimension').value;
    if (email.length == 0) {
        alert('No has escrito nada en campo DIMENSION');
        return;
    }
    var email = document.getElementById('email').value;
    if (email.length == 0) {
        alert('No has escrito nada en el campo email, debe ser llenado como formato: abc@domain.tld');
        return;
    }

    this.submit();
    alert('Solicitud enviada con exito');
}