// Вспомогательные утилиты
const formatNumber = (num) => {
  return new Intl.NumberFormat('ru-RU').format(Math.round(num));
};

const getYearsForm = (n) => {
  n = n % 100;
  if (n >= 11 && n <= 19) return 'лет';
  n = n % 10;
  if (n === 1) return 'год';
  if (n >= 2 && n <= 4) return 'года';
  return 'лет';
};

// Модель автомобиля
class Car {
  constructor(data) {
    Object.assign(this, data);
  }

  getMinMonthlyPayment() {
    return Math.ceil((this.price * 0.9) / (7 * 12));
  }
}

// Управление отображением данных
class DisplayManager {
  constructor(cars) {
    this.cars = cars;
    this.hiddenBlocks = Array.from(document.querySelectorAll('[data-hidden-block]'));
    this.selectCars = Array.from(document.querySelectorAll('[data-select-car]'));

    this.hiddenBlocks.forEach(block => block.classList.add('hidden'));
  }

  resetBlock(block) {
    const defaults = {
      model: '—',
      price: '0 ₽',
      description: '—',
      engine: '—',
      transmission: '—',
      drive: '—',
      trim: '—',
      color: '—'
    };

    Object.entries(defaults).forEach(([key, value]) => {
      const el = block.querySelector(`[data-${key}-target]`);
      if (el) el.textContent = value;
    });

    const mobilePayment = block.querySelector('.text-xs.text-gray-400:last-of-type');
    if (mobilePayment) mobilePayment.textContent = 'Платёж от 0 ₽/мес';
  }

  updateBlock(block, car) {
    const fields = {
      model: car.model,
      price: `${formatNumber(car.price)} ₽`,
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

    const mobilePayment = block.querySelector('.text-xs.text-gray-400:last-of-type');
    if (mobilePayment) {
      mobilePayment.textContent = `Платёж от ${formatNumber(car.getMinMonthlyPayment())} ₽/мес`;
    }
  }

  updateAllBlocks(selectedCar) {
    if (!selectedCar) return;
    this.hiddenBlocks.forEach(block => {
      if (!block.classList.contains('hidden')) {
        this.updateBlock(block, selectedCar);
      }
    });
  }

  resetAllDisplays() {
    ['Mobile', 'Desktop'].forEach(suffix => {
      const downPercent = document.getElementById(`downPaymentPercent${suffix}`);
      const downAmount = document.getElementById(`downPaymentAmount${suffix}`);
      const termYears = document.getElementById(`loanTermYears${suffix}`);
      const monthly = document.getElementById(`monthlyPayment${suffix}`);

      if (downPercent) downPercent.textContent = '0%';
      if (downAmount) downAmount.textContent = '0 ₽';
      if (termYears) termYears.textContent = '0 лет';
      if (monthly) monthly.textContent = '0 ₽';
    });
  }
}

// Управление слайдерами
class SliderManager {
  constructor(getSelectedCar) {
    this.getSelectedCar = getSelectedCar;
    this.suffixes = ['Mobile', 'Desktop'];
  }

  init() {
    this.bindSliders();
    this.resetAllDisplays();
  }

  resetAllDisplays() {
    this.suffixes.forEach(suffix => {
      const downPercent = document.getElementById(`downPaymentPercent${suffix}`);
      const downAmount = document.getElementById(`downPaymentAmount${suffix}`);
      const termYears = document.getElementById(`loanTermYears${suffix}`);
      const monthly = document.getElementById(`monthlyPayment${suffix}`);

      if (downPercent) downPercent.textContent = '0%';
      if (downAmount) downAmount.textContent = '0 ₽';
      if (termYears) termYears.textContent = '0 лет';
      if (monthly) monthly.textContent = '0 ₽';
    });
  }

  resetToDefaults() {
    const car = this.getSelectedCar();
    if (!car) {
      this.resetAllDisplays();
      return;
    }

    this.suffixes.forEach(suffix => {
      const downSlider = document.getElementById(`downPaymentSlider${suffix}`);
      const termSlider = document.getElementById(`loanTermSlider${suffix}`);

      if (downSlider) {
        downSlider.value = 10;
        this.updateDownPaymentDisplay(10, suffix);
      }
      if (termSlider) {
        termSlider.value = 7;
        termSlider.min = 1;
        termSlider.max = 7;
        this.updateLoanTermDisplay(7, suffix);
      }
    });
  }

  updateDownPaymentDisplay(percent, suffix) {
    const car = this.getSelectedCar();
    if (!car) return;

    const amount = car.price * (percent / 100);
    document.getElementById(`downPaymentPercent${suffix}`).textContent = `${percent}%`;
    document.getElementById(`downPaymentAmount${suffix}`).textContent = `${formatNumber(amount)} ₽`;

    const termSlider = document.getElementById(`loanTermSlider${suffix}`);
    const years = termSlider ? parseInt(termSlider.value) : 7;
    this.updateMonthlyPayment(years, percent, suffix);
  }

