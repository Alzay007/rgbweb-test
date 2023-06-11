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
