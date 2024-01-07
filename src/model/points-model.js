import {getRandomPoints, pointsMocks} from '../mocks/points.js';
import {destinationsMocks} from '../mocks/destinations.js';
import {offersMocks} from '../mocks/offers.js';

const POINT_COUNT = 7;

export default class PointsModel {
  #points = null;
  #destinations = null;
  #offers = null;

  constructor() {
    this.#points = [];
    this.#destinations = [];
    this.#offers = [];
  }

  init() {
    this.#points = Array.from({length: POINT_COUNT}, getRandomPoints);
    this.#destinations = destinationsMocks;
    this.#offers = offersMocks;
  }

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }
}
