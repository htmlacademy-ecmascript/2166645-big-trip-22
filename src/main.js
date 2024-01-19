import TripInfoView from './view/trip-info-view.js';
import FiltersView from './view/filters-view.js';
import SortView from './view/sort-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
import {render, RenderPosition} from './framework/render.js';
import {generateFilter} from './utils/filters.js';

const tripMainElement = document.querySelector('.trip-main');
const tripControlsFiltersElement = tripMainElement.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const pointsModel = new PointsModel();
const tripPresenter = new TripPresenter({tripContainer: tripEvents, pointsModel: pointsModel});
const filters = generateFilter(PointsModel.points);

render(new TripInfoView(), tripMainElement, RenderPosition.AFTERBEGIN);
render(new FiltersView({filters}), tripControlsFiltersElement);
render(new SortView(), tripEvents);

pointsModel.init();
tripPresenter.init();
