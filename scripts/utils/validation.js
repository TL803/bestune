// === МАСКИ ===
document.querySelectorAll('input[data-validate="phone"]').forEach(input => {
  const mask = IMask(input, {
    mask: '+{7} (000) 000-00-00',
    lazy: false
  });

  // === ОБРАБОТКА ВСТАВКИ (Ctrl+V) ===
  input.addEventListener('paste', function (e) {
    e.preventDefault();

    // Получаем текст из буфера обмена
    const pastedText = (e.clipboardData || window.clipboardData).getData('text') || '';
    let digits = pastedText.replace(/\D/g, ''); // оставляем только цифры

    // Удаляем первую цифру, если это 7 или 8
    if (digits.length > 0 && (digits[0] === '7' || digits[0] === '8')) {
      digits = digits.substring(1);
    }

    // Берём не более 10 цифр — именно столько ожидает маска после +7
    digits = digits.substring(0, 10);

    // Устанавливаем значение через IMask API
    mask.unmaskedValue = digits;

    // Скрываем ошибку валидации
    toggleError(input, false);
  });
});

// === ВАЛИДАЦИЯ ФОРМЫ ===
document.querySelectorAll('[data-car-form]').forEach(form => {
  form.addEventListener('submit', function (e) {
    let isValid = true;

    // Имя
    this.querySelectorAll('input[data-validate="name"]').forEach(input => {
      const value = input.value.trim();
      const valid = /^[а-яА-ЯёЁa-zA-Z\s]{2,}$/.test(value);
      toggleError(input, !valid);
      if (!valid) isValid = false;
    });

    // Телефон
    this.querySelectorAll('input[data-validate="phone"]').forEach(input => {
      const unmasked = input.value.replace(/\D/g, '');
      const valid = unmasked.length === 11 && unmasked.startsWith('7');
      toggleError(input, !valid);
      if (!valid) isValid = false;
    });

    // Чекбокс (согласие)
    this.querySelectorAll('input[data-validate="required"][type="checkbox"]').forEach(input => {
      const valid = input.checked;
      toggleError(input, !valid);
      if (!valid) isValid = false;
    });

    if (!isValid) {
      e.preventDefault();
      console.warn('Форма содержит ошибки');
    }
  });
});

// === ФУНКЦИЯ ОТОБРАЖЕНИЯ ОШИБОК ===
function toggleError(input, hasError) {
  // Для чекбокса — ищем родительский label
  const wrapper = input.type === 'checkbox'
    ? input.closest('label')?.parentElement || input.parentElement
    : input.closest('div') || input.parentElement;

  let errorEl = wrapper.querySelector('.validation-error');

  if (hasError) {
    if (!errorEl) {
      errorEl = document.createElement('p');
      errorEl.className = 'validation-error text-red-400 text-sm mt-1';
      if (input.dataset.validate === 'name') {
        errorEl.textContent = 'Имя должно содержать минимум 2 буквы и не включать цифры';
      } else if (input.dataset.validate === 'phone') {
        errorEl.textContent = 'Пожалуйста, введите корректный номер телефона';
      } else if (input.dataset.validate === 'required' && input.type === 'checkbox') {
        errorEl.textContent = 'Необходимо согласие на обработку персональных данных';
      }
      wrapper.appendChild(errorEl);
    }
    // Подсветка: для чекбокса — label, для остальных — само поле
    if (input.type === 'checkbox') {
      const label = input.closest('label');
      if (label) label.classList.add('border-red-500');
    } else {
      input.classList.add('border-red-500');
    }
  } else {
    if (errorEl) errorEl.remove();
    if (input.type === 'checkbox') {
      const label = input.closest('label');
      if (label) label.classList.remove('border-red-500');
    } else {
      input.classList.remove('border-red-500');
    }
  }
}

// === СКРЫТЬ ОШИБКУ ПРИ ВЗАИМОДЕЙСТВИИ ===
document.querySelectorAll('input[data-validate]').forEach(input => {
  if (input.type === 'checkbox') {
    input.addEventListener('change', () => toggleError(input, false));
  } else {
    input.addEventListener('focus', () => toggleError(input, false));
  }
});