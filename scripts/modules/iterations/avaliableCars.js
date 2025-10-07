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
        status: 'В наличии',
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
        status: 'Забронировано',
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
        status: 'Забронировано',
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
        status: 'Забронировано',
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
        status: 'Забронировано',
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
];

let currentPage = 1;
let carsPerPage = 0;

function calculateCarsPerPage() {
    const width = window.innerWidth;

    if (width >= 1536) {
        return 8;
    } else if (width >= 1280) {
        return 6;
    } else if (width >= 1024) {
        return 4;
    } else if (width >= 640) {
        return 4;
    } else {
        return 2;
    }
}

// Функция для создания HTML карточки машины
function createCarCard(car, index) {
    const carElement = document.createElement('div');
    /* html */
    // Убран overflow-hidden, чтобы выпадающее меню не обрезалось
    carElement.className = 'bg-white rounded-lg shadow-sm border border-gray-100 w-full flex flex-col hover:shadow-md transition-shadow duration-300';

    carElement.innerHTML = `
        <div class="p-3 sm:p-4 flex-1 flex flex-col relative">
            <!-- Статус -->
            <div class="mb-2 sm:mb-3">
                <span class="inline-block px-2 py-1 text-xs sm:text-[12px] font-bold ${getStatusColor(car.status)} rounded-full">
                    ${car.status}
                </span>
            </div>

            <!-- Изображение -->
            <div class="mb-3 sm:mb-4 cursor-pointer overflow-hidden rounded" onclick="window.location.href='./${car.link}'">
                <img src="${car.img}" alt="${car.title}"
                     class="w-full h-32 sm:h-40 md:h-48 object-contain" />
            </div>

            <!-- Название модели -->
            <h3 class="text-lg sm:text-xl md:text-[24px] font-normal mb-1 cursor-pointer" 
                onclick="window.location.href='./${car.link}'">${car.title}</h3>

            <!-- Комплектация и год -->
            <p class="text-sm sm:text-[15px] md:text-[16px] text-gray-600 mb-2 sm:mb-3 line-clamp-2 cursor-pointer" 
               onclick="window.location.href='./${car.link}'">${car.complectation}</p>

            <!-- Характеристики -->
            <div class="space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-xs sm:text-[13px] md:text-[14px] text-gray-700 flex-1">
                <div class="flex items-center">
                    <i class="fas fa-cog text-gray-400 w-5 h-5 mr-2"></i>
                    <span>${car.engine}</span>
                </div>
                <div class="flex items-center">
                    <i class="fas fa-exchange-alt text-gray-400 w-5 h-5 mr-2"></i>
                    <span>${car.transmission}</span>
                </div>
                <div class="flex items-center">
                    <i class="fas fa-car text-gray-400 w-5 h-5 mr-2"></i>
                    <span>${car.drive}</span>
                </div>
            </div>

            <!-- Цена -->
            <div class="text-lg sm:text-xl md:text-[24px] font-normal text-gray-900 mb-1 cursor-pointer" 
                 onclick="window.location.href='./${car.link}'">${car.price} ₽</div>

            <!-- Платеж -->
            <div class="text-xs sm:text-[12px] text-gray-500 mb-3 sm:mb-4 cursor-pointer" 
                 onclick="window.location.href='./${car.link}'">Платеж от ${car.monthlyPayment} ₽/месяц</div>

            <!-- Адрес и сравнение -->
            <div class="flex justify-between items-center text-xs sm:text-[12px] text-gray-500">
                <div class="flex items-center flex-1 min-w-0 cursor-pointer" 
                     onclick="window.location.href='./${car.link}'">
                    <i class="fas fa-map-marker-alt text-gray-400 mr-1 flex-shrink-0"></i>
                    <span class="truncate">${car.adress}</span>
                </div>
                
                <!-- Контейнер с position: relative для absolute-меню -->
                <div class="relative inline-block">
                    <button type="button" 
                        class="text-gray-500 hover:text-blue-600 transition-colors p-1 comparison-btn"
                        data-dropdown-toggle data-car-index="${index}">
                        <!-- SVG иконка весов -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                    </button>
                    
                    <!-- Выпадающее меню с position: absolute -->
                    <div class="absolute right-0 top-full mt-1 z-50 w-64 bg-white rounded-md shadow-lg border border-gray-200 hidden dropdown-menu" 
     id="dropdown-menu-${index}" data-dropdown-menu>
    <div class="py-1">
        <a href="#" class="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 border-b border-gray-100 dropdown-item" 
           data-action="remove">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <span class="whitespace-nowrap">УБРАТЬ ИЗ СРАВНЕНИЯ</span>
        </a>
        
        <a href="#" class="flex items-center px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 border-b border-gray-100 dropdown-item" 
           data-action="add">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span class="whitespace-nowrap">ДОБАВИТЬ В СРАВНЕНИЕ</span>
        </a>
        
        <a href="#" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown-item" 
           data-action="go-to">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span class="whitespace-nowrap">ПЕРЕЙТИ К СРАВНЕНИЮ</span>
        </a>
    </div>
</div>
                </div>
            </div>
        </div>
    `;

    return carElement;
}

