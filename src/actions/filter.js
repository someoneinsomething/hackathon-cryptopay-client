import { FILTER } from '.';

export const changeFilterValue = (filterType, filterValue) => {
  return {
    type: FILTER.SET_FILTER_VALUE,
    filterType,
    filterValue,
  };
};
