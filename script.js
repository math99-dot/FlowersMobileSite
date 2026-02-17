
// Toggle hamburger navigation
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("show");
}

// Contact form validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const formMessage = document.getElementById("formMessage");

            if(name === "" || email === "" || message === ""){
                formMessage.textContent = "Please fill out all fields.";
                formMessage.style.color = "red";
            } else {
                formMessage.textContent = "Message sent successfully! (Demo only)";
                formMessage.style.color = "green";
                form.reset();
            }
        });
    }
});
