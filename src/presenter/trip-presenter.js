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

    for (const point of points) {
      this.#renderPoint(point, destinations, offers);
    }
  }

  #renderPoint(point, destinations, offers) {
    const onEditClick = () => {
      replacePointToForm();
      document.addEventListener('keydown', escKeyDownHandler);
    };

    const onFormActions = () => {
      replaceFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    const onFormSubmit = () => {
      onFormActions();
    }

    const onFormClose = () => {
      onFormActions();
    }

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const pointComponent = new PointView(
      point,
      destinations,
      offers,
      onEditClick
    );

    const editFormComponent = new EditFormView(
      point,
      destinations,
      offers,
      onFormSubmit,
      onFormClose
    );

    function replaceFormToPoint() {
      replace(pointComponent, editFormComponent);
    }

    function replacePointToForm() {
      replace(editFormComponent, pointComponent);
    }

    render(pointComponent, this.#tripComponent.element)
  }
}
