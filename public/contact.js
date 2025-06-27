document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // For demo purposes, just show an alert
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();

            // In a real implementation, you would send this data to your server
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data),
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Thank you for your message! We will get back to you soon.');
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            //     alert('There was an error sending your message. Please try again.');
            // });
        });
    }
});
