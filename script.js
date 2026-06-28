document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signInForm");
  const submitBtn = document.getElementById("submitBtn");
  const errorBox = document.getElementById("errorMessages");

  // Input fields
  const fullName = document.getElementById("fullName");
  const username = document.getElementById("username");
  const passcode = document.getElementById("passcode");
  const gmail = document.getElementById("gmail");
  const contactNumber = document.getElementById("contactNumber");
  const age = document.getElementById("age");
  const profession = document.getElementById("profession");

  // Validation function
  function validateForm() {
    let errors = [];

    if (fullName.value.trim() === "") errors.push("Full name is required.");
    if (username.value.trim() === "") errors.push("Username is required.");
    if (passcode.value.trim() === "") errors.push("Passcode is required.");
    if (gmail.value.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gmail.value.trim())) {
      errors.push("Enter a valid email address.");
    }
    if (contactNumber.value.trim().length !== 11 || !/^\d{11}$/.test(contactNumber.value.trim())) {
      errors.push("Contact number must be exactly 11 digits.");
    }
    if (age.value.trim() === "") errors.push("Age is required.");
    if (profession.value.trim() === "") errors.push("Profession is required.");

    return errors;
  }

  // Real-time validation (auto button change + welcome message)
  form.addEventListener("input", () => {
    const errors = validateForm();

    if (errors.length > 0) {
      errorBox.innerText = errors.join("\n");
      errorBox.style.display = "block";
      submitBtn.classList.remove("btn-glow"); // remove glow if errors
    } else {
      errorBox.innerText = "🎉 Welcome! All fields look perfect, you are ready to Sign In 🎉";
      errorBox.style.display = "block";
      submitBtn.classList.add("btn-glow"); // auto glow when valid
    }
  });

  // Final submit check
  form.addEventListener("submit", (e) => {
    const errors = validateForm();

    if (errors.length > 0) {
      e.preventDefault();
      errorBox.innerText = errors.join("\n");
      errorBox.style.display = "block";
      alert(errors.join("\n"));
    } else {
      e.preventDefault();
      errorBox.innerText = "🎉 Redirecting... Welcome to IDAI Universe 🎉";
      setTimeout(() => {
        window.location.href = "Intro.html"; // Redirect to Intro.html
      }, 1000);
    }
  });
});
