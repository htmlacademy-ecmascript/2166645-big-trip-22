import TripInfoView from "./view/trip-info-view.js";
import FiltersView from "./view/filters-view.js";
import SortView from "./view/sort-view.js";
import BoardPresenter from "./presenter/board-presenter.js";
import {render, renderAfterBegin} from "./render.js";

const tripMainElement = document.querySelector('.trip-main');
const tripControlsFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: tripEvents});

renderAfterBegin(new TripInfoView(), tripMainElement);
render(new FiltersView(), tripControlsFiltersElement);
render(new SortView(), tripEvents);

boardPresenter.init();
