document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signInForm");
  const inputs = form.querySelectorAll(".form-control");
  const submitBtn = document.getElementById("submitBtn");

  // Validation function
  function validateForm() {
    let allFilled = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        allFilled = false;
      }
    });

    if (allFilled) {
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
      submitBtn.style.boxShadow = "0 0 20px #00ffcc";
    } else {
      submitBtn.disabled = true;
      submitBtn.style.opacity = "0.5";
      submitBtn.style.boxShadow = "none";
    }
  }

  // Check inputs on typing
  inputs.forEach(input => {
    input.addEventListener("input", validateForm);
  });

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // Full Name
    if (document.getElementById("fullName").value.trim() === "") {
      document.getElementById("errorFullName").classList.remove("d-none");
      valid = false;
    } else {
      document.getElementById("errorFullName").classList.add("d-none");
    }

    // Username
    if (document.getElementById("username").value.trim() === "") {
      document.getElementById("errorUsername").classList.remove("d-none");
      valid = false;
    } else {
      document.getElementById("errorUsername").classList.add("d-none");
    }

    // Passcode
    if (document.getElementById("passcode").value.trim() === "") {
      document.getElementById("errorPasscode").classList.remove("d-none");
      valid = false;
    } else {
      document.getElementById("errorPasscode").classList.add("d-none");
    }

    // Gmail validation
    const gmail = document.getElementById("gmail").value.trim();
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailPattern.test(gmail)) {
      document.getElementById("errorGmail").classList.remove("d-none");
      valid = false;
    } else {
      document.getElementById("errorGmail").classList.add("d-none");
    }

    // Contact number validation (exactly 11 digits)
    const contact = document.getElementById("contactNumber").value.trim();
    if (!/^\d{11}$/.test(contact)) {
      document.getElementById("errorContact").classList.remove("d-none");
      valid = false;
    } else {
      document.getElementById("errorContact").classList.add("d-none");
    }

    // Age
    if (document.getElementById("age").value.trim() === "") {
      document.getElementById("errorAge").classList.remove("d-none");
      valid = false;
    } else {
      document.getElementById("errorAge").classList.add("d-none");
    }

    // Profession
    if (document.getElementById("profession").value.trim() === "") {
      document.getElementById("errorProfession").classList.remove("d-none");
      valid = false;
    } else {
      document.getElementById("errorProfession").classList.add("d-none");
    }

    // If everything is valid, go to Home.html
    if (valid) {
      window.location.href = "Intro.html";
    }
  });
});
