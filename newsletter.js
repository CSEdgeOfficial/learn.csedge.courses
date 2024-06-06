
        document.getElementById('newsletterForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way

            var email = document.getElementById('email').value;
            var messageElement = document.getElementById('message');

            // Simple email validation
            if (email === '') {
                messageElement.textContent = 'Please enter a valid email address.';
                messageElement.style.color = 'red';
            } else {
                messageElement.textContent = 'Thank you for subscribing!';
                messageElement.style.color = 'grey';
            }
        })