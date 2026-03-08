// script.js
const form = document.getElementById('registrationForm');

form.addEventListener('submit', e => {
  e.preventDefault(); // Останавливаем стандартную отправку

  const organization = form.organization.value;
  const name = form.name.value;
  const position = form.position.value;

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwRQVYJJx6aMcPKU423kYheZusSPqFRPWoP-I_8ttb8DHAjeJa-ORv8pVQeKY0iOg7S/exec';

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify({ organization, name, position }),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    // Переход на страницу Спасибо
    window.location.href = 'thanks.html';
  })
  .catch(error => {
    alert('Ошибка отправки, попробуйте снова');
    console.error(error);
  });

});
