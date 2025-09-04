// Contact Form Enhancement Script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form[name="contact"]');
    if (!form) return;

    // Add loading state to submit button
    const submitBtn = form.querySelector('input[type="submit"]');
    const originalBtnText = submitBtn.value;

    // Phone number formatting
    const phoneInput = form.querySelector('#phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = value;
                } else if (value.length <= 6) {
                    value = value.slice(0, 3) + '-' + value.slice(3);
                } else {
                    value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
                }
            }
            e.target.value = value;
        });
    }

    // Form validation
    form.addEventListener('submit', function(e) {
        let isValid = true;
        const errors = [];

        // Email validation
        const email = form.querySelector('#email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            errors.push('Please enter a valid email address');
            isValid = false;
        }

        // Phone validation (if provided)
        if (phoneInput && phoneInput.value) {
            const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
            if (!phoneRegex.test(phoneInput.value)) {
                errors.push('Please enter a valid phone number (xxx-xxx-xxxx)');
                isValid = false;
            }
        }

        // Message length validation
        const message = form.querySelector('#message');
        if (message && message.value.trim().length < 10) {
            errors.push('Please provide more details in your message (at least 10 characters)');
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
            displayErrors(errors);
            return false;
        }

        // Show loading state
        submitBtn.value = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        submitBtn.style.cursor = 'not-allowed';
    });

    // Display error messages
    function displayErrors(errors) {
        // Remove existing error container
        const existingErrors = form.querySelector('.form-errors');
        if (existingErrors) {
            existingErrors.remove();
        }

        // Create error container
        const errorContainer = document.createElement('div');
        errorContainer.className = 'form-errors';
        errorContainer.style.cssText = `
            background-color: #f8d7da;
            color: #721c24;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 20px;
            border: 1px solid #f5c6cb;
        `;

        const errorTitle = document.createElement('strong');
        errorTitle.textContent = 'Please fix the following errors:';
        errorContainer.appendChild(errorTitle);

        const errorList = document.createElement('ul');
        errorList.style.marginBottom = '0';
        errorList.style.paddingLeft = '20px';

        errors.forEach(error => {
            const li = document.createElement('li');
            li.textContent = error;
            errorList.appendChild(li);
        });

        errorContainer.appendChild(errorList);
        form.insertBefore(errorContainer, form.firstChild);

        // Scroll to errors
        errorContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Add character counter for message field
    const messageField = form.querySelector('#message');
    if (messageField) {
        const counter = document.createElement('small');
        counter.style.cssText = 'display: block; text-align: right; color: #666; margin-top: -10px; margin-bottom: 10px;';
        counter.textContent = '0 / 500 characters';
        messageField.parentNode.insertBefore(counter, messageField.nextSibling);

        messageField.addEventListener('input', function(e) {
            const length = e.target.value.length;
            counter.textContent = `${length} / 500 characters`;
            if (length > 500) {
                counter.style.color = '#dc3545';
            } else if (length > 400) {
                counter.style.color = '#ffc107';
            } else {
                counter.style.color = '#666';
            }
        });

        // Limit message length
        messageField.maxLength = 500;
    }

    // Add visual feedback for required fields
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        const label = form.querySelector(`label[for="${field.id}"]`);
        if (label && !label.innerHTML.includes('*')) {
            label.innerHTML += ' <span style="color: #dc3545;">*</span>';
        }
    });

    // Add helpful placeholder text
    const firstNameField = form.querySelector('#fname');
    if (firstNameField) {
        firstNameField.placeholder = 'John';
    }

    const lastNameField = form.querySelector('#lname');
    if (lastNameField) {
        lastNameField.placeholder = 'Doe';
    }

    const emailField = form.querySelector('#email');
    if (emailField) {
        emailField.placeholder = 'john.doe@example.com';
    }

    if (phoneInput) {
        phoneInput.placeholder = '123-456-7890';
    }
});
