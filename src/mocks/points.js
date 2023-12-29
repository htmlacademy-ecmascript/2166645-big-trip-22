import {getRandomArrayElement} from '../utils.js';

export const pointsMocks = [
  {
    id: '1a',
    basePrice: 1100,
    dateFrom: '2019-03-18T22:55:56.845Z',
    dateTo: '2019-03-19T11:22:13.375Z',
    destination: '1d',
    isFavorite: false,
    offers: [
      '1.1of',
      '1.3of'
    ],
    type: 'taxi'
  },

  {
    id: '2a',
    basePrice: 1500,
    dateFrom: '2022-06-10T18:10:56.845Z',
    dateTo: '2022-06-11T19:35:13.375Z',
    destination: '5d',
    isFavorite: true,
    offers: [
      '3.3of'
    ],
    type: 'ship'
  },

  {
    id: '3a',
    basePrice: 950,
    dateFrom: '2020-02-10T22:55:56.845Z',
    dateTo: '2020-02-11T11:22:13.375Z',
    destination: '3d',
    isFavorite: true,
    offers: [
      '2.1of',
      '2.2of'
    ],
    type: 'bus'
  },

  {
    id: '4a',
    basePrice: 1800,
    dateFrom: '2019-08-25T22:55:56.845Z',
    dateTo: '2019-08-31T11:22:13.375Z',
    destination: '4d',
    isFavorite: false,
    offers: [
      '4.1of',
      '4.2of'
    ],
    type: 'train'
  },

  {
    id: '5a',
    basePrice: 3500,
    dateFrom: '2019-10-31T22:55:56.845Z',
    dateTo: '2019-11-10T11:22:13.375Z',
    destination: '2d',
    isFavorite: false,
    offers: [
      '5.1of',
      '5.2of',
      '5.4of'
    ],
    type: 'flight'
  },

  {
    id: '6a',
    basePrice: 150,
    dateFrom: '2019-01-10T22:55:56.845Z',
    dateTo: '2019-01-11T11:22:13.375Z',
    destination: '3d',
    isFavorite: true,
    offers: [],
    type: 'sightseeing'
  }
]

function getRandomPoints() {
  return getRandomArrayElement(pointsMocks);
}

export {getRandomPoints};
