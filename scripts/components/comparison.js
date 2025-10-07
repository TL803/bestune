document.addEventListener("DOMContentLoaded", () => {
    const cars = [
        {
            id: 1,
            status: 'В пути',
            statusColor: 'amber',
            img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
            title: 'T77',
            complectation: 'PRESTIGE PLUS (DCT) (t77), 2023',
            engine: '1.5 160 л.с.',
            transmission: '7DCT',
            drive: 'Передний (2WD)',
            price: '2 036 000',
            monthlyPayment: '11 444',
            adress: 'Береговой пр., 4/6с3, Москва',
            link: 'avaliableauto.html',
            characteristics: {
                engine: '1.5 160 л.с.',
                transmission: '7DCT',
                power: '160 л.с.',
                code: '70СТ',
                equipment: 'PRESTIGE PLUS (DCT) (t77)',
                year: '2023',
                engineType: 'Бензиновый',
                volume: '1.5 л',
                torque: '270 Н·м',
                transmissionType: 'Автоматическая',
                gears: '7',
                driveType: 'Передний',
                headlights: 'Светодиодные (LED)',
                rearLights: 'Светодиодные (LED)',
                wheels: 'Легкосплавные 17"',
                interior: 'Кожа',
                climate: '2-зонный',
                multimedia: 'Сенсорный экран 8"',
                airbags: '6',
                abs: '✓',
                esp: '✓',
                camera: '✓',
                seatHeating: 'Передние',
                seatControl: 'Водительское',
                cruise: '✓',
                screen: '8" сенсорный',
                navigation: '✓',
                audio: '6 динамиков',
                carplay: '✓'
            }
        },
        {
            id: 2,
            status: 'В пути',
            statusColor: 'amber',
            img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
            title: 'T77',
            complectation: 'PRESTIGE PLUS (DCT) (t77), 2023',
            engine: '1.5 160 л.с.',
            transmission: '7DCT',
            drive: 'Передний (2WD)',
            price: '2 036 000',
            monthlyPayment: '11 444',
            adress: 'Береговой пр., 4/6с3, Москва',
            link: 'avaliableauto.html',
            characteristics: {
                engine: '1.5 160 л.с.',
                transmission: '7DCT',
                power: '160 л.с.',
                code: '70СТ',
                equipment: 'PRESTIGE PLUS (DCT) (t77)',
                year: '2023',
                engineType: 'Бензиновый',
                volume: '1.5 л',
                torque: '270 Н·м',
                transmissionType: 'Автоматическая',
                gears: '7',
                driveType: 'Передний',
                headlights: 'Светодиодные (LED)',
                rearLights: 'Светодиодные (LED)',
                wheels: 'Легкосплавные 17"',
                interior: 'Кожа',
                climate: '2-зонный',
                multimedia: 'Сенсорный экран 8"',
                airbags: '6',
                abs: '✓',
                esp: '✓',
                camera: '✓',
                seatHeating: 'Передние',
                seatControl: 'Водительское',
                cruise: '✓',
                screen: '8" сенсорный',
                navigation: '✓',
                audio: '6 динамиков',
                carplay: '✓'
            }
        },
        {
            id: 3,
            status: 'В наличии',
            statusColor: 'green',
            img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
            title: 'T77 Pro',
            complectation: 'LUXURY (DCT) (t77), 2024',
            engine: '2.0 200 л.с.',
            transmission: '8DCT',
            drive: 'Полный (4WD)',
            price: '2 536 000',
            monthlyPayment: '14 200',
            adress: 'Ленинский пр., 12, Москва',
            link: 'avaliableauto.html',
            characteristics: {
                engine: '2.0 200 л.с.',
                transmission: '8DCT',
                power: '200 л.с.',
                code: '80СТ',
                equipment: 'LUXURY (DCT) (t77)',
                year: '2024',
                engineType: 'Бензиновый',
                volume: '2.0 л',
                torque: '320 Н·м',
                transmissionType: 'Автоматическая',
                gears: '8',
                driveType: 'Полный',
                headlights: 'Светодиодные (LED)',
                rearLights: 'Светодиодные (LED)',
                wheels: 'Легкосплавные 18"',
                interior: 'Кожа премиум',
                climate: '3-зонный',
                multimedia: 'Сенсорный экран 10"',
                airbags: '8',
                abs: '✓',
                esp: '✓',
                camera: '✓',
                seatHeating: 'Передние и задние',
                seatControl: 'Водительское и пассажирское',
                cruise: 'Адаптивный',
                screen: '10" сенсорный',
                navigation: '✓',
                audio: '10 динамиков',
                carplay: '✓'
            }
        },
        {
            id: 4,
            status: 'В наличии',
            statusColor: 'green',
            img: '../assets/cars/d2c5d2c632acbfb2690e318c4787fff921a2272e.png',
            title: 'T77 Pro',
            complectation: 'LUXURY (DCT) (t77), 2024',
            engine: '2.0 200 л.с.',
            transmission: '8DCT',
            drive: 'Полный (4WD)',
            price: '2 536 000',
            monthlyPayment: '14 200',
            adress: 'Ленинский пр., 12, Москва',
            link: 'avaliableauto.html',
            characteristics: {
                engine: '2.0 200 л.с.',
                transmission: '8DCT',
                power: '200 л.с.',
                code: '80СТ',
                equipment: 'LUXURY (DCT) (t77)',
                year: '2024',
                engineType: 'Бензиновый',
                volume: '2.0 л',
                torque: '320 Н·м',
                transmissionType: 'Автоматическая',
                gears: '8',
                driveType: 'Полный',
                headlights: 'Светодиодные (LED)',
                rearLights: 'Светодиодные (LED)',
                wheels: 'Легкосплавные 18"',
                interior: 'Кожа премиум',
                climate: '3-зонный',
                multimedia: 'Сенсорный экран 10"',
                airbags: '8',
                abs: '✓',
                esp: '✓',
                camera: '✓',
                seatHeating: 'Передние и задние',
                seatControl: 'Водительское и пассажирское',
                cruise: 'Адаптивный',
                screen: '10" сенсорный',
                navigation: '✓',
                audio: '10 динамиков',
                carplay: '✓'
            }
        }
    ];

    let currentCarIndexes = [0, 1]; // По умолчанию — первые две машины
    let isMobileView = window.innerWidth < 1280;

    // Функция для создания карточки автомобиля
    function createCarCard(car, index) {
        const statusColors = {
            'amber': {
                text: 'text-amber-800',
                bg: 'bg-amber-100'
            },
            'green': {
                text: 'text-green-800',
                bg: 'bg-green-100'
            }
        };

        const colors = statusColors[car.statusColor] || statusColors.amber;

        return `
            <div class="bg-white rounded-lg shadow-md border border-gray-100 flex flex-col car-card" data-car-index="${index}">
                <div class="p-3 sm:p-4 flex-1 flex flex-col">
                    <!-- Статус -->
                    <div class="mb-2 sm:mb-3">
                        <span class="inline-block px-2 py-1 text-xs sm:text-[12px] font-bold ${colors.text} ${colors.bg} rounded-full">
                            ${car.status}
                        </span>
                    </div>

                    <div class="mb-3 sm:mb-4">
                        <div class="w-full h-32 sm:h-40 md:h-48 rounded-md flex items-center justify-center">
                            <img src="${car.img}" alt="${car.title}" class="object-contain h-full">
                        </div>
                    </div>
                    <h3 class="text-lg sm:text-xl md:text-[24px] font-normal mb-1">${car.title}</h3>
                    <p class="text-sm sm:text-[15px] md:text-[16px] text-gray-600 mb-2 sm:mb-3 line-clamp-2">
                        ${car.complectation}
                    </p>
                    <div class="space-y-1 hidden sm:block sm:space-y-2 mb-3 sm:mb-4 text-xs sm:text-[13px] md:text-[14px] text-gray-700 flex-1">
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
                    <div class="text-lg sm:text-xl md:text-[24px] font-normal text-gray-900 mb-1">${car.price} ₽</div>
                    <div class="text-xs sm:text-[12px] text-gray-500 mb-3 sm:mb-4">Платеж от ${car.monthlyPayment} ₽/месяц</div>
                    <div class="flex justify-between items-center text-xs sm:text-[12px] text-gray-500">
                        <div class="flex items-center flex-1 min-w-0">
                            <i class="fas fa-map-marker-alt text-gray-400 mr-1 flex-shrink-0 text-lg"></i>
                            <span class="truncate">${car.adress}</span>
                        </div>
                        <img src="../assets/scales-light.svg" alt="Сравнить" class="w-5 h-5">
                    </div>
                </div>
            </div>
        `;
    }

    // Функция для создания слайдера
    function createSlider(index) {
        const currentCarIndex = currentCarIndexes[index];
        return `
            <div class="slider-container mt-4" data-slider-index="${index}">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center bg-white border border-gray-300 rounded-full px-2 py-1">
                        <button class="slider-prev p-2 rounded-full hover:bg-gray-50 transition" data-index="${index}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <span class="text-xs text-gray-500 px-2">${currentCarIndex + 1} из ${cars.length}</span>
                        <button class="slider-next p-2 rounded-full hover:bg-gray-50 transition" data-index="${index}">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Функция для рендеринга карточек и слайдеров
    function renderCarCards() {
        const cardsContainer = document.querySelector('[data-cars-comparison]');
        
        if (!cardsContainer) return;

        // Определяем режим
        isMobileView = window.innerWidth < 1280;

        if (isMobileView) {
            // Мобильная версия — всегда 2 карточки со слайдерами
            cardsContainer.className = 'grid grid-cols-2 gap-6 mb-10 sticky top-0';
            
            // Создаём или обновляем 2 карточки
            if (cardsContainer.children.length !== 2) {
                cardsContainer.innerHTML = '';
                for (let i = 0; i < 2; i++) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'car-slider-wrapper';
                    cardsContainer.appendChild(wrapper);
                }
            }

            // Обновляем содержимое каждой карточки
            const wrappers = cardsContainer.querySelectorAll('.car-slider-wrapper');
            wrappers.forEach((wrapper, index) => {
                wrapper.innerHTML = `
                    ${createCarCard(cars[currentCarIndexes[index]], index)}
                    ${createSlider(index)}
                `;
            });

        } else {
            // Десктопная версия — 4 карточки без слайдеров
            cardsContainer.className = 'grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 sticky top-0';
            cardsContainer.innerHTML = cars.map((car, index) => 
                createCarCard(car, index)
            ).join('');
        }

        addSliderEventListeners();
    }

    // Функция для добавления обработчиков событий слайдеров
    function addSliderEventListeners() {
        if (!isMobileView) return;

        // Убираем старые обработчики (если есть)
        document.querySelectorAll('.slider-prev').forEach(button => {
            button.removeEventListener('click', sliderPrevHandler);
            button.addEventListener('click', sliderPrevHandler);
        });

        document.querySelectorAll('.slider-next').forEach(button => {
            button.removeEventListener('click', sliderNextHandler);
            button.addEventListener('click', sliderNextHandler);
        });
    }

    // Обработчики для кнопок слайдера
    function sliderPrevHandler(e) {
        const sliderIndex = parseInt(e.target.closest('.slider-prev').dataset.index);
        navigateSlider(sliderIndex, -1);
    }

    function sliderNextHandler(e) {
        const sliderIndex = parseInt(e.target.closest('.slider-next').dataset.index);
        navigateSlider(sliderIndex, 1);
    }

    // Функция для навигации по слайдеру
    function navigateSlider(sliderIndex, direction) {
        let newIndex = currentCarIndexes[sliderIndex] + direction;
        
        // Циклическая навигация
        if (newIndex < 0) newIndex = cars.length - 1;
        if (newIndex >= cars.length) newIndex = 0;
        
        selectCar(sliderIndex, newIndex);
    }

    // Функция для выбора автомобиля в слайдере
    function selectCar(sliderIndex, carIndex) {
        // Проверка: если эта машина уже выбрана в другом слайдере — отмена
        const otherIndex = sliderIndex === 0 ? 1 : 0;
        if (currentCarIndexes[otherIndex] === carIndex) {
            return;
        }

        currentCarIndexes[sliderIndex] = carIndex;
        renderCarCards(); // Перерисовываем только карточки, не трогая аккордеоны
        updateComparisonTable();
    }

// Функция для создания секции характеристик с таблицей
function createCharacteristicSection(sectionName, characteristics) {
    return `
        <div class="comparison-section border border-gray-200 rounded-lg overflow-hidden mb-6 shadow-sm">
            <div class="bg-gray-50 px-6 py-4 font-semibold text-gray-900 border-b border-gray-300">
                ${sectionName}
            </div>
            <div class="bg-white">
                <div class="divide-y divide-gray-200">
                    ${characteristics.map(char => createCharacteristicRow(char.name, char.key)).join('')}
                </div>
            </div>
        </div>
    `;
}

// Функция для создания строки характеристики как таблицы
function createCharacteristicRow(characteristicName, characteristicKey) {
    let values;
    
    if (isMobileView) {
        values = currentCarIndexes.map(index => cars[index].characteristics[characteristicKey]);
    } else {
        values = cars.map(car => car.characteristics[characteristicKey]);
    }

    const cols = isMobileView ? 2 : 4;
    const colClass = isMobileView 
        ? 'grid-cols-[1fr_1fr]' 
        : 'grid-cols-[1fr_1fr_1fr_1fr]';

    return `
        <div class="grid ${colClass} gap-0 py-3 px-6 hover:bg-gray-50 transition-colors duration-150">
            <div class="font-medium text-gray-700 py-2 border-r border-gray-200 pr-4">${characteristicName}</div>
            ${values.map((value, index) => `
                <div class="text-gray-900 py-2 px-4 text-end ${
                    index < values.length - 1 ? 'border-r border-gray-200' : ''
                }">${value || '—'}</div>
            `).join('')}
        </div>
    `;
}

    // Функция для обновления таблицы характеристик
    function updateComparisonTable() {
        const sections = {
            'Основное': [
                { name: 'Двигатель', key: 'engine' },
                { name: 'Трансмиссия', key: 'transmission' },
                { name: 'Мощность', key: 'power' },
                { name: 'Код', key: 'code' },
                { name: 'Комплектация', key: 'equipment' },
                { name: 'Год выпуска', key: 'year' }
            ],
            'Двигатель': [
                { name: 'Тип двигателя', key: 'engineType' },
                { name: 'Объем', key: 'volume' },
                { name: 'Мощность', key: 'power' },
                { name: 'Крутящий момент', key: 'torque' }
            ],
            'Трансмиссия': [
                { name: 'Тип', key: 'transmissionType' },
                { name: 'Количество передач', key: 'gears' },
                { name: 'Привод', key: 'driveType' }
            ],
            'Экстерьер': [
                { name: 'Тип фар', key: 'headlights' },
                { name: 'Задние фонари', key: 'rearLights' },
                { name: 'Диски', key: 'wheels' }
            ],
            'Интерьер': [
                { name: 'Отделка салона', key: 'interior' },
                { name: 'Климат-контроль', key: 'climate' },
                { name: 'Мультимедийная система', key: 'multimedia' }
            ],
            'Безопасность': [
                { name: 'Подушки безопасности', key: 'airbags' },
                { name: 'ABS', key: 'abs' },
                { name: 'ESP', key: 'esp' },
                { name: 'Камера заднего вида', key: 'camera' }
            ],
            'Комфорт': [
                { name: 'Климат-контроль', key: 'climate' },
                { name: 'Подогрев сидений', key: 'seatHeating' },
                { name: 'Электропривод сидений', key: 'seatControl' },
                { name: 'Круиз-контроль', key: 'cruise' }
            ],
            'Мультимедиа': [
                { name: 'Экран', key: 'screen' },
                { name: 'Навигация', key: 'navigation' },
                { name: 'Аудиосистема', key: 'audio' },
                { name: 'Apple CarPlay / Android Auto', key: 'carplay' }
            ]
        };

        const comparisonTable = document.getElementById('comparison-table');
        
        const sectionsHTML = Object.keys(sections).map(sectionName => 
            createCharacteristicSection(sectionName, sections[sectionName])
        ).join('');

        comparisonTable.innerHTML = sectionsHTML;
    }

    // Функция для обработки изменения размера окна
    function handleResize() {
        const newIsMobileView = window.innerWidth < 1280;
        
        if (newIsMobileView !== isMobileView) {
            isMobileView = newIsMobileView;
            if (isMobileView) {
                // При переходе в мобильный вид — оставляем только 2 карточки
                currentCarIndexes = [0, 1];
            }
            renderCarCards();
            updateComparisonTable();
        }
    }

    // Инициализация
    renderCarCards();
    updateComparisonTable();

    // Обработчик изменения размера окна
    window.addEventListener('resize', handleResize);

    // Добавляем функцию для переключения аккордеонов
    window.toggleAccordion = function(button) {
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');
        
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            icon.classList.replace('fa-plus', 'fa-minus');
        } else {
            content.classList.add('hidden');
            icon.classList.replace('fa-minus', 'fa-plus');
        }
    };

    // Добавляем нижнюю панель с табами (как на картинке)
    const bottomTabs = document.createElement('div');
    bottomTabs.innerHTML = `
        <button class="text-sm font-medium text-gray-700" onclick="switchTab('standard')">
            Стандартное<br>оборудование
        </button>
        <button class="text-sm font-medium text-gray-700" onclick="switchTab('technical')">
            Технические<br>характеристики
        </button>
    `;
    document.body.appendChild(bottomTabs);

    // Функция переключения табов
    window.switchTab = function(tab) {
        console.log('Переключено на:', tab);
        // Можно расширить функционал позже
    };
});