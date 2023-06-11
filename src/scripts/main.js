document.getElementById('signupForm').addEventListener('submit', function (event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;

  var data = {
    name: name,
    phone: phone,
    email: email
  };

  // Відправляємо дані на сервер
  fetch('process_form.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(function (response) {
      if (response.ok) {
        // Виконуємо необхідні дії після успішного відправлення форми
        window.location.href = 'thank_you.html';
      } else {
        // Обробка помилки при відправці форми
        console.log('Помилка при відправці форми');
      }
    })
    .catch(function (error) {
      console.log('Помилка: ' + error);
    });
});
