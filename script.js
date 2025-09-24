const form = document.querySelector("form");

// Seleccionamos cada input y su span de error asociado
const email = document.getElementById("email");
const emailError = email.nextElementSibling;

const cp = document.getElementById("cp");
const cpError = cp.nextElementSibling;

const countries = document.getElementById("countries").previousElementSibling;
const countriesError = countries.nextElementSibling;

const password = document.getElementById("password");
const passwordError = password.nextElementSibling;

const confirmPassword = document.getElementById("confirm-password");
const confirmPasswordError = confirmPassword.nextElementSibling;

// Función para mostrar un mensaje de error y cambiar el borde a rojo
function showValidationError(inputElement, errorMessageElement, message) {
  errorMessageElement.textContent = message;
  errorMessageElement.classList.add("active");
  inputElement.style.borderColor = "red";
}

// Función para ocultar un mensaje de error y cambiar el borde a verde
function hideValidationError(inputElement, errorMessageElement) {
  errorMessageElement.textContent = "";
  errorMessageElement.classList.remove("active");
  inputElement.style.borderColor = "green";
}

// Lógica de validación para el Email
email.addEventListener("blur", () => {
  // Solo validamos si el campo no está vacío
  if (email.value !== "") {
    if (email.checkValidity()) {
      hideValidationError(email, emailError);
    } else {
      showValidationError(
        email,
        emailError,
        "Por favor, introduce una dirección de correo válida."
      );
    }
  }
});

// Lógica de validación para el Código Postal
cp.addEventListener("blur", () => {
  if (cp.value !== "") {
    if (cp.checkValidity()) {
      hideValidationError(cp, cpError);
    } else {
      showValidationError(
        cp,
        cpError,
        "El código postal debe tener 5 dígitos."
      );
    }
  }
});

// Lógica de validación para el País
countries.addEventListener("blur", () => {
  if (countries.value !== "") {
    if (countries.checkValidity()) {
      hideValidationError(countries, countriesError);
    } else {
      showValidationError(
        countries,
        countriesError,
        "Por favor, elige un país de la lista."
      );
    }
  }
});

// Lógica de validación para la Contraseña
password.addEventListener("blur", () => {
  if (password.value !== "") {
    if (password.checkValidity()) {
      hideValidationError(password, passwordError);
    } else {
      showValidationError(
        password,
        passwordError,
        "La contraseña no puede estar vacía."
      );
    }
  }
});

// Lógica para el campo "Confirm your password"
confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity("Las contraseñas no coinciden.");
    showValidationError(
      confirmPassword,
      confirmPasswordError,
      "Las contraseñas no coinciden."
    );
  } else {
    confirmPassword.setCustomValidity("");
    hideValidationError(confirmPassword, confirmPasswordError);
  }
});

// Lógica para manejar el envío del formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (form.checkValidity()) {
    alert("¡Formulario enviado con éxito! ¡High five!");
  } else {
    form.reportValidity();
  }
});
