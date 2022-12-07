$(function() {
   
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
       
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
        
          email: true
        },
        password: {
          required: true,
          minlength: 5
        }
      },
      
      messages: {
        firstname: "Por favor, introduzca su nombre",
        lastname: "Por favor, introduzca su apellido",
        email: "Por favor, introduce una dirección de correo electrónico válida"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });