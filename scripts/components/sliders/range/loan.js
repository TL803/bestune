        const ANNUAL_RATE = 15; // % годовых
        const DEFAULT_CAR_PRICE = 2036000; // fallback, если не найдём цену на странице

        // === Вспомогательные функции ===
        function getCarPrice() {
            // Ищем цену в блоке с классом text-blue-600 (где "2 036 000 ₽")
            const priceEl = document.querySelector('.text-blue-600');
            if (!priceEl) return DEFAULT_CAR_PRICE;

            const text = priceEl.textContent || priceEl.innerText;
            // Удаляем всё, кроме цифр и пробелов, затем убираем пробелы
            const clean = text.replace(/[^\d\s]/g, '').replace(/\s/g, '');
            const num = parseFloat(clean);
            return isNaN(num) ? DEFAULT_CAR_PRICE : num;
        }

        function formatRubles(amount) {
            return new Intl.NumberFormat('ru-RU').format(Math.round(amount)) + ' ₽';
        }

        function declOfNum(number, titles) {
            const cases = [2, 0, 1, 1, 1, 2];
            return titles[
                number % 100 > 4 && number % 100 < 20
                    ? 2
                    : cases[number % 10 < 5 ? number % 10 : 5]
            ];
        }

        function calculatePayment(loanSum, years, rate) {
            if (loanSum <= 0 || years <= 0) return 0;
            const monthlyRate = rate / 100 / 12;
            const months = years * 12;
            return (loanSum * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
        }

        // === Обновление значений ===
        function updateValues() {
            const carPrice = getCarPrice();

            const percent = parseInt(document.getElementById('initialPaymentSlider').value);
            const years = parseInt(document.getElementById('termSlider').value);

            const initialAmount = (carPrice * percent) / 100;
            const loanAmount = carPrice - initialAmount;
            const monthly = calculatePayment(loanAmount, years, ANNUAL_RATE);

            // Обновляем плашки
            document.getElementById('initialPaymentPercent').textContent = `${percent}%`;
            document.getElementById('initialPaymentAmount').textContent = formatRubles(initialAmount);

            const yearWord = declOfNum(years, ['год', 'года', 'лет']);
            document.getElementById('termYears').textContent = `${years} ${yearWord}`;
            document.getElementById('monthlyPayment').textContent = formatRubles(monthly);
        }

        // === Обновление треков ползунков ===
        function updateTrack(sliderId, trackId) {
            const slider = document.getElementById(sliderId);
            const track = document.getElementById(trackId);
            const min = parseFloat(slider.min);
            const max = parseFloat(slider.max);
            const val = parseFloat(slider.value);
            const perc = ((val - min) / (max - min)) * 100;
            track.style.width = `${perc}%`;
        }

        // === Инициализация ===
        document.addEventListener('DOMContentLoaded', () => {
            const sliders = [
                { slider: 'initialPaymentSlider', track: 'initialPaymentTrack' },
                { slider: 'termSlider', track: 'termTrack' }
            ];

            sliders.forEach(({ slider, track }) => {
                const el = document.getElementById(slider);
                if (el) {
                    el.addEventListener('input', () => {
                        updateTrack(slider, track);
                        updateValues();
                    });
                    // Инициализация трека
                    updateTrack(slider, track);
                }
            });

            // Первый расчёт
            updateValues();
        });