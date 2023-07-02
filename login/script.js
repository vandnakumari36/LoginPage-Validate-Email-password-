function validateForm(event) {
  event.preventDefault();

  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");

  // Reset previous error messages
  emailError.textContent = "";
  passwordError.textContent = "";

  // Validate email format
  var email = emailInput.value;
  if (!validateEmail(email)) {
    emailError.textContent = "Invalid email format";
    return false;
  }

  // Validate password length
  var password = passwordInput.value;
  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters long";
    return false;
  }

  // Form is valid, submit the form
  document.getElementById("myForm").submit();
}

function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
//view password
// function ShowPassword() {
//   var x = document.getElementById("password");
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// }
