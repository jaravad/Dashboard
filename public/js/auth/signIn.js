const form = document.forms['signInForm'];
form.addEventListener('submit', function handleFormSubmit(event) {
  event.preventDefault();

  const email = form['email'].value;
  const password = form['password'].value;

  const auth = new Authentication();
  auth.autEmailPass(email, password);
  form.reset(); //try
});
