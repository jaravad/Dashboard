const form = document.forms['signInForm'];
form.addEventListener('submit', function handleFormSubmit(event) {
  event.preventDefault();

  const email = form['email'].value;
  const password = form['password'].value;

  const auth = new Authentication();
  auth.autEmailPass(email, password);
  form.reset(); //try
});

const resetPassword = () => {
  const email = document.getElementById('resetEmail');
  firebase
    .auth()
    .sendPasswordResetEmail(email.value)
    .then(function () {
      Swal.fire(
        'Listo!',
        'Te hemos enviado un email para que restablezcas tu contraseña!',
        'success'
      );
    })
    .catch(function (error) {
      Swal.fire({
        title: 'Error!',
        text: 'No se pudo enviar el correo para restablecer contraseña',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    });
};
