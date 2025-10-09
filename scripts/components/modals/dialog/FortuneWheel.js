document.addEventListener('DOMContentLoaded', () => {
  // === Опциональная блокировка повторного показа через localStorage ===
  /*
  const hasSeenModal = localStorage.getItem('wheelModalShown');
  if (hasSeenModal) {
    return;
  }
  */

  setTimeout(() => {
    createWheelModal();
    // localStorage.setItem('wheelModalShown', 'true');
  }, 4000);
});

function createWheelModal() {
  const overlay = document.createElement('div');
  overlay.className = 'fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40';

  // Переключаем на flex-row только на lg (1024px+)
  const modalContainer = document.createElement('div');
  modalContainer.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col xl:flex-row items-center gap-4 lg:gap-8 p-3 sm:p-4 md:p-5 lg:p-6 bg-white rounded-xl max-w-[95vw] max-h-[90vh] overflow-auto mx-2';

  const wheelWrapper = document.createElement('div');
  wheelWrapper.className = 'relative overflow-hidden w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px] flex-shrink-0';

  const wheelContainer = document.createElement('div');
  wheelContainer.className = 'relative w-full h-full';

  const outerWheel = document.createElement('img');
  outerWheel.src = "../assets/wheel/Group 43028.png";
  outerWheel.alt = "Outer Wheel";
  outerWheel.className = 'absolute inset-0 w-full h-full object-cover z-[999999]';

  const wheelPrices = document.createElement('img');
  wheelPrices.src = "../assets/wheel/Group 43029.png";
  wheelPrices.alt = "Inner Wheel";
  wheelPrices.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[450px] lg:h-[450px] xl:w-[700px] xl:h-[700px] object-cover';

  const axis = document.createElement('img');
  axis.src = "../assets/wheel/Vector (3).png";
  axis.alt = "Axis";
  axis.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px] z-[999]';

  wheelContainer.append(outerWheel, wheelPrices, axis);
  wheelWrapper.append(wheelContainer);

  const textContainer = document.createElement('div');
  textContainer.className = 'flex flex-col gap-2 sm:gap-3 md:gap-4 max-w-[420px] text-center lg:text-left px-1 sm:px-2 md:px-3 lg:px-0 mt-3 md:mt-4 lg:mt-0';

  const title = document.createElement('h2');
  title.textContent = 'Розыгрыш призов!';
  title.className = 'text-lg sm:text-xl md:text-2xl font-bold text-gray-800';

  const subtitle = document.createElement('p');
  subtitle.textContent = 'Выиграйте подарок при покупке автомобиля в кредит!';
  subtitle.className = 'text-sm sm:text-base md:text-lg text-gray-600';

  const prizesList = document.createElement('div');
  prizesList.innerHTML = `
    <h3 class="font-medium text-gray-700 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">Список призов:</h3>
    <ul class="list-disc list-inside space-y-0.5 sm:space-y-1 text-gray-800 text-xs sm:text-sm md:text-base">
      <li>КАСКО</li>
      <li>Зимняя резина</li>
      <li>2 платежа по кредиту</li>
      <li>Сигнализация с автозапуском</li>
    </ul>
  `;

  const button = document.createElement('button');
  button.textContent = 'КРУТИТЬ БАРАБАН';
  button.className = 'mt-3 sm:mt-4 md:mt-5 px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 lg:px-6 lg:py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70 w-full text-xs sm:text-sm md:text-base';

  textContainer.append(title, subtitle, prizesList, button);
  modalContainer.append(wheelWrapper, textContainer);
  document.body.append(overlay, modalContainer);
  document.body.style.overflow = 'hidden';

  const closeWheelModal = () => {
    overlay.remove();
    modalContainer.remove();
    document.body.style.overflow = '';
  };

  overlay.addEventListener('click', closeWheelModal);

  const prizes = [
    { name: 'Зимняя резина', image: '../assets/wheel/prises/------------------- 2.png' },
    { name: 'Сигнализация с автозапуском', image: '../assets/wheel/prises/-------------------- 2 (1).png' },
    { name: 'КАСКО', image: '../assets/wheel/prises/---------- 1.png' },
    { name: '2 платежа по кредиту', image: '../assets/wheel/prises/x2-------- 2.png' },
    { name: 'Зимняя резина', image: '../assets/wheel/prises/------------------- 2.png' },
    { name: 'Сигнализация с автозапуском', image: '../assets/wheel/prises/-------------------- 2 (1).png' },
    { name: 'КАСКО', image: '../assets/wheel/prises/---------- 1.png' },
    { name: '2 платежа по кредиту', image: '../assets/wheel/prises/x2-------- 2.png' }
  ];

  button.addEventListener('click', () => {
    if (button.disabled) return;

    button.disabled = true;
    button.textContent = 'Крутится...';

    wheelPrices.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    void wheelPrices.offsetWidth;

    const sectors = prizes.length;
    const degreesPerSector = 360 / sectors;
    const targetSector = Math.floor(Math.random() * sectors);
    const extraRotations = 360 * (3 + Math.floor(Math.random() * 4));
    const finalRotation = extraRotations + (360 - targetSector * degreesPerSector);

    console.log(`Выбран сектор: ${targetSector}, Приз: ${prizes[targetSector].name}, Финальный угол: ${finalRotation}°`);

    animateWheel(finalRotation, 5000, () => {
      button.disabled = false;
      button.textContent = 'КРУТИТЬ БАРАБАН';
      showPrizeAlert(prizes[targetSector], closeWheelModal);
    });
  });

  function animateWheel(targetRotation, duration, callback) {
    const startTime = performance.now();
    const startRotation = 0;

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentRotation = startRotation + (targetRotation * easeOut);
      wheelPrices.style.transform = `translate(-50%, -50%) rotate(${currentRotation}deg)`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        callback();
      }
    }

    requestAnimationFrame(animate);
  }

