import dayjs from 'dayjs';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeTripDate(tripDate, format) {
  return tripDate ? dayjs(tripDate).format(format) : '';
}

export {getRandomArrayElement, humanizeTripDate};
