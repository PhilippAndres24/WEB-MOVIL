$(document).ready(function() {
    $("formulario").validate();


    $(document).ready(function() {
        $("formulario").validate({
            errorClass: "error fail-alert",
            validClass: "valid success-alert",
            rules: {
                usuario: {
                    required: true,
                    minlength: 6



                },
                password: {
                    required: true,
                    minlength: 6
                },
                email: {
                    required: true,
                    email: true
                },

                messages: {
                    usuario: {
                        minlength: "el nombre debe contener almenos 6 caracteres"
                    },

                    email: {
                        email: "El email debe ser formato: abc@domain.tld"
                    },
                    password: {
                        minlength: "Ingrese su contraseña, almenos debe contener 6 carácteres"
                    }
                }
            }
        });
    });
});