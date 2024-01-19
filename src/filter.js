import {FilterType} from './const.js';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter.js';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.PAST]: (points) => points.filter((point) => dayjs(point.dateTo).isBefore(dayjs())),
  [FilterType.PRESENT]: (points) => points.filter((point) => dayjs(point.dateFrom).isSameOrBefore(dayjs()) && dayjs(point.dateTo).isSameOrAfter(dayjs())),
  [FilterType.FUTURE]: (points) => points.filter((point) => dayjs(point.dateFrom).isAfter(dayjs())),
};


export {filter};
