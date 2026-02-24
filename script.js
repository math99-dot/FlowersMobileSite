

/**
 * HAMBURGER MENU TOGGLE
 * This function shows/hides the navigation menu on mobile devices
 * When the hamburger icon is clicked, it toggles the 'show' class
 * on the navigation menu, making it visible or hidden
 */
function toggleMenu() {
    // Get the navigation menu element
    const nav = document.getElementById("navMenu");
    
    // Toggle the 'show' class - adds it if not present, removes if present
    nav.classList.toggle("show");
}

/**
 * CONTACT FORM VALIDATION
 * This section handles the contact form submission and validation
 * It prevents the default form submission and validates user input
 */
document.addEventListener("DOMContentLoaded", function() {
    // Get the contact form element
    const form = document.getElementById("contactForm");
    
    // Only add event listener if contact form exists on current page
    if(form){
        form.addEventListener("submit", function(e){
            // Prevent default form submission (page reload)
            e.preventDefault();

            // Get form field values and remove extra whitespace
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            
            // Get the message display element
            const formMessage = document.getElementById("formMessage");

            // Validation: Check if any required field is empty
            if(name === "" || email === "" || message === ""){
                // Display error message
                formMessage.textContent = "Please fill out all required fields.";
                formMessage.style.color = "red";
            } else {
                // All fields are filled - show success message
                // Note: This is a demo - in production, this would submit to a server
                formMessage.textContent = "Message sent successfully! We'll get back to you soon. (Demo only)";
                formMessage.style.color = "green";
                
                // Reset form fields after successful submission
                form.reset();
            }
        });
    }
});
