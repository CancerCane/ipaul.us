// Event listener for submitting the form with AJAX
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = contactForm.elements['name'].value;
    const email = contactForm.elements['email'].value;
    const phone = contactForm.elements['phone'].value;
    const message = contactForm.elements['message'].value;

    if (validateName(name) && validateEmail(email) && validatePhone(phone) && validateMessage(message)) {
        // All fields are valid, submit the form using AJAX
        fetch('submit_url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone, message })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            console.log('Form submitted successfully:', data);
            // Handle the response data as needed
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle any errors that occurred during the submission
        });
    } else {
        console.log('Please fill in all fields correctly');
    }
});