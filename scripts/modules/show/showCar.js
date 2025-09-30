//    const selectCars = document.querySelectorAll('[data-select-car]');
//     const hiddenBlocks = document.querySelectorAll('[data-hidden-block]');

//     // Убедимся, что все блоки скрыты при загрузке
//     hiddenBlocks.forEach(block => block.classList.add('hidden'));

//     selectCars.forEach((select, index) => {
//       const block = hiddenBlocks[index];
//       if (!block) return;

//       const modelTarget = block.querySelector('[data-model-target]');

//       select.addEventListener('change', () => {
//         const selectedOption = select.options[select.selectedIndex];
//         const model = selectedOption.dataset.model || '—';

//         if (select.value !== '') {
//           if (modelTarget) modelTarget.textContent = model;
//           block.classList.remove('hidden');
//         } else {
//           if (modelTarget) modelTarget.textContent = '—';
//           block.classList.add('hidden');
//         }
//       });
//     });