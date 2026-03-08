const form = document.getElementById('registrationForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form);

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwRQVYJJx6aMcPKU423kYheZusSPqFRPWoP-I_8ttb8DHAjeJa-ORv8pVQeKY0iOg7S/exec';

  fetch(scriptURL, {
    method: 'POST',
    body: new URLSearchParams(data) // отправляем как form-urlencoded
  })
  .then(response => window.location.href = 'thanks.html')
  .catch(error => {
    alert('Ошибка отправки, попробуйте снова');
    console.error(error);
  });
});

