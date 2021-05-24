document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if (usuario.length == 0) {
        alert('No has escrito nada en campo Nombre Completo');
        return;
    }
    var email = document.getElementById('email').value;
    if (email.length == 0) {
        alert('No has escrito nada en el campo email, debe ser llenado como formato: abc@domain.tld');
        return;
    }
    var password = document.getElementById('password').value;
    if (password.length < 6) {
        alert('No has escrito nada en el campo de "CONTRASEÑA", porfavor ingrese nuevamente su contraseña y debe contener 6 carácteres');
        return;
    }
    this.submit();
    alert('Registrado');
}