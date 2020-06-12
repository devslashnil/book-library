import {
  SORT_BOOKS,
  CHANGE_TITLE_FILTER,
  CHANGE_DATE_FILTER,
  CHANGE_PUBLISHERS_FILTER,
  CHANGE_AUTHORS_FILTER,
  ADD_FAVORITE_BOOK,
  REMOVE_FAVORITE_BOOK,
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

export function addFavoriteBook(book) {
  return {
    type: ADD_FAVORITE_BOOK,
    payload: { book },
  };
}

export function removeFavoriteBook(book) {
  return {
    type: REMOVE_FAVORITE_BOOK,
    payload: { book },
  };
}
