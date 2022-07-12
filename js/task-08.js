const form = document.querySelector('.login-form');
// console.log(form);

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  //   console.log(formElements);
  const email = formElements.email.value;
  //   console.log(`email: ${email}`);
  const password = formElements.password.value;
  //   console.log(`password: ${password}`);
  if (password.length === 0 || email.length === 0) {
    return alert('Please, fill all fields!');
  }
  const formData = {
    email,
    password,
  };

  console.log(formData);
  event.currentTarget.reset();
}
//****best for form data collection */
// form.addEventListener('submit', onFormSubmit);
// function onFormSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   console.log(formData);
// }
