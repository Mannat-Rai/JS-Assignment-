const form = document.getElementById("regForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passwordError");

function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
        return false;
    } else {
        nameError.textContent = "";
        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid");
        return true;
    }
}

function validateEmail() {
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        return false;
    }
    if (!emailInput.value.includes("@")) {
        emailError.textContent = "Invalid email";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        return false;
    }

    emailError.textContent = "";
    emailInput.classList.add("valid");
    emailInput.classList.remove("invalid");
    return true;
}

function validatePassword() {
    if (passInput.value.trim() === "") {
        passError.textContent = "Password is required";
        passInput.classList.add("invalid");
        passInput.classList.remove("valid");
        return false;
    }
    if (passInput.value.length < 8) {
        passError.textContent = "Password must be at least 8 characters";
        passInput.classList.add("invalid");
        passInput.classList.remove("valid");
        return false;
    }

    passError.textContent = "";
    passInput.classList.add("valid");
    passInput.classList.remove("invalid");
    return true;
}

// Validate on typing (dynamic)
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passInput.addEventListener("input", validatePassword);

// Validate on submit
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let validName = validateName();
    let validEmail = validateEmail();
    let validPass = validatePassword();

    if (validName && validEmail && validPass) {
        alert("Form submitted successfully! (You can remove this alert if instructor says no alerts)");
    }
});
