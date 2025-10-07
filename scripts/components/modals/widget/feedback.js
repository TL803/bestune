document.addEventListener('DOMContentLoaded', () => {
    // === 1. СТИЛИ TAILWIND ===
    const styleId = 'pulse-animation-style';
    if (!document.getElementById(styleId)) {
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = `
            @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(51, 102, 189, 0.7); }
                70% { box-shadow: 0 0 0 12px rgba(51, 102, 189, 0); }
                100% { box-shadow: 0 0 0 0 rgba(51, 102, 189, 0); }
            }
            .pulse { animation: pulse 2s infinite; }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .fade-in { animation: fadeIn 0.5s ease-out; }

            /* Стили для кастомного чекбокса */
            .custom-checkbox-square {
                display: block;
                position: relative;
                cursor: pointer;
                width: 20px;
                height: 20px;
                flex-shrink: 0;
            }
            
            .custom-checkbox-square input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                width: 0;
                height: 0;
            }
            
            .checkmark {
                position: absolute;
                top: 0;
                left: 0;
                width: 20px;
                height: 20px;
                background-color: #EDEDED33;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: transparent;
                font-size: 14px;
                transition: all 0.2s ease;
            }
            
            .custom-checkbox-square input:checked ~ .checkmark {
                background-color: #3366BD;
                color: white;
            }
        `;
        document.head.appendChild(style);
    }

    // === 2. КНОПКА ВИДЖЕТ ===
    const widget = document.createElement('button');
    widget.className = 'call-widget pulse fixed bottom-6 right-6 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-50 cursor-pointer transition-colors hover:bg-blue-700';
    const phoneImage = document.createElement('img');
    phoneImage.src = "../assets/common/ic_phone_in_talk_48px.svg";
    phoneImage.alt = "Позвонить";
    phoneImage.className = "w-12 h-12";
    widget.appendChild(phoneImage);
    document.body.appendChild(widget);

    // === 3. СОЗДАЁМ МОДАЛКУ ОБРАТНОГО ЗВОНКА ===
    const callbackModal = document.createElement('div');
    callbackModal.className = 'callback-modal fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center p-4';
    callbackModal.innerHTML = `
        <div class="bg-[#282624] text-white rounded-lg w-[600px] flex flex-col max-h-[90vh] overflow-hidden">
            <!-- Форма обратного звонка -->
            <div id="callback-form-content" class="form-content flex flex-col flex-1">
                <div class="flex-shrink-0 p-6 pb-4">
                    <h2 class="text-[24px] font-medium mb-2 leading-tight break-words text-center">Заказать обратный звонок</h2>
                    <p class="text-[13px] font-regular mb-6 leading-relaxed break-words text-center">
                        Мы Вам перезвоним и предложим лучшие условия на покупку автомобиля со скидкой до 450 000 руб. и бесплатно забронируем его
                    </p>
                </div>

                <form id="callback-form" class="flex-1 flex flex-col px-6 pb-6">
                    <div class="w-full space-y-4 flex-1">
                        <div>
                            <label class="block mb-2 text-[16px] leading-tight">ФИО</label>
                            <input type="text" id="fullname" placeholder="Иванов Иван Иванович" data-validate="name"
                                class="w-full px-3 py-3 bg-[#EDEDED33] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-[16px] placeholder-gray-400 text-white">
                        </div>

                        <div>
                            <label class="block mb-2 text-[16px] leading-tight">Телефон</label>
                            <input type="tel" id="phone" placeholder="+7 (___) ___-__-__" data-validate="phone"
                                class="w-full px-3 py-3 bg-[#EDEDED33] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-[16px] placeholder-gray-400 text-white">
                        </div>

                        <div class="flex items-start space-x-3 mt-6">
                            <label class="custom-checkbox-square">
                                <input type="checkbox" id="consent" data-validate="required" checked/>
                                <span class="checkmark">✓</span>
                            </label>
                            <span class="text-sm text-gray-300 leading-relaxed">
                                Согласен с <a href="./privacypolicy.html"
                                    class="text-[#3366BD] underline hover:text-[#2a55a0]">политикой обработки персональных данных</a>
                            </span>
                        </div>
                    </div>

                    <div class="w-full mt-6">
                        <button type="submit"
                            class="w-full py-3 bg-[#3366BD] hover:bg-blue-700 rounded-lg font-medium transition-colors text-[16px]">
                            Заказать звонок
                        </button>
                    </div>
                </form>
            </div>

            <!-- Успешная отправка -->
            <div id="success-content" class="success-content hidden flex flex-col flex-1">
                <div class="flex-1 flex flex-col justify-center items-center text-center p-6">
                    <svg class="w-16 h-16 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h2 class="text-[24px] font-medium mb-4 text-white">Ваша заявка успешно отправлена!</h2>
                    <button id="success-close-btn" class="w-full max-w-xs py-3 bg-[#3366BD] hover:bg-blue-700 rounded-lg font-medium transition-colors text-[16px]">
                        Отлично
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(callbackModal);

    // === 4. ПОЛУЧАЕМ ЭЛЕМЕНТЫ ===
    const form = document.getElementById('callback-form');
    const fullnameInput = document.getElementById('fullname');
    const phoneInput = document.getElementById('phone');
    const consentInput = document.getElementById('consent');
    const formContent = document.getElementById('callback-form-content');
    const successContent = document.getElementById('success-content');
    const successCloseBtn = document.getElementById('success-close-btn');

    // === 5. ФУНКЦИИ ДЛЯ УПРАВЛЕНИЯ МОДАЛКОЙ ===
    function showModal(modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function hideModal(modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        
        // Сбрасываем состояние модалки при закрытии
        resetModalState();
    }

    function resetModalState() {
        // Показываем форму, скрываем успех
        formContent.classList.remove('hidden');
        successContent.classList.add('hidden');
        
        // Сбрасываем форму
        form.reset();
        if (phoneMask) {
            phoneMask.updateValue();
        }
        
        // Очищаем ошибки
        clearAllErrors();
    }

    function showSuccessState() {
        // Скрываем форму и показываем успех
        formContent.classList.add('hidden');
        successContent.classList.remove('hidden');
    }

    // === 6. ФУНКЦИИ ВАЛИДАЦИИ ===
    function clearAllErrors() {
        const errors = document.querySelectorAll('.validation-error');
        errors.forEach(error => error.remove());
        
        const errorInputs = document.querySelectorAll('.border-red-500');
        errorInputs.forEach(input => input.classList.remove('border-red-500'));
    }

    function toggleError(input, hasError) {
        const wrapper = input.closest('div');
        if (!wrapper) return;
        
        let errorEl = wrapper.querySelector('.validation-error');

        if (hasError) {
            if (!errorEl) {
                errorEl = document.createElement('p');
                errorEl.className = 'validation-error text-red-400 text-sm mt-1 block';
                if (input.dataset.validate === 'name') {
                    errorEl.textContent = 'Имя должно содержать минимум 2 буквы и не включать цифры';
                } else if (input.dataset.validate === 'phone') {
                    errorEl.textContent = 'Пожалуйста, введите корректный номер телефона';
                } else if (input.dataset.validate === 'required') {
                    errorEl.textContent = 'Необходимо согласие на обработку персональных данных';
                }
                wrapper.appendChild(errorEl);
            }
            input.classList.add('border-red-500');
        } else {
            if (errorEl) errorEl.remove();
            input.classList.remove('border-red-500');
        }
    }

    let phoneMask;
    if (typeof IMask !== 'undefined') {
        phoneMask = IMask(phoneInput, {
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
            phoneMask.unmaskedValue = digits;
            toggleError(phoneInput, false);
        });
    }

    // Добавляем обработчики событий только если элементы существуют
    if (fullnameInput) {
        fullnameInput.addEventListener('focus', () => toggleError(fullnameInput, false));
    }
    
    if (phoneInput) {
        phoneInput.addEventListener('focus', () => toggleError(phoneInput, false));
    }
    
    if (consentInput) {
        consentInput.addEventListener('change', () => toggleError(consentInput, false));
    }

    widget.addEventListener('click', () => {
        showModal(callbackModal);
    });

    callbackModal.addEventListener('click', (e) => {
        if (e.target === callbackModal) {
            hideModal(callbackModal);
        }
    });

    if (successCloseBtn) {
        successCloseBtn.addEventListener('click', () => {
            hideModal(callbackModal);
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;

            // Валидация имени
            if (fullnameInput) {
                const nameValid = /^[а-яА-ЯёЁa-zA-Z\s]{2,}$/.test(fullnameInput.value.trim());
                toggleError(fullnameInput, !nameValid);
                if (!nameValid) isValid = false;
            }

            // Валидация телефона
            if (phoneInput) {
                const phoneClean = phoneInput.value.replace(/\D/g, '');
                const phoneValid = phoneClean.length === 11 && phoneClean.startsWith('7');
                toggleError(phoneInput, !phoneValid);
                if (!phoneValid) isValid = false;
            }

            // Валидация чекбокса
            if (consentInput) {
                const consentValid = consentInput.checked;
                toggleError(consentInput, !consentValid);
                if (!consentValid) isValid = false;
            }

            if (!isValid) {
                console.warn('Форма содержит ошибки');
                return;
            }

            console.log('Отправлено:', {
                fullname: fullnameInput ? fullnameInput.value.trim() : '',
                phone: phoneInput ? phoneInput.value : '',
                email: document.getElementById('email') ? document.getElementById('email').value : '',
                comment: document.getElementById('comment') ? document.getElementById('comment').value : ''
            });

            // Показываем success modal вместо формы
            showSuccessState();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideModal(callbackModal);
        }
    });
});