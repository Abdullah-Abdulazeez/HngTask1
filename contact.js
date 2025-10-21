document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("successMsg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

    // Grab inputs
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // Grab error elements
    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const errorSubject = document.getElementById("error-subject");
    const errorMessage = document.getElementById("error-message");

    // Reset messages
    [errorName, errorEmail, errorSubject, errorMessage].forEach(
        (el) => (el.textContent = "")
    );
    successMsg.hidden = true;

    let isValid = true;

    // Validate name
    if (!name.value.trim()) {
        errorName.textContent = "Full name is required.";
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        errorEmail.textContent = "Email is required.";
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        errorEmail.textContent = "Enter a valid email (name@example.com).";
        isValid = false;
    }

    // Validate subject
    if (!subject.value.trim()) {
        errorSubject.textContent = "Subject is required.";
        isValid = false;
    }

    // Validate message length
    if (message.value.trim().length < 10) {
        errorMessage.textContent = "Message must be at least 10 characters.";
        isValid = false;
    }

    // Show success message
    if (isValid) {
        form.reset();
        successMsg.hidden = false;
    }
    });
});
