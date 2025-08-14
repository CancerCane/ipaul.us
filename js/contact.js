// Select elements
const contactLink = document.getElementById('contactLink');
const contactModal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close');
const contactForm = document.getElementById('contactForm');

// Event listener for opening the modal
contactLink.addEventListener('click', function() {
    contactModal.style.display = 'block';
});

// Event listener for closing the modal
closeBtn.addEventListener('click', function() {
    contactModal.style.display = 'none';
});

// Event listener for submitting the form
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
// Validation functions
function validateName(name) {
    return name.trim() !== '';
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}

function validateMessage(message) {
    return message.trim() !== '';
}

// Event listener for submitting the form with validation
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = contactForm.elements['name'].value;
    const email = contactForm.elements['email'].value;
    const phone = contactForm.elements['phone'].value;
    const message = contactForm.elements['message'].value;

    if (validateName(name) && validateEmail(email) && validatePhone(phone) && validateMessage(message)) {
        // All fields are valid, submit the form
        // You can add AJAX submission here
        console.log('Form submitted successfully');
    } else {
        // Display error messages or styles for invalid fields
        console.log('Please fill in all fields correctly');
    }
});    
    // Submit form data using AJAX
    // You can use fetch or XMLHttpRequest to send data to the backend
    // Example: fetch('submit_url', { method: 'POST', body: new FormData(contactForm) })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
});