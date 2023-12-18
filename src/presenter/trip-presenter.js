import ListPointsView from "../view/list-points-view.js";
import NewFormView from "../view/new-form-view.js";
import EditFormView from "../view/edit-form-view.js";
import PointView from "../view/point-view.js";
import {render} from "../render.js";

export default class TripPresenter {
  tripComponent = new ListPointsView();

  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(this.tripComponent, this.tripContainer);
    render(new EditFormView(), this.tripComponent.getElement());
    render(new NewFormView(), this.tripComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.tripComponent.getElement());
    }
  }
}
