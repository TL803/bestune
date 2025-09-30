// creditBlock.js

class CarCreditCalculator {
  constructor() {
    this.cars = {
      1: {
        model: "T77 PRESTIGE PLUS",
        price: 2036000,
        image: "../assets/common/81ff94c5d17c2e8d9e596e4bd924fb374e63330c.png",
        description: "PRESTIGE PLUS (ДСТ) B70, 2023",
        engine: "1.5 160 л.с.",
        transmission: "7DCT",
        drive: "Передний (2WD)",
        trim: "PRESTIGE PLUS (ДСТ) B70",
        color: "Серебро"
      },
      2: {
        model: "T90 SPORT EDITION",
        price: 2200000,
        image: "../assets/common/81ff94c5d17c2e8d9e596e4bd924fb374e63330c.png",
        description: "SPORT EDITION 1.5T, 2023",
        engine: "1.5 169 л.с.",
        transmission: "7DCT",
        drive: "Передний (2WD)",
        trim: "SPORT EDITION",
        color: "Чёрный"
      }
    };

    this.selectedCarId = null;
    this.suffixes = ['Mobile', 'Desktop'];
    this.selectCars = [];
    this.hiddenBlocks = [];

    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.selectCars = Array.from(document.querySelectorAll('[data-select-car]'));
      this.hiddenBlocks = Array.from(document.querySelectorAll('[data-hidden-block]'));

      // Скрыть все блоки при загрузке
      this.hiddenBlocks.forEach(block => block.classList.add('hidden'));

      // Связываем каждый селект со своим блоком
      this.selectCars.forEach((select, index) => {
        const block = this.hiddenBlocks[index];
        if (!block) return;

        // Изначально сбросим содержимое блока
        this.resetBlockContent(block);

        select.addEventListener('change', () => {
          const carId = select.value || null;
          this.handleSelectChange(select, block, carId);
        });
      });

      this.initSliders();
      this.bindCalculateButtons();
      this.resetAllDisplays(); // нули в слайдерах
    });
  }

  // Сброс содержимого одного блока до "заглушек"
  resetBlockContent(block) {
    const setters = {
      model: '—',
      price: '0 ₽',
      description: '—',
      engine: '—',
      transmission: '—',
      drive: '—',
      trim: '—',
      color: '—'
    };

    Object.keys(setters).forEach(key => {
      const el = block.querySelector(`[data-${key}-target]`);
      if (el) el.textContent = setters[key];
    });

    // Также сбросим мобильный платёж
    const mobilePayment = block.querySelector('.text-xs.text-gray-400:last-of-type');
    if (mobilePayment) mobilePayment.textContent = 'Платёж от 0 ₽/мес';
  }

  handleSelectChange(select, block, carId) {
    if (carId && this.cars[carId]) {
      const car = this.cars[carId];
      this.selectedCarId = carId;

      // Обновляем все поля блока
      this.updateBlockContent(block, car);

      block.classList.remove('hidden');
      this.updateAllBlocks(); // синхронизируем остальные блоки и слайдеры
    } else {
      this.selectedCarId = null;
      this.resetBlockContent(block);
      block.classList.add('hidden');
      this.resetAllDisplays(); // обнуляем слайдеры
    }
  }

  // Обновление всех полей в одном блоке
  updateBlockContent(block, car) {
    const fields = {
      model: car.model,
      price: `${this.formatNumber(car.price)} ₽`,
      description: car.description,
      engine: car.engine,
      transmission: car.transmission,
      drive: car.drive,
      trim: car.trim,
      color: car.color
    };

    Object.entries(fields).forEach(([key, value]) => {
      const el = block.querySelector(`[data-${key}-target]`);
      if (el) el.textContent = value;
    });

    // Мобильный платёж
    const minPayment = Math.ceil((car.price * 0.9) / (7 * 12));
    const mobilePayment = block.querySelector('.text-xs.text-gray-400:last-of-type');
    if (mobilePayment) {
      mobilePayment.textContent = `Платёж от ${this.formatNumber(minPayment)} ₽/мес`;
    }
  }

  // Обновление всех видимых блоков (для синхронизации)
  updateAllBlocks() {
    const car = this.selectedCar;
    if (!car) {
      this.resetAllDisplays();
      return;
    }

    this.hiddenBlocks.forEach(block => {
      if (!block.classList.contains('hidden')) {
        this.updateBlockContent(block, car);
      }
    });

    this.resetSliders();
  }

  get selectedCar() {
    return this.selectedCarId ? this.cars[this.selectedCarId] : null;
  }

  formatNumber(num) {
    return new Intl.NumberFormat('ru-RU').format(Math.round(num));
  }

  resetAllDisplays() {
    this.suffixes.forEach(suffix => {
      const downPercentEl = document.getElementById(`downPaymentPercent${suffix}`);
      const downAmountEl = document.getElementById(`downPaymentAmount${suffix}`);
      const termYearsEl = document.getElementById(`loanTermYears${suffix}`);
      const monthlyEl = document.getElementById(`monthlyPayment${suffix}`);

      if (downPercentEl) downPercentEl.textContent = '0%';
      if (downAmountEl) downAmountEl.textContent = '0 ₽';
      if (termYearsEl) termYearsEl.textContent = '0 лет';
      if (monthlyEl) monthlyEl.textContent = '0 ₽';
    });
  }

  // --- Остальные методы без изменений ---
  resetSliders() {
    if (!this.selectedCar) {
      this.resetAllDisplays();
      return;
    }

    const downPaymentPercent = 10;
    const loanTermYears = 7;

    this.suffixes.forEach(suffix => {
      const downSlider = document.getElementById(`downPaymentSlider${suffix}`);
      const termSlider = document.getElementById(`loanTermSlider${suffix}`);

      if (downSlider) {
        downSlider.value = downPaymentPercent;
        this.updateDownPaymentDisplay(downSlider.value, suffix);
      }
      if (termSlider) {
        termSlider.value = loanTermYears;
        this.updateLoanTermDisplay(termSlider.value, suffix);
      }
    });
  }

  updateDownPaymentDisplay(percent, suffix) {
    if (!this.selectedCar) {
      this.resetAllDisplays();
      return;
    }

    const amount = this.selectedCar.price * (percent / 100);
    document.getElementById(`downPaymentPercent${suffix}`).textContent = `${percent}%`;
    document.getElementById(`downPaymentAmount${suffix}`).textContent = `${this.formatNumber(amount)} ₽`;

    const termSlider = document.getElementById(`loanTermSlider${suffix}`);
    if (termSlider) {
      const years = parseInt(termSlider.value);
      this.updateMonthlyPayment(years, percent, suffix);
    }
  }

  updateLoanTermDisplay(years, suffix) {
    if (!this.selectedCar) {
      this.resetAllDisplays();
      return;
    }

    document.getElementById(`loanTermYears${suffix}`).textContent = `${years} ${this.getYearsForm(years)}`;
    const downSlider = document.getElementById(`downPaymentSlider${suffix}`);
    const percent = downSlider ? parseInt(downSlider.value) : 10;
    this.updateMonthlyPayment(years, percent, suffix);
  }

  updateMonthlyPayment(years, downPercent, suffix) {
    if (!this.selectedCar) {
      this.resetAllDisplays();
      return;
    }

    const loanAmount = this.selectedCar.price * (1 - downPercent / 100);
    const months = years * 12;
    const monthly = loanAmount / months;

    document.getElementById(`monthlyPayment${suffix}`).textContent = `${this.formatNumber(monthly)} ₽`;
  }

  getYearsForm(n) {
    n = n % 100;
    if (n >= 11 && n <= 19) return 'лет';
    n = n % 10;
    if (n === 1) return 'год';
    if (n >= 2 && n <= 4) return 'года';
    return 'лет';
  }

  initSliders() {
    const sliderIds = [
      'downPaymentSliderMobile',
      'downPaymentSliderDesktop',
      'loanTermSliderMobile',
      'loanTermSliderDesktop'
    ];

    sliderIds.forEach(id => this.updateSliderTrack(id, '.slider-track'));

    this.suffixes.forEach(suffix => {
      const downSlider = document.getElementById(`downPaymentSlider${suffix}`);
      const termSlider = document.getElementById(`loanTermSlider${suffix}`);

      if (downSlider) {
        downSlider.addEventListener('input', (e) => {
          this.updateDownPaymentDisplay(e.target.value, suffix);
        });
      }

      if (termSlider) {
        termSlider.min = 1;
        termSlider.max = 7;
        termSlider.addEventListener('input', (e) => {
          let val = parseInt(e.target.value);
          if (val < 1) val = 1;
          if (val > 7) val = 7;
          e.target.value = val;
          this.updateLoanTermDisplay(val, suffix);
        });
      }
    });
  }

  updateSliderTrack(sliderId, trackSelector) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    const track = slider.parentElement.querySelector(trackSelector);
    if (!track) return;

    const update = () => {
      const percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
      track.style.width = `${percent}%`;
    };

    update();
    slider.addEventListener('input', update);
  }

  bindCalculateButtons() {
    document.querySelectorAll('button').forEach(btn => {
      if (btn.textContent.trim() === 'РАССЧИТАТЬ') {
        btn.addEventListener('click', () => {
          if (!this.selectedCar) {
            alert('Пожалуйста, выберите автомобиль.');
            return;
          }

          console.log('Кредит рассчитан:', {
            car: this.selectedCar.model,
            price: this.selectedCar.price,
            downPayment: document.getElementById('downPaymentAmountDesktop')?.textContent ||
                         document.getElementById('downPaymentAmountMobile')?.textContent,
            term: document.getElementById('loanTermYearsDesktop')?.textContent ||
                  document.getElementById('loanTermYearsMobile')?.textContent,
            monthly: document.getElementById('monthlyPaymentDesktop')?.textContent ||
                     document.getElementById('monthlyPaymentMobile')?.textContent
          });
        });
      }
    });
  }
}

// Запуск
new CarCreditCalculator();