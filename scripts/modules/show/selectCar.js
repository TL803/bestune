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

      if (ready) {
        modelTitleEls.forEach(el => el.textContent = model);
        complectationTextEls.forEach(el => el.textContent = `${complectation}, 2023`);
        complectationDetailEls.forEach(el => el.textContent = complectation);

        carInfoBlocks.forEach(el => el.classList.remove('hidden'));
        placeholderBlocks.forEach(el => el.classList.add('hidden'));
      } else {
        carInfoBlocks.forEach(el => el.classList.add('hidden'));
        placeholderBlocks.forEach(el => el.classList.remove('hidden'));
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