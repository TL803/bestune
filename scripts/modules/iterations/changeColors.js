  const colorContainer = document.getElementById('colors-container');
  const carImage = document.getElementById('car-image');

  const colors = [
    { name: "Rectangle 2 (2).png", hex: "#ef4444" },
    { name: "Rectangle 2 (2).png", hex: "#f97316" },
    { name: "Rectangle 2 (2).png", hex: "#f59e0b" },
    { name: "Rectangle 2 (2).png", hex: "#eab308" },
    { name: "Rectangle 2 (2).png", hex: "#84cc16" },
    { name: "Rectangle 2 (2).png", hex: "#3b82f6" },
    { name: "Rectangle 2 (2).png", hex: "#6366f1" },
    { name: "Rectangle 2 (2).png", hex: "#78716c" }
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
      carImage.src = `../assets/loanandsoon/${selectedColor}`;
    }
  });

  if (colorContainer.firstElementChild) {
    colorContainer.firstElementChild.click();
  }