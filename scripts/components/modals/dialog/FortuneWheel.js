  // === Сразу при загрузке страницы создаём модал ===
    document.addEventListener('DOMContentLoaded', () => {
      // === Создаём оверлей с блюром ===
      const overlay = document.createElement('div');
      overlay.className = 'fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40';

      // === Общий контейнер модального окна (колесо + текст) ===
      const modalContainer = document.createElement('div');
      modalContainer.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-xl max-w-[95vw] max-h-[90vh] overflow-auto';

      // === Обёртка для колеса с overflow-hidden ===
      const wheelWrapper = document.createElement('div');
      wheelWrapper.className = 'relative overflow-hidden w-[600px] h-[600px]';

      const wheelContainer = document.createElement('div');
      wheelContainer.className = 'relative w-full h-full';

      const outerWheel = document.createElement('img');
      outerWheel.src = "../assets/wheel/Group 43028.png";
      outerWheel.alt = "Outer Wheel";
      outerWheel.className = 'absolute inset-0 w-full h-full object-cover z-[999999]';

      const wheelPrices = document.createElement('img');
      wheelPrices.src = "../assets/wheel/Group 43029.png";
      wheelPrices.alt = "Inner Wheel";
      wheelPrices.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] object-cover';

      const axis = document.createElement('img');
      axis.src = "../assets/wheel/Vector (3).png";
      axis.alt = "Axis";
      axis.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] z-[999]';

      wheelContainer.append(outerWheel, wheelPrices, axis);
      wheelWrapper.append(wheelContainer);

      // === Блок с текстом и кнопкой ===
      const textContainer = document.createElement('div');
      textContainer.className = 'flex flex-col gap-4 max-w-[400px] text-center md:text-left';

      const title = document.createElement('h2');
      title.textContent = 'Розыгрыш призов!';
      title.className = 'text-2xl font-bold text-gray-800';

      const subtitle = document.createElement('p');
      subtitle.textContent = 'Выиграйте подарок при покупке автомобиля в кредит!';
      subtitle.className = 'text-lg text-gray-600';

      const prizesList = document.createElement('div');
      prizesList.innerHTML = `
        <h3 class="font-medium text-gray-700 mb-2">Список призов:</h3>
        <ul class="list-disc list-inside space-y-1 text-gray-800">
          <li>КАСКО</li>
          <li>Зимняя резина</li>
          <li>2 платежа по кредиту</li>
          <li>Сигнализация с автозапуском</li>
        </ul>
      `;

      const button = document.createElement('button');
      button.textContent = 'КРУТИТЬ БАРАБАН';
      button.className = 'mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-70';

      textContainer.append(title, subtitle, prizesList, button);

      // === Собираем модал ===
      modalContainer.append(wheelWrapper, textContainer);
      document.body.append(overlay, modalContainer);
      document.body.style.overflow = 'hidden';

      // === Закрытие по клику на оверлей ===
      overlay.addEventListener('click', () => {
        overlay.remove();
        modalContainer.remove();
        document.body.style.overflow = '';
      });

      // === Логика вращения колеса ===
      button.addEventListener('click', () => {
        if (button.disabled) return;

        button.disabled = true;
        button.textContent = 'Крутится...';

        // Сброс поворота
        wheelPrices.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        wheelPrices.classList.remove('spinning');

        setTimeout(() => {
          wheelPrices.classList.add('spinning');

          // ⚠️ УКАЖИ ПРАВИЛЬНОЕ КОЛИЧЕСТВО СЕКТОРОВ!
          const sectors = 8; // ← например, 8 секторов на колесе
          const randomSector = Math.floor(Math.random() * sectors);
          const extraRotations = 360 * 5; // 5 полных оборотов
          const degreesPerSector = 360 / sectors;
          const finalRotation = extraRotations + (360 - randomSector * degreesPerSector);

          setTimeout(() => {
            wheelPrices.classList.remove('spinning');
            wheelPrices.style.transform = `translate(-50%, -50%) rotate(${finalRotation}deg)`;

            // Восстанавливаем кнопку
            button.disabled = false;
            button.textContent = 'КРУТИТЬ БАРАБАН';

            // Определяем приз (должен соответствовать порядку секторов!)
            const prizes = [
              'КАСКО',
              'Зимняя резина',
              '2 платежа по кредиту',
              'Сигнализация с автозапуском',
              'КАСКО', // повтор, если секторов больше призов
              'Зимняя резина',
              '2 платежа по кредиту',
              'Сигнализация с автозапуском'
            ];
            const prize = prizes[randomSector] || 'Приз';

            alert(`🎉 Поздравляем! Вы выиграли: ${prize}`);
          }, 4000);
        }, 50);
      });
    });