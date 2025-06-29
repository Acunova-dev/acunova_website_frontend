document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;

            // For demo purposes, just show an alert
            

            // In a real implementation, you would send this to your server
            // fetch('/api/subscribe', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ email }),
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Thank you for subscribing!');
            //     newsletterForm.reset();
            // })
            // .catch(error => {
            //     console.error('Error:', error);
            //     alert('There was an error subscribing. Please try again.');
            // });
        });
    }
});
