function showMessage() {
    alert("Welcome to Incredible India!");
}

function submitForm(event) {
    event.preventDefault();
    document.getElementById("contact-response").innerText = "Thank you! Your message has been sent (Simulated).";
    document.querySelector(".contact-form").reset();
}