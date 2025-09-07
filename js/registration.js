/**
 * configureFormValidation()
 * Sets up form submission blocking and event listener for validation.
 * Prevents default submit, validates all fields, and displays a result message.
 */



const configureFormValidation = function() {
    // Block form submission - need to stay on same page. Note use of action="#", too, in the HTML
    document.getElementsByTagName("form").item(0).onsubmit = function(event) {
        event.preventDefault();
    }
    const submitButton = document.getElementById("reg-submit-button")
    submitButton.addEventListener("click", function() {
        // Find the form by id and save the form object to a variable
        const form = document.getElementById("reg-form")
        // Get the div with the id reg-result-message and save it to a variable
        const resultMessage = document.getElementById("reg-result-message")
        // Call the checkPassword() function to make sure input in the password fields is valid & that they  match.
        const passwordOk = checkPassword()
        /* Use the form's checkValidity() function to validate the form's input. Display an appropriate message
           in the div for the result message. Don't use an alert or popup for the message.
         */
        if (form.checkValidity() && passwordOk) {
            resultMessage.textContent = "Registration form is valid."
            resultMessage.style.color = "green"
        } else {
            resultMessage.textContent = "There are invalid fields in the registration form. Please check your input."
            resultMessage.style.color = "red"

            // Call the form's reportValidity() function to show the built-in error messages for invalid fields
            // focus on the first invalid field
            form.reportValidity()
        }
        

    })
}

const checkPassword = function() {
    const passwordField = document.getElementById("reg-password-input")
    const verifyPasswordField = document.getElementById("reg-password-verify-input")
    /* Clear custom validity property for password fields before checking the validity of the form */
    passwordField.setCustomValidity("")
    verifyPasswordField.setCustomValidity("")

    // Complete code compare password & verify password.
    // Use JavaScript's checkValidity() to confirm that the requirements in the HTML have been met.
    // When comparing the values in the password and password verification fields, use ===
    // Use setCustomValidity() to assign an error string when there is a problem.
    // Setting the custom validity to an empty string means the input is valid

    //checking if password meets requirements 
    if (!passwordField.checkValidity()) {

        passwordField.setCustomValidity("Password must be at least 8 characters.");
        return false;
    }

    // check if verification meets requirements
    if (!verifyPasswordField.checkValidity()) {

        verifyPasswordField.setCustomValidity("Please re-enter your password. password must be at least 8 characters.");
        return false;
    }

    // check if passwords match
    if (passwordField.value !== verifyPasswordField.value) {

        verifyPasswordField.setCustomValidity("Passwords do not match. Please re-enter your password.");
        return false;
    }
    
    return true;
    


}

// Event handler called when page has loaded
window.onload = () => {
    // Add code here to call function to configure validation when page has loaded
    configureFormValidation();
}