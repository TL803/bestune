document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('booking-modal');
    if (!modal) {
        console.error('Модальное окно #booking-modal не найдено');
        return;
    }

    // Получаем оба селекта
    const selects = document.querySelectorAll('[data-sync="car-select"]');

    // Синхронизация между селектами
    selects.forEach(select => {
        select.addEventListener('change', function () {
            const value = this.value;
            selects.forEach(s => {
                if (s !== this) s.value = value;
            });
        });
    });

    // Кнопки открытия модалки
    const buttons = document.querySelectorAll('[data-action="open-booking-modal"]');
    buttons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();

            // Находим значение в ВИДИМОМ селекте
            let selectedValue = '';
            selects.forEach(select => {
                if (window.getComputedStyle(select).display !== 'none') {
                    selectedValue = select.value;
                }
            });

            if (!selectedValue) {
                alert('Пожалуйста, выберите автомобиль');
                return;
            }

            modal.classList.remove('hidden');
        });
    });

    // Закрытие модалки по клику на подложку
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});