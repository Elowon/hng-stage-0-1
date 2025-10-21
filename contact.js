document.addEventListener("DOMContentLoaded", () =>{
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("test-contact-success");
    


    const fields = {
        name: document.getElementById("contact-name"),
        email: document.getElementById("contact-email"),
        subject: document.getElementById("contact-subject"),
        message: document.getElementById("contact-message")
    }

    const errors = {
        name: document.getElementById("test-contact-error-name"),
        email: document.getElementById("test-contact-error-email"),
        subject: document.getElementById("test-contact-error-subject"),
        message: document.getElementById("test-contact-error-message")
    }

    function emailValidation (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let valid = true;
        successMessage.textContent = "";

        Object.values(errors).forEach((el) => (el.textContent = ""));

        if(fields.name.value.trim() === ""){
            errors.name.textContent = "Name is reqired"
            valid = false;
        }

        if(fields.email.value.trim() === ""){
            errors.email.textContent = "Email is reqired"
            valid = false;
        }else if(!emailValidation(fields.email.value.trim())){
            errors.email.textContent = "Please enter a valid email"
            valid = false
        }

        if(fields.message.value.trim() === ""){
            errors.message.textContent = "Please enter your message"
        }else if(fields.message.value.trim() < 10) {
            errors.message.textContent = "Message must be morethan 10 characters"
            valid = false;
        }

        if(fields.subject.value.trim() === ""){
            errors.subject.textContent = "Subject is required"
        }

        if(valid){
            successMessage.textContent = "Sumitted successfully"
            form.reset()
        }
    })

})
