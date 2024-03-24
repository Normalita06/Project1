(function(){
    emailjs.init("_MmW0BwB5-grv05F9");

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_nswnc08', 'template_thnotlp', this)
            .then(function(response) {
                alert('Email sent successfully!');
                document.getElementById('contact-form').reset();
            }, function(error) {
                alert('Email failed to send. Please try again later.');
            });
    });
})();