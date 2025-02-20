(function(){
    // Initialize EmailJS
    emailjs.init("lytEdxeJq0ZY_EHLW");
  })();
  
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      emailjs.sendForm('service_jxb3qcb', 'template_iw8fs1h', this)
        .then(function() {
          alert('Message sent successfully!');
          form.reset();
        }, function(error) {
          alert('An error occurred. Please try again later.');
          console.error('EmailJS Error:', error);
        });
    });
  });
  