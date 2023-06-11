/* eslint-disable no-shadow */
/* eslint-disable no-undef */
'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const countrySelect = document.getElementById('country');

  countrySelect.addEventListener('change', function() {
    updatePhoneCode(this);
  });

  function updatePhoneCode(select) {
    const country = select.value;
    const phoneInput = document.getElementById('phone');
    let code = '';

    if (country === 'ukraine') {
      code = '+38';
    } else if (country === 'poland') {
      code = '+48';
    } else if (country === 'germany') {
      code = '+49';
    }

    phoneInput.value = code;
    phoneInput.focus();
  }
});

const form = document.getElementById('form');

async function handleSubmit(event) {
  event.preventDefault();

  const status = document.getElementById('form-status');
  const data = new FormData(event.target);

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json',
    },
  }).then(response => {
    if (response.ok) {
      status.innerHTML = 'Thanks for your submission!';
      form.reset();
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data['errors']
            .map(error => error['message']).join(', ');
        } else {
          status.innerHTML = 'Oops! There was a problem submitting your form';
        }
      });
    }
  }).catch(_error => {
    status.innerHTML = 'Oops! There was a problem submitting your form';
  });
}

form.addEventListener('submit', handleSubmit);
