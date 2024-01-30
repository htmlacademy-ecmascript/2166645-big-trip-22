import dayjs from 'dayjs';

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeTripDate(tripDate, format) {
  return tripDate ? dayjs(tripDate).format(format) : '';
}

function countDifferenceBetweenDates(date1, date2) {
  return dayjs(date1).diff(dayjs(date2), 'hour');
}

function takeLastWord(phrase) {
  return phrase.split(' ').pop();
}

function updateItem(items, updatedItem) {
  return items.map((item) => item.ident === updatedItem.ident ? updatedItem : item);
}

export {getRandomArrayElement, humanizeTripDate, countDifferenceBetweenDates, takeLastWord, updateItem};
