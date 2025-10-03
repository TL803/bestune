  const colorContainer = document.getElementById('colors-container');
  const carImage = document.getElementById('car-image');

  const colors = [
    { name: "red", hex: "#ef4444" },
    { name: "orange", hex: "#f97316" },
    { name: "amber", hex: "#f59e0b" },
    { name: "yellow", hex: "#eab308" },
    { name: "lime", hex: "#84cc16" },
    { name: "blue", hex: "#3b82f6" },
    { name: "indigo", hex: "#6366f1" },
    { name: "stone", hex: "#78716c" }
  ];

  let activeColorElem = null;

  colors.forEach((color) => {
    const colorElem = document.createElement('div');
    colorElem.className = 'w-8 h-8 border-2 border-gray-300 rounded cursor-pointer';
    colorElem.style.backgroundColor = color.hex;
    colorElem.title = `${color.name} — ${color.hex}`;
    colorElem.dataset.color = color.name;
    colorContainer.appendChild(colorElem);
  });

  colorContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('cursor-pointer')) {
      if (activeColorElem) {
        activeColorElem.classList.replace('border-blue-500', 'border-gray-300');
      }

      e.target.classList.replace('border-gray-300', 'border-blue-500');
      activeColorElem = e.target;

      const selectedColor = e.target.dataset.color;
      carImage.src = `../assets/common/car-${selectedColor}.png`;
    }
  });

  if (colorContainer.firstElementChild) {
    colorContainer.firstElementChild.click();
  }