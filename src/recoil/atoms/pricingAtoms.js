import { atom } from 'recoil';

export const countriesAtom = atom({
  key: 'countries',
  default: [],
});

export const priceAtom = atom({
  key: 'price',
  default: [],
});

