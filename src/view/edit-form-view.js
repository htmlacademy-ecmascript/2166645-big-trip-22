import {createElement} from '../render.js';
import {humanizeTripDate} from '../utils.js';

const POINT_TYPE = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

function createEditFormTemplate(point, destinations, offers) {
  const pointDestination = destinations.find((el) => el.id === point.destination);
  const typeOffers = offers.find((el) => el.type === point.type).offers;
  const pointOffers = typeOffers.filter((el) => point.offers.includes(el.id));
  const {basePrice, dateFrom, dateTo, type} = point;
  const {description, name, pictures} = pointDestination;
  const pointId = point.id;

  return (`
  <li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-${pointId}">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${pointId}" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${POINT_TYPE.map((pointType) => (`
              <div class= "event__type-item">
                <input id="event-type-${pointType.toLowerCase()}-${pointId}" class="event__type-input visually-hidden" type="radio"
                  name="event-type" value="${pointType.toLowerCase()}">
                  <label class="event__type-label  event__type-label--${pointType.toLowerCase()}" for="event-type-${pointType.toLowerCase()}-${pointId}">${pointType}</label>
              </div>`)).join('')}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-${pointId}">
          ${type} /*надо с большой буквы*/
        </label>
        <input class="event__input  event__input--destination" id="event-destination-${pointId}" type="text"
          name="event-destination" value="${name}" list="destination-list-${pointId}">
        <datalist id="destination-list-${pointId}">
         ${destinations.map((destination) => `<option value="${destination.name}"></option>`).join('')}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-${pointId}">From</label>
        <input class="event__input  event__input--time" id="event-start-time-${pointId}" type="text"
          name="event-start-time" value="${humanizeTripDate(dateFrom, 'D/MM/YY HH:m')}">
        &mdash;
        <label class="visually-hidden" for="event-end-time-${pointId}">To</label>
        <input class="event__input  event__input--time" id="event-end-time-${pointId}" type="text"
          name="event-end-time" value="${humanizeTripDate(dateTo, 'D/MM/YY HH:m')}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-${pointId}">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-${pointId}" type="text" name="event-price"
          value="${basePrice}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
    ${typeOffers.length ?
      `<section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
        ${typeOffers.map((typeOffer) => (
        `<div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox"
            name="event-offer-luggage" checked>
            <label class="event__offer-label" for="event-offer-luggage-1">
              <span class="event__offer-title">Add luggage</span>
              &plus;&euro;&nbsp;
              <span class="event__offer-price">50</span>
            </label>
          </div>`
      )).join('')}
     </div>
      </section>`
      : ''}
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a
          resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the
          highest summit in the Alps, it's renowned for its skiing.</p>
      </section>
    </section>
  </form>
</li>`);
}

export default class EditFormView {
  constructor(point, destinations, offers) {
    this.point = point;
    this.destinations = destinations;
    this.offers = offers;
  }

  getTemplate() {
    return createEditFormTemplate(this.point, this.destinations, this.offers);
  };

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
