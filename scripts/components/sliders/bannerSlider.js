  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
      // Бесконечная прокрутка
      loop: true,

      // Автопрокрутка
      autoplay: {
        delay: 5000,
        disableOnInteraction: false, // не останавливать после взаимодействия
      },

      // Навигация
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },

      // Пагинация
      pagination: {
        el: '.carousel-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          // Кастомный вид точек (как у тебя)
          return `<div class="${className} w-6 h-1 rounded-full cursor-pointer ${
            index === 0 ? 'bg-white' : 'bg-white bg-opacity-50'
          }"></div>`;
        },
      },

      // Плавная анимация
      speed: 500,

      // Остановка автопрокрутки при наведении
      on: {
        init() {
          const container = document.querySelector('.carousel-container');
          if (container) {
            container.addEventListener('mouseenter', () => {
              swiper.autoplay.stop();
            });
            container.addEventListener('mouseleave', () => {
              swiper.autoplay.start();
            });
          }
        }
      }
    });
  });