import ListPointsView from '../view/list-points-view.js';
import NewFormView from '../view/new-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import PointView from '../view/point-view.js';
import {render, replace, remove} from '../framework/render.js';

export default class TripPresenter {
  #tripComponent = null;
  #tripContainer = null;
  #pointsModel = null;

  constructor({tripContainer, pointsModel}) {
    this.#tripComponent = new ListPointsView();
    this.#tripContainer = tripContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    const points = this.#pointsModel.points;
    const destinations = this.#pointsModel.destinations;
    const offers = this.#pointsModel.offers;

    render(this.#tripComponent, this.#tripContainer);
    render(new NewFormView(), this.#tripComponent.element);

    for (let i = 0; i < points.length; i++) {
      this.#renderPoint(points[i], destinations, offers);
      /*render(new PointView(points[i], destinations, offers), this.#tripComponent.element);*/
      render(new EditFormView(points[i], destinations, offers), this.#tripComponent.element);
    }
  }

  #renderPoint(point, destinations, offers) {
    const pointComponent = new PointView(point, destinations, offers);
    render(pointComponent, this.#tripComponent.element);
  }
}
