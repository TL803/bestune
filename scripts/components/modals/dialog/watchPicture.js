  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModalBtn = document.getElementById('closeModal');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentImages = [];
    let currentIndex = 0;

    // Находим ВСЕ блоки с авто (и мобильный, и десктоп)
    const carInfoBlocks = document.querySelectorAll('[data-car-info]');

    carInfoBlocks.forEach(block => {
      // Берём ТОЛЬКО миниатюры, которые находятся в .flex (это ваши 2 картинки: интерьер + вид сбоку)
      const thumbnails = block.querySelectorAll('.flex img');

      thumbnails.forEach((img, index) => {
        img.addEventListener('click', (e) => {
          // Собираем все изображения из этого .flex
          currentImages = Array.from(thumbnails).map(thumb => thumb.src);
          currentIndex = index;
          openModal();
        });
      });
    });

    function openModal() {
      modalImg.src = currentImages[currentIndex];
      modal.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function closeModal() {
      modal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
      currentImages = [];
      currentIndex = 0;
    }

    function showNext() {
      if (currentImages.length === 0) return;
      currentIndex = (currentIndex + 1) % currentImages.length;
      modalImg.src = currentImages[currentIndex];
    }

    function showPrev() {
      if (currentImages.length === 0) return;
      currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      modalImg.src = currentImages[currentIndex];
    }

    // Обработчики кнопок
    closeModalBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // Закрытие по клику вне изображения
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    // Навигация стрелками
    document.addEventListener('keydown', (e) => {
      if (modal.classList.contains('hidden')) return;
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowRight') showNext();
      else if (e.key === 'ArrowLeft') showPrev();
    });
  });