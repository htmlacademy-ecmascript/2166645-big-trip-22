import ListPointsView from '../view/list-points-view.js';
import {render, RenderPosition} from '../framework/render.js';
import NoPointsView from '../view/no-points-view.js';
import PointPresenter from './point-presenter.js';

export default class TripPresenter {

  #tripComponent = null;
  #tripContainer = null;
  #pointsModel = null;

  #noPointsComponent = new NoPointsView();

  #points = [];
  #destinations = [];
  #offers = [];

  constructor({tripContainer, pointsModel}) {
    this.#tripComponent = new ListPointsView();
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#points = [...this.#pointsModel.points];
    this.#destinations = [...this.#pointsModel.destinations];
    this.#offers = [...this.#pointsModel.offers];

    this.#renderTripList();
  }

  #renderNoPoints() {
    render(this.#noPointsComponent, this.#tripComponent.element, RenderPosition.AFTERBEGIN);
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#tripComponent.element,
    });
    pointPresenter.init(point, this.#destinations, this.#offers);
  }

  #renderPoints() {
    for (const point of this.#points) {
      this.#renderPoint(point);
    }
  }

  #renderTripList() {
    render(this.#tripComponent, this.#tripContainer);

    if (this.#points.length === 0) {
      this.#renderNoPoints();
      return;
    }

    this.#renderPoints();
  }
}