// Функция для получения цвета статуса
function getStatusColor(status) {
    switch (status) {
        case 'В наличии':
            return 'text-green-800 bg-green-100';
        case 'В пути':
            return 'text-amber-800 bg-amber-100';
        case 'Забронировано':
            return 'text-red-800 bg-red-100';
        default:
            return 'text-gray-800 bg-gray-100';
    }
}

// Функции для работы с выпадающими меню
function initDropdowns() {
    const toggleButtons = document.querySelectorAll('[data-dropdown-toggle]');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            const carIndex = this.getAttribute('data-car-index');
            const dropdownMenu = document.getElementById(`dropdown-menu-${carIndex}`);

            if (!dropdownMenu) return;

            // Позиционирование теперь через CSS (absolute), поэтому JS не трогает left/top
            toggleDropdown(dropdownMenu);
        });
    });

    // Обработчики для пунктов меню и закрытия
    document.addEventListener('click', function (e) {
        if (e.target.closest('.dropdown-item')) {
            e.preventDefault();
            e.stopPropagation();

            const item = e.target.closest('.dropdown-item');
            const action = item.getAttribute('data-action');
            const dropdownMenu = item.closest('[data-dropdown-menu]');
            const carIndex = dropdownMenu.id.split('-')[2];

            handleComparisonAction(action, carIndex);

            // Визуальная обратная связь
            item.classList.add('bg-blue-50');
            setTimeout(() => {
                item.classList.remove('bg-blue-50');
            }, 300);

            closeDropdown(dropdownMenu);
        }

        // Закрытие всех dropdown при клике вне области
        if (!e.target.closest('.comparison-btn') && !e.target.closest('[data-dropdown-menu]')) {
            closeAllDropdowns();
        }
    });
}

function toggleDropdown(dropdownMenu) {
    if (dropdownMenu.classList.contains('hidden')) {
        openDropdown(dropdownMenu);
    } else {
        closeDropdown(dropdownMenu);
    }
}

function openDropdown(dropdownMenu) {
    closeAllDropdowns();
    dropdownMenu.classList.remove('hidden');
}

function closeDropdown(dropdownMenu) {
    dropdownMenu.classList.add('hidden');
}

function closeAllDropdowns() {
    const allDropdownMenus = document.querySelectorAll('[data-dropdown-menu]');
    allDropdownMenus.forEach(menu => {
        menu.classList.add('hidden');
    });
}

// Глобальные функции для обработки действий сравнения
function handleComparisonAction(action, carIndex) {
    const car = cars[carIndex];
    console.log(`Действие: ${action} для автомобиля: ${car.title}`);

    switch (action) {
        case 'remove':
            console.log(`Удаление "${car.title}" из сравнения`);
            showNotification(`"${car.title}" удален из сравнения`, 'success');
            break;
        case 'add':
            console.log(`Добавление "${car.title}" в сравнение`);
            showNotification(`"${car.title}" добавлен в сравнение`, 'success');
            break;
        case 'go-to':
            console.log(`Переход к сравнению для "${car.title}"`);
            window.location.href = './comparison.html';
            break;
    }
}

// Функция для показа уведомлений
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 ${type === 'success' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
        }`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Функция для отображения машин
function displayCars() {
    const endIndex = currentPage * carsPerPage;
    const carsToShow = cars.slice(0, endIndex);

    avaliableCarsContainer.innerHTML = '';

    carsToShow.forEach((car, index) => {
        const carElement = createCarCard(car, index);
        avaliableCarsContainer.appendChild(carElement);
    });

    updateCarsCount();

    // Инициализируем выпадающие меню для новых карточек
    initDropdowns();

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
document.addEventListener('DOMContentLoaded', function () {
    carsPerPage = calculateCarsPerPage();
    displayCars();

    showMoreButton.addEventListener('click', loadMoreCars);

    window.addEventListener('resize', function () {
        const newCarsPerPage = calculateCarsPerPage();
        if (newCarsPerPage !== carsPerPage) {
            carsPerPage = newCarsPerPage;
            currentPage = 1;
            displayCars();
        }
    });
});