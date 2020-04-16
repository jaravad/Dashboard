const form = document.forms['signupForm'];
form.addEventListener('submit', function handleFormSubmit(event) {
  event.preventDefault();

  const email = form['email'].value;
  const password = form['password'].value;
  const name = form['empname'].value;

  const auth = new Authentication();
  auth.crearCuentaEmailPass(email, password, name);
  form.reset();
});