  updateLoanTermDisplay(years, suffix) {
    const car = this.getSelectedCar();
    if (!car) return;

    document.getElementById(`loanTermYears${suffix}`).textContent = `${years} ${getYearsForm(years)}`;
    const downSlider = document.getElementById(`downPaymentSlider${suffix}`);
    const percent = downSlider ? parseInt(downSlider.value) : 10;
    this.updateMonthlyPayment(years, percent, suffix);
  }

  updateMonthlyPayment(years, downPercent, suffix) {
    const car = this.getSelectedCar();
    if (!car) return;

    const loanAmount = car.price * (1 - downPercent / 100);
    const monthly = loanAmount / (years * 12);
    document.getElementById(`monthlyPayment${suffix}`).textContent = `${formatNumber(monthly)} ₽`;
  }

  bindSliders() {
    this.suffixes.forEach(suffix => {
      const downSlider = document.getElementById(`downPaymentSlider${suffix}`);
      const termSlider = document.getElementById(`loanTermSlider${suffix}`);

      if (downSlider) {
        // Устанавливаем ограничения: мин 0%, макс 90%, шаг 10%
        downSlider.min = 0;
        downSlider.max = 90;
        downSlider.step = 10;
        
        this.bindSliderTrack(downSlider);
        downSlider.addEventListener('input', (e) => {
          // Обеспечиваем шаг 10%
          let value = Math.round(e.target.value / 10) * 10;
          value = Math.max(0, Math.min(90, value)); // Ограничиваем диапазон (0-90%)
          e.target.value = value;
          this.updateDownPaymentDisplay(value, suffix);
        });
      }

      if (termSlider) {
        termSlider.min = 1;
        termSlider.max = 7;
        this.bindSliderTrack(termSlider);
        termSlider.addEventListener('input', (e) => {
          let val = Math.min(7, Math.max(1, parseInt(e.target.value)));
          e.target.value = val;
          this.updateLoanTermDisplay(val, suffix);
        });
      }
    });
  }

  bindSliderTrack(slider) {
    const track = slider.parentElement.querySelector('.slider-track');
    if (!track) return;

    const update = () => {
      const percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
      track.style.width = `${percent}%`;
    };

    update();
    slider.addEventListener('input', update);
  }
}

// Основной класс
export class CarCreditCalculator {
  constructor(carsData) {
    this.cars = {};
    for (const id in carsData) {
      this.cars[id] = new Car(carsData[id]);
    }
    this.selectedCarId = null;

    this.display = new DisplayManager(this.cars);
    this.sliders = new SliderManager(() => this.selectedCar);

    this.init();
  }

  get selectedCar() {
    return this.selectedCarId ? this.cars[this.selectedCarId] : null;
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      const selects = Array.from(document.querySelectorAll('[data-select-car]'));
      const blocks = Array.from(document.querySelectorAll('[data-hidden-block]'));

      selects.forEach((select, i) => {
        const block = blocks[i];
        if (!block) return;

        this.display.resetBlock(block);

        select.addEventListener('change', () => {
          const carId = select.value || null;
          this.handleSelectChange(select, block, carId);
        });
      });

      this.sliders.init();
      this.bindCalculateButtons();
    });
  }

  handleSelectChange(select, block, carId) {
    if (carId && this.cars[carId]) {
      this.selectedCarId = carId;
      this.display.updateBlock(block, this.cars[carId]);
      block.classList.remove('hidden');
      this.sliders.resetToDefaults();
    } else {
      this.selectedCarId = null;
      this.display.resetBlock(block);
      block.classList.add('hidden');
      this.sliders.resetAllDisplays();
    }
  }

  bindCalculateButtons() {
    document.querySelectorAll('button').forEach(btn => {
      if (btn.textContent.trim() === 'РАССЧИТАТЬ') {
        btn.addEventListener('click', () => {
          if (!this.selectedCar) {
            alert('Пожалуйста, выберите автомобиль.');
            return;
          }

          const down = document.getElementById('downPaymentAmountDesktop')?.textContent ||
                       document.getElementById('downPaymentAmountMobile')?.textContent;
          const term = document.getElementById('loanTermYearsDesktop')?.textContent ||
                       document.getElementById('loanTermYearsMobile')?.textContent;
          const monthly = document.getElementById('monthlyPaymentDesktop')?.textContent ||
                          document.getElementById('monthlyPaymentMobile')?.textContent;

          console.log('Кредит рассчитан:', {
            car: this.selectedCar.model,
            price: this.selectedCar.price,
            downPayment: down,
            term,
            monthly
          });
        });
      }
    });
  }
}