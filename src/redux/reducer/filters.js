import { Record, Set, Map } from "immutable";
import {
  CHANGE_AUTHORS_FILTER,
  CHANGE_DATE_FILTER,
  CHANGE_PUBLISHERS_FILTER,
  CHANGE_TITLE_FILTER,
} from "../../constants";

const FilterRecord = Record({
  title: "",
  sortType: "",
  publishers: new Set(),
  authors: new Set(),
  dateRange: new Map({
    from: null,
    to: null,
  }),
});

export default (state = new FilterRecord(), action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_TITLE_FILTER:
      return state.set("title", payload.title);
    case CHANGE_DATE_FILTER:
      return state.setIn(["dateRange"], new Map(payload.dateRange));
    case CHANGE_AUTHORS_FILTER:
      return state.setIn(["authors"], new Set(payload.authors));
    case CHANGE_PUBLISHERS_FILTER:
      return state.setIn(["publishers"], new Set(payload.publishers));
    default:
      return state;
  }
};
