        const avaliableCarsContainer = document.querySelector('[data-avaliable-cars-container]');
        const showMoreButton = document.getElementById('show-more-btn');
        const carsCountElement = document.getElementById('cars-count');

        const cars = [
            {
                status: 'В пути',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77',
                complectation: 'PRESTIGE PLUS (DCT) (t77), 2023',
                engine: '1.5 160 л.с.',
                transmission: '7DCT',
                drive: 'Передний (2WD)',
                price: '2 036 000',
                monthlyPayment: '11 444',
                adress: 'Береговой пр., 4/6с3, Москва',
                link: 'avaliableauto.html'
            },
            {
                status: 'В пути',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77',
                complectation: 'PRESTIGE PLUS (DCT) (t77), 2023',
                engine: '1.5 160 л.с.',
                transmission: '7DCT',
                drive: 'Передний (2WD)',
                price: '2 036 000',
                monthlyPayment: '11 444',
                adress: 'Береговой пр., 4/6с3, Москва',
                link: 'avaliableauto.html'
            },
            {
                status: 'В пути',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77',
                complectation: 'PRESTIGE PLUS (DCT) (t77), 2023',
                engine: '1.5 160 л.с.',
                transmission: '7DCT',
                drive: 'Передний (2WD)',
                price: '2 036 000',
                monthlyPayment: '11 444',
                adress: 'Береговой пр., 4/6с3, Москва',
                link: 'avaliableauto.html'
            },
            {
                status: 'В пути',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77',
                complectation: 'PRESTIGE PLUS (DCT) (t77), 2023',
                engine: '1.5 160 л.с.',
                transmission: '7DCT',
                drive: 'Передний (2WD)',
                price: '2 036 000',
                monthlyPayment: '11 444',
                adress: 'Береговой пр., 4/6с3, Москва',
                link: 'avaliableauto.html'
            },
            {
                status: 'В пути',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77',
                complectation: 'PRESTIGE PLUS (DCT) (t77), 2023',
                engine: '1.5 160 л.с.',
                transmission: '7DCT',
                drive: 'Передний (2WD)',
                price: '2 036 000',
                monthlyPayment: '11 444',
                adress: 'Береговой пр., 4/6с3, Москва',
                link: 'avaliableauto.html'
            },
            {
                status: 'В пути',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77',
                complectation: 'PRESTIGE PLUS (DCT) (t77), 2023',
                engine: '1.5 160 л.с.',
                transmission: '7DCT',
                drive: 'Передний (2WD)',
                price: '2 036 000',
                monthlyPayment: '11 444',
                adress: 'Береговой пр., 4/6с3, Москва',
                link: 'avaliableauto.html'
            },
            {
                status: 'В пути',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77',
                complectation: 'PRESTIGE PLUS (DCT) (t77), 2023',
                engine: '1.5 160 л.с.',
                transmission: '7DCT',
                drive: 'Передний (2WD)',
                price: '2 036 000',
                monthlyPayment: '11 444',
                adress: 'Береговой пр., 4/6с3, Москва',
                link: 'avaliableauto.html'
            },
            {
                status: 'В пути',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77',
                complectation: 'PRESTIGE PLUS (DCT) (t77), 2023',
                engine: '1.5 160 л.с.',
                transmission: '7DCT',
                drive: 'Передний (2WD)',
                price: '2 036 000',
                monthlyPayment: '11 444',
                adress: 'Береговой пр., 4/6с3, Москва',
                link: 'avaliableauto.html'
            },
            {
                status: 'В пути',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77',
                complectation: 'PRESTIGE PLUS (DCT) (t77), 2023',
                engine: '1.5 160 л.с.',
                transmission: '7DCT',
                drive: 'Передний (2WD)',
                price: '2 036 000',
                monthlyPayment: '11 444',
                adress: 'Береговой пр., 4/6с3, Москва',
                link: 'avaliableauto.html'
            },
            {
                status: 'В пути',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77',
                complectation: 'PRESTIGE PLUS (DCT) (t77), 2023',
                engine: '1.5 160 л.с.',
                transmission: '7DCT',
                drive: 'Передний (2WD)',
                price: '2 036 000',
                monthlyPayment: '11 444',
                adress: 'Береговой пр., 4/6с3, Москва',
                link: 'avaliableauto.html'
            },
            {
                status: 'В пути',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77',
                complectation: 'PRESTIGE PLUS (DCT) (t77), 2023',
                engine: '1.5 160 л.с.',
                transmission: '7DCT',
                drive: 'Передний (2WD)',
                price: '2 036 000',
                monthlyPayment: '11 444',
                adress: 'Береговой пр., 4/6с3, Москва',
                link: 'avaliableauto.html'
            },
            {
                status: 'В пути',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77',
                complectation: 'PRESTIGE PLUS (DCT) (t77), 2023',
                engine: '1.5 160 л.с.',
                transmission: '7DCT',
                drive: 'Передний (2WD)',
                price: '2 036 000',
                monthlyPayment: '11 444',
                adress: 'Береговой пр., 4/6с3, Москва',
                link: 'avaliableauto.html'
            },
            {
                status: 'В наличии',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77 Pro',
                complectation: 'LUXURY (DCT) (t77), 2024',
                engine: '2.0 200 л.с.',
                transmission: '8DCT',
                drive: 'Полный (4WD)',
                price: '2 536 000',
                monthlyPayment: '14 200',
                adress: 'Ленинский пр., 12, Москва',
                link: 'avaliableauto.html'
            },
            {
                status: 'В наличии',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77 Pro',
                complectation: 'LUXURY (DCT) (t77), 2024',
                engine: '2.0 200 л.с.',
                transmission: '8DCT',
                drive: 'Полный (4WD)',
                price: '2 536 000',
                monthlyPayment: '14 200',
                adress: 'Ленинский пр., 12, Москва',
                link: 'avaliableauto.html'
            },
            {
                status: 'В наличии',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77 Pro',
                complectation: 'LUXURY (DCT) (t77), 2024',
                engine: '2.0 200 л.с.',
                transmission: '8DCT',
                drive: 'Полный (4WD)',
                price: '2 536 000',
                monthlyPayment: '14 200',
                adress: 'Ленинский пр., 12, Москва',
                link: 'avaliableauto.html'
            },            {
                status: 'В наличии',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77 Pro',
                complectation: 'LUXURY (DCT) (t77), 2024',
                engine: '2.0 200 л.с.',
                transmission: '8DCT',
                drive: 'Полный (4WD)',
                price: '2 536 000',
                monthlyPayment: '14 200',
                adress: 'Ленинский пр., 12, Москва',
                link: 'avaliableauto.html'
            },            {
                status: 'В наличии',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77 Pro',
                complectation: 'LUXURY (DCT) (t77), 2024',
                engine: '2.0 200 л.с.',
                transmission: '8DCT',
                drive: 'Полный (4WD)',
                price: '2 536 000',
                monthlyPayment: '14 200',
                adress: 'Ленинский пр., 12, Москва',
                link: 'avaliableauto.html'
            },            {
                status: 'В наличии',
                img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
                title: 'T77 Pro',
                complectation: 'LUXURY (DCT) (t77), 2024',
                engine: '2.0 200 л.с.',
                transmission: '8DCT',
                drive: 'Полный (4WD)',
                price: '2 536 000',
                monthlyPayment: '14 200',
                adress: 'Ленинский пр., 12, Москва',
                link: 'avaliableauto.html'
            },
        ];

        let currentPage = 1;
        let carsPerPage = 0;

        function calculateCarsPerPage() {
            const width = window.innerWidth;
            
            if (width >= 1536) { // 2xl: 4 колонки
                return 8; // 2 строки × 4 колонки
            } else if (width >= 1280) { // xl: 3 колонки
                return 6; // 2 строки × 3 колонки
            } else if (width >= 1024) { // lg: 2 колонки
                return 4; // 2 строки × 2 колонки
            } else if (width >= 640) { // sm: 2 колонки
                return 4; // 2 строки × 2 колонки
            } else { // xs: 1 колонка
                return 2; // 2 строки × 1 колонка
            }
        }

        // Функция для создания HTML карточки машины
        function createCarCard(car) {
            const carElement = document.createElement('a');
            carElement.href = `./${car.link}`;
            carElement.className = 'bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden w-full max-w-[434px] sm:max-w-none flex flex-col hover:shadow-md transition-shadow duration-300';
carElement.innerHTML = `
    <div class="p-3 sm:p-4 flex-1 flex flex-col">
        <!-- Статус -->
        <div class="mb-2 sm:mb-3">
            <span class="inline-block px-2 py-1 text-xs sm:text-[12px] font-bold ${getStatusColor(car.status)} rounded-full">
                ${car.status}
            </span>
        </div>

        <!-- Изображение -->
        <div class="mb-3 sm:mb-4">
            <img src="${car.img}" alt="${car.title}"
                 class="w-full h-32 sm:h-40 md:h-48 object-contain rounded-md bg-gray-50" />
        </div>

        <!-- Название модели -->
        <h3 class="text-lg sm:text-xl md:text-[24px] font-normal mb-1">${car.title}</h3>

        <!-- Комплектация и год -->
        <p class="text-sm sm:text-[15px] md:text-[16px] text-gray-600 mb-2 sm:mb-3 line-clamp-2">${car.complectation}</p>

        <!-- Характеристики -->
        <div class="space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-xs sm:text-[13px] md:text-[14px] text-gray-700 flex-1">
            <div class="flex items-center">
                <img src="../assets/icons/card/Component 1 (2).svg" alt="" class="w-5 h-5 mr-2" />  
                <span>${car.engine}</span>
            </div>
            <div class="flex items-center">
                <img src="../assets/icons/card/Component 1 (1).svg" alt="" class="w-5 h-5 mr-2" /> 
                <span>${car.transmission}</span>
            </div>
            <div class="flex items-center">
                <img src="../assets/icons/card/Component 1.svg" alt="" class="w-5 h-5 mr-2" /> 
                <span>${car.drive}</span>
            </div>
        </div>

        <!-- Цена -->
        <div class="text-lg sm:text-xl md:text-[24px] font-normal text-gray-900 mb-1">${car.price} ₽</div>

        <!-- Платеж -->
        <div class="text-xs sm:text-[12px] text-gray-500 mb-3 sm:mb-4">Платеж от ${car.monthlyPayment} ₽/месяц</div>

        <!-- Адрес и сравнение -->
        <div class="flex justify-between items-center text-xs sm:text-[12px] text-gray-500">
            <div class="flex items-center flex-1 min-w-0">
                <i class="fas fa-map-marker-alt text-gray-400 mr-1 flex-shrink-0 text-lg"></i>
                <span class="truncate">${car.adress}</span>
            </div>
            <img src="../assets/scales-light.svg" alt="Сравнить" class="w-5 h-5">
        </div>
    </div>
`;
return carElement;
        }

        // Функция для получения цвета статуса
        function getStatusColor(status) {
            switch(status) {
                case 'В пути':
                    return 'text-amber-800 bg-amber-100';
                case 'В наличии':
                    return 'text-green-800 bg-green-100';
                default:
                    return 'text-gray-800 bg-gray-100';
            }
        }

        // Функция для отображения машин
        function displayCars() {
            const endIndex = currentPage * carsPerPage;
            const carsToShow = cars.slice(0, endIndex);
            
            // Очищаем контейнер
            avaliableCarsContainer.innerHTML = '';
            
            // Добавляем машины
            carsToShow.forEach(car => {
                const carElement = createCarCard(car);
                avaliableCarsContainer.appendChild(carElement);
            });
            
            updateCarsCount();
            
            // Скрываем кнопку, если показаны все машины
            if (endIndex >= cars.length) {
                showMoreButton.style.display = 'none';
            } else {
                showMoreButton.style.display = 'block';
            }
        }

        // Функция для обновления счетчика
        function updateCarsCount() {
            const displayedCars = Math.min(currentPage * carsPerPage, cars.length);
            carsCountElement.textContent = `${cars.length} (показано ${displayedCars})`;
        }

        // Функция для загрузки дополнительных машин
        function loadMoreCars() {
            currentPage++;
            displayCars();
        }

        // Инициализация при загрузке страницы
        document.addEventListener('DOMContentLoaded', function() {
            // Рассчитываем начальное количество машин
            carsPerPage = calculateCarsPerPage();
            
            // Отображаем первые машины
            displayCars();
            
            // Добавляем обработчик события для кнопки
            showMoreButton.addEventListener('click', loadMoreCars);
            
            // Обработчик изменения размера окна для адаптивности
            window.addEventListener('resize', function() {
                const newCarsPerPage = calculateCarsPerPage();
                if (newCarsPerPage !== carsPerPage) {
                    carsPerPage = newCarsPerPage;
                    currentPage = 1;
                    displayCars();
                }
            });
        });