function showPrizeAlert(prize, closeWheelModalCallback) {
  // 🔥 Закрываем модалку с колесом СРАЗУ
  closeWheelModalCallback();

  const prizeOverlay = document.createElement('div');
  prizeOverlay.className = 'fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-[60] flex items-center justify-center p-2 sm:p-3 md:p-4';

  const prizeModal = document.createElement('div');
  prizeModal.className = 'bg-white rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 w-full max-w-6xl shadow-lg relative mx-2 max-h-[90vh] overflow-y-auto';

  prizeModal.innerHTML = `
    <div class="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center p-4 sm:p-6 md:p-8 bg-white rounded-xl max-w-4xl mx-auto">
      <!-- Текст и форма -->
      <div class="flex-1 space-y-4 min-w-0 w-full">
        <h3 class="text-2xl sm:text-3xl font-bold text-gray-800 text-center lg:text-left">
          Вы выиграли ${prize.name}!
        </h3>
        <p class="text-gray-600 text-sm sm:text-base text-center lg:text-left">
          Оставьте заявку на обратный звонок, чтобы зафиксировать подарок за вами!
        </p>

        <form id="prizeForm" class="space-y-4" data-car-form>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label for="phone" class="block text-xs font-medium text-gray-700 mb-1">ТЕЛЕФОН*</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                data-validate="phone"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm"
                placeholder="+7 (XXX) XXX-XX-XX"
              >
            </div>
            <div>
              <label for="name" class="block text-xs font-medium text-gray-700 mb-1">ИМЯ*</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                data-validate="name"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-sm"
                placeholder="Введите"
              >
            </div>
          </div>

          <!-- Кастомный чекбокс как было ранее -->
          <div class="flex items-start space-x-2.5 sm:space-x-3 mt-2 sm:mt-3 md:mt-4">
            <label class="custom-checkbox-square relative inline-flex items-start">
              <input type="checkbox" id="myCheckbox" data-validate="required" checked/>
              <span class="checkmark ml-1.5 sm:ml-2">✓</span>
            </label>
            <span class="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Согласен с <a href="./privacypolicy.html" class="text-[#3366BD] underline hover:text-[#2a55a0]">политикой обработки персональных данных</a> *
            </span>
          </div>

          <div class="text-center pt-2">
            <button 
              type="submit"
              class="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors text-sm w-full sm:w-auto"
            >
              ОТПРАВИТЬ
            </button>
          </div>
        </form>
      </div>

      <div class="flex-shrink-0 w-[180px] h-[160px] sm:w-[220px] sm:h-[200px] md:w-[260px] md:h-[240px] lg:w-[300px] lg:h-[280px] relative overflow-hidden mt-4 lg:mt-0">
        <img 
          src="${prize.image}" 
          alt="${prize.name}" 
          class="w-auto h-full object-contain mx-auto"
        >
      </div>
    </div>
  `;

  prizeOverlay.appendChild(prizeModal);
  document.body.appendChild(prizeOverlay);

  const closePrizeModal = () => {
    prizeOverlay.remove();
  };

  prizeOverlay.addEventListener('click', (e) => {
    if (e.target === prizeOverlay) {
      closePrizeModal();
    }
  });

  // === Валидация и маска (остаётся без изменений) ===
  const phoneInput = prizeModal.querySelector('input[data-validate="phone"]');
  if (phoneInput && typeof IMask !== 'undefined') {
    const mask = IMask(phoneInput, {
      mask: '+{7} (000) 000-00-00',
      lazy: false
    });

    phoneInput.addEventListener('paste', function (e) {
      e.preventDefault();
      const pastedText = (e.clipboardData || window.clipboardData).getData('text') || '';
      let digits = pastedText.replace(/\D/g, '');
      if (digits.length > 0 && (digits[0] === '7' || digits[0] === '8')) {
        digits = digits.substring(1);
      }
      digits = digits.substring(0, 10);
      mask.unmaskedValue = digits;
      if (typeof toggleError === 'function') {
        toggleError(phoneInput, false);
      }
    });
  }

  const validateInputs = prizeModal.querySelectorAll('input[data-validate]');
  validateInputs.forEach(input => {
    if (input.type === 'checkbox') {
      input.addEventListener('change', () => {
        if (typeof toggleError === 'function') toggleError(input, false);
      });
    } else {
      input.addEventListener('focus', () => {
        if (typeof toggleError === 'function') toggleError(input, false);
      });
    }
  });

  const form = prizeModal.querySelector('form[data-car-form]');
  if (form) {
    form.addEventListener('submit', function (e) {
      let isValid = true;

      this.querySelectorAll('input[data-validate="name"]').forEach(input => {
        const value = input.value.trim();
        const valid = /^[а-яА-ЯёЁa-zA-Z\s]{2,}$/.test(value);
        if (typeof toggleError === 'function') toggleError(input, !valid);
        if (!valid) isValid = false;
      });

      this.querySelectorAll('input[data-validate="phone"]').forEach(input => {
        const unmasked = input.value.replace(/\D/g, '');
        const valid = unmasked.length === 11 && unmasked.startsWith('7');
        if (typeof toggleError === 'function') toggleError(input, !valid);
        if (!valid) isValid = false;
      });

      this.querySelectorAll('input[data-validate="required"][type="checkbox"]').forEach(input => {
        const valid = input.checked;
        if (typeof toggleError === 'function') toggleError(input, !valid);
        if (!valid) isValid = false;
      });

      if (!isValid) {
        e.preventDefault();
        console.warn('Форма содержит ошибки');
      } else {
        e.preventDefault();
        alert('✅ Ваша заявка отправлена! С вами скоро свяжутся.');
        closePrizeModal();
      }
    });
  }
}
}