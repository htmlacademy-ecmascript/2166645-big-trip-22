import ListPointsView from '../view/list-points-view.js';
import NewFormView from '../view/new-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import PointView from '../view/point-view.js';
import {render} from '../framework/render.js';

export default class TripPresenter {

  constructor({tripContainer, pointsModel}) {
    this.tripComponent = new ListPointsView();
    this.tripContainer = tripContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    const points = this.pointsModel.getPoints();
    const destinations = this.pointsModel.getDestinations();
    const offers = this.pointsModel.getOffers();

    render(this.tripComponent, this.tripContainer);
    render(new EditFormView(points[0], destinations, offers), this.tripComponent.element);
    render(new NewFormView(), this.tripComponent.element);

    for (const point of points) {
      render(new PointView(point, destinations, offers), this.tripComponent.element);
    }
  }
}
