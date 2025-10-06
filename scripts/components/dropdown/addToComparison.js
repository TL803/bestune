        document.addEventListener('DOMContentLoaded', function() {
            // Инициализация всех dropdown компонентов на странице
            initDropdowns();
            
            function initDropdowns() {
                // Находим все dropdown контейнеры
                const dropdownContainers = document.querySelectorAll('[data-dropdown]');
                
                dropdownContainers.forEach(container => {
                    const toggleBtn = container.querySelector('[data-dropdown-toggle]');
                    const dropdownMenu = container.querySelector('[data-dropdown-menu]');
                    const menuItems = dropdownMenu.querySelectorAll('[data-action]');
                    
                    if (!toggleBtn || !dropdownMenu) return;
                    
                    // Обработчик для кнопки открытия/закрытия
                    toggleBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        toggleDropdown(dropdownMenu);
                    });
                    
                    // Обработчики для пунктов меню
                    menuItems.forEach(item => {
                        item.addEventListener('click', function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            
                            const action = this.getAttribute('data-action');
                            handleMenuItemAction(action, this);
                            
                            // Закрываем меню после выбора
                            closeDropdown(dropdownMenu);
                        });
                    });
                });
                
                // Закрытие всех dropdown при клике вне области
                document.addEventListener('click', function() {
                    closeAllDropdowns();
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
                // Сначала закрываем все открытые dropdown
                closeAllDropdowns();
                // Затем открываем нужный
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
            
            function handleMenuItemAction(action, element) {
                // Здесь можно добавить логику для каждого действия
                console.log(`Выполнено действие: ${action}`);
                
                switch(action) {
                    case 'remove':
                        console.log('Удаление из сравнения');
                        // Логика удаления из сравнения
                        break;
                    case 'add':
                        console.log('Добавление в сравнение');
                        // Логика добавления в сравнение
                        break;
                    case 'go-to':
                        console.log('Переход к сравнению');
                        // Логика перехода к сравнению
                        break;
                }
                
                // Можно добавить визуальную обратную связь
                element.classList.add('bg-blue-50');
                setTimeout(() => {
                    element.classList.remove('bg-blue-50');
                }, 300);
            }
        });