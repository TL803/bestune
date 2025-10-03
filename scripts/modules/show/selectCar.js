document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('form[data-car-form]');

  forms.forEach(form => {
    const carModelSelect = form.querySelector('select[name="car_model"]');
    const complectationSelect = form.querySelector('select[name="complectation"]');

    // Блокируем комплектацию по умолчанию
    if (complectationSelect) {
      complectationSelect.disabled = true;
      complectationSelect.value = ''; // сброс
    }

    // Находим ВСЕ блоки (мобильный + десктопный)
    const carInfoBlocks = form.closest('.flex')?.querySelectorAll('[data-car-info]') || document.querySelectorAll('[data-car-info]');
    const placeholderBlocks = form.closest('.flex')?.querySelectorAll('[data-car-placeholder]') || document.querySelectorAll('[data-car-placeholder]');

    const modelTitleEls = form.closest('.flex')?.querySelectorAll('[data-car-model-title]') || document.querySelectorAll('[data-car-model-title]');
    const complectationTextEls = form.closest('.flex')?.querySelectorAll('[data-car-complectation-text]') || document.querySelectorAll('[data-car-complectation-text]');
    const complectationDetailEls = form.closest('.flex')?.querySelectorAll('[data-car-complectation-detail]') || document.querySelectorAll('[data-car-complectation-detail]');

    // Находим блоки по data-атрибутам
    const paymentSection = form.querySelector('[data-step="payment"]');
    const termSection = form.querySelector('[data-step="term"]');
    const contactsSection = form.querySelector('[data-step="contacts"]');

    // Собираем все секции для скрытия
    const sectionsToHide = [paymentSection, termSection, contactsSection].filter(Boolean);

    function updateCarInfo() {
      const model = carModelSelect?.value.trim() || '';
      const complectation = complectationSelect?.value.trim() || '';

      if (complectationSelect) {
        complectationSelect.disabled = !model;
        if (!model) {
          complectationSelect.value = '';
        }
      }

      const ready = model && complectation;

      // Показываем/скрываем блоки с автомобилем
      if (ready) {
        modelTitleEls.forEach(el => el.textContent = model);
        complectationTextEls.forEach(el => el.textContent = `${complectation}, 2023`);
        complectationDetailEls.forEach(el => el.textContent = complectation);

        carInfoBlocks.forEach(el => el.classList.remove('hidden'));
        placeholderBlocks.forEach(el => el.classList.add('hidden'));
        
        // ПОКАЗЫВАЕМ блоки 2, 3, 4 когда машина выбрана
        sectionsToHide.forEach(section => {
          if (section) section.classList.remove('hidden');
        });
      } else {
        carInfoBlocks.forEach(el => el.classList.add('hidden'));
        placeholderBlocks.forEach(el => el.classList.remove('hidden'));
        
        // СКРЫВАЕМ блоки 2, 3, 4 когда машина не выбрана
        sectionsToHide.forEach(section => {
          if (section) section.classList.add('hidden');
        });
      }
    }

    if (carModelSelect) {
      updateCarInfo();
      carModelSelect.addEventListener('change', updateCarInfo);
    }

    if (complectationSelect) {
      complectationSelect.addEventListener('change', updateCarInfo);
    }
  });
});