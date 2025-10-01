import { CarCreditCalculator } from './credit/CarCreditCalculator.js';

const carsData = {
  1: {
    model: "T77 PRESTIGE PLUS",
    price: 2036000,
    image: "../assets/common/81ff94c5d17c2e8d9e596e4bd924fb374e63330c.png",
    description: "PRESTIGE PLUS (ДСТ) B70, 2023",
    engine: "1.5 160 л.с.",
    transmission: "7DCT",
    drive: "Передний (2WD)",
    trim: "PRESTIGE PLUS (ДСТ) B70",
    color: "Серебро"
  },
  2: {
    model: "T90 SPORT EDITION",
    price: 2200000,
    image: "../assets/common/81ff94c5d17c2e8d9e596e4bd924fb374e63330c.png",
    description: "SPORT EDITION 1.5T, 2023",
    engine: "1.5 169 л.с.",
    transmission: "7DCT",
    drive: "Передний (2WD)",
    trim: "SPORT EDITION",
    color: "Чёрный"
  }
};

new CarCreditCalculator(carsData);