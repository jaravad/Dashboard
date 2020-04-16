class Authentication {
  autEmailPass(email, password) {
    //$('#avatar').attr('src', 'imagenes/usuario_auth.png')
    //Materialize.toast(`Bienvenido ${result.user.displayName}`, 5000)
    //$('.modal').modal('close')
  }

  crearCuentaEmailPass(email, password, nombre) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: nombre,
        });

        const configuracion = {
          url: 'http://websheal.web.app',
        };

        result.user.sendEmailVerification(configuracion).catch((error) => {
          console.error(error);
          Swal.fire({
            title: 'Error!',
            text: 'Error en enviar email de confirmación',
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        });

        firebase.auth().signOut();

        Swal.fire(`Bienvenido! ${nombre}`, 'Debes iniciar sesión!', 'success');
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: 'Error!',
          text: 'No se pudo crear el usuario',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      });
  }
}
