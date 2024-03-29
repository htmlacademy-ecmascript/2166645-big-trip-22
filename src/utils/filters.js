import {filter} from '../filter.js';

function generateFilter() {
  return Object.entries(filter).map(
    ([filterType, filterMessage]) => ({
      type: filterType,
      message: filterMessage
    }),
  );
}

export {generateFilter};
