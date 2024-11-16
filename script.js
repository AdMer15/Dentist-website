document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && validateEmail(email) && message) {
            alert(`Danke, ${name}! Wir haben Ihre Nachricht erhalten und werden uns bald bei Ihnen melden.`);
            form.reset();
        } else {
            alert("Bitte füllen Sie alle Felder korrekt aus.");
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
