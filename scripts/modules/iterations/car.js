const container = document.querySelector('[data-cars]')


if (!container) {
    console.warn('Контейнер [data-cars] не найден')
}

const cars = [
    {
        heading: 'Новый T90',
        characteristic: 'Новый Bestune T90',
        price: '2 129 990 ',
        monthlyPayment: '11 444',
        img: '9faa8cb55e628e2e95d1de5df15235650bca303f.png',
        path: 'auto.html'
    },
    {
        heading: 'Новый T90',
        characteristic: 'Новый Bestune T90',
        price: '2 129 990 ',
        monthlyPayment: '11 444',
        img: '9faa8cb55e628e2e95d1de5df15235650bca303f.png'
    },
    {
        heading: 'Новый T90',
        characteristic: 'Новый Bestune T90',
        price: '2 129 990 ',
        monthlyPayment: '11 444',
        img: '9faa8cb55e628e2e95d1de5df15235650bca303f.png'
    },
    {
        heading: 'Новый T90',
        characteristic: 'Новый Bestune T90',
        price: '2 129 990 ',
        monthlyPayment: '11 444',
        img: '9faa8cb55e628e2e95d1de5df15235650bca303f.png'
    },
    {
        heading: 'Новый T90',
        characteristic: 'Новый Bestune T90',
        price: '2 129 990 ',
        monthlyPayment: '11 444',
        img: '9faa8cb55e628e2e95d1de5df15235650bca303f.png'
    },
    {
        heading: 'Новый T90',
        characteristic: 'Новый Bestune T90',
        price: '2 129 990 ',
        monthlyPayment: '11 444',
        img: '9faa8cb55e628e2e95d1de5df15235650bca303f.png'
    },
]

container.innerHTML = ''

cars.forEach((car) => {
    const a = document.createElement('a')
    a.className = 'relative bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg overflow-hidden h-[600px]'
    a.setAttribute('href', `${car.path}`)
    a.innerHTML = `
                <div class="absolute inset-0 bg-cover bg-center"
                    style="background-image: url(../assets/cars/${car.img});"></div>

                <div class="absolute top-6 left-6 text-white space-y-2">
                    <h3 class="text-3xl font-bold">${car.heading}</h3>
                    <p class="text-sm opacity-80">${car.characteristic}</p>
                    <div class="text-xl font-bold">от ${car.price}₽</div>
                    <p class="text-sm opacity-80">Платеж от ${car.monthlyPayment} ₽/месяц</p>
                </div>

                <button
                    class="absolute bottom-6 left-6 right-6 bg-[#3366BD] text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    О модели
                </button>
    `
    container.append(a)
})