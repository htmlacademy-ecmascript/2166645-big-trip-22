import ListPointsView from "../view/list-points-view.js";
import NewFormView from "../view/new-form-view.js";
import EditFormView from "../view/edit-form-view.js";
import PointView from "../view/point-view.js";
import {render} from "../render.js";

export default class BoardPresenter {
  boardComponent = new ListPointsView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new EditFormView(), this.boardComponent.getElement());
    render(new NewFormView(), this.boardComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.boardComponent.getElement());
    }
  }
}
