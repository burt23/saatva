import classic from "./images/classic-carousel.jpg";
import loom from "./images/loom-carousel.jpg";
import zen from "./images/zen-carousel.jpg";

export const photos = [
  {
    name: "Saatva Classic",
    img: classic,
    price: `$1,299`,
    index: 0,
  },
  {
    name: "Loom & leaf",
    img: loom,
    price: `$899`,
    index: 1,
  },
  {
    name: "Zenhaven",
    img: zen,
    price: `$1,499`,
    index: 2,
  },
];

export const defaultMatress = () => photos[0];
