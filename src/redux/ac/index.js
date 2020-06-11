import {
  SORT_BOOKS,
  CHANGE_TITLE_FILTER,
  CHANGE_DATE_FILTER,
  CHANGE_PUBLISHERS_FILTER,
  CHANGE_AUTHORS_FILTER,
} from "../../constants";

export function changeTitleFilter(title) {
  return {
    type: CHANGE_TITLE_FILTER,
    payload: { title },
  };
}

export function sortBooks(orderConstant) {
  return {
    type: SORT_BOOKS + orderConstant,
  };
}

export function changeDateFilter(dateRange) {
  return {
    type: CHANGE_DATE_FILTER,
    payload: { dateRange },
  };
}

export function changePublishersFilter(publishers) {
  return {
    type: CHANGE_PUBLISHERS_FILTER,
    payload: { publishers },
  };
}

export function changeAuthorsFilter(authors) {
  return {
    type: CHANGE_AUTHORS_FILTER,
    payload: { authors },
  };
}
