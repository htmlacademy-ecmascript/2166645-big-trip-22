import {getRandomPoints, pointsMocks} from '../mocks/points.js';
import {destinationsMocks} from '../mocks/destinations.js';
import {offersMocks} from '../mocks/offers.js';

const POINT_COUNT = 7;

export default class PointsModel {
  constructor() {
    this.points = [];
    this.destinations = [];
    this.offers = [];
  }

  init() {
    this.points = Array.from({length: POINT_COUNT}, getRandomPoints);
    this.destinations = destinationsMocks;
    this.offers = offersMocks;
  }

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
