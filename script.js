const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {

  e.preventDefault();

  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbycJUTWPBMV7O1BbFpRnrboJWaIOR6-U9b9qWYrUD54ccBqniXhntrIGOv0e8SybUx7/exec", {
    method: "POST",
    body: formData
  });

  window.location.href = "thanks.html";

});




