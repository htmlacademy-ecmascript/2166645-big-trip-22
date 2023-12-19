import TripInfoView from './view/trip-info-view.js';
import FiltersView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import {render, RenderPosition} from './render.js';

const tripMainElement = document.querySelector('.trip-main');
const tripControlsFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter({tripContainer: tripEvents});

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FiltersView(), tripControlsFiltersElement);
render(new SortView(), tripEvents);

tripPresenter.init();
