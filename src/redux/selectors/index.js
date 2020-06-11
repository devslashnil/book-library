import { createSelector } from "reselect";
import store from "store";
import { isBookPassFilters } from "../utils";

export const booksSelector = (state) =>
  state.books.entities.valueSeq().toArray();

/**
 * Very very inefficient way to do it, but otherwise need a lot more code
 * If it wasn't study projects I wouldn't let myself so many re-renders
 */
export const favoritesBooksSelector = (state) =>
  state.books.entities
    .valueSeq()
    .toArray()
    .filter((book) => store.get(book.id) && store.get(book.id).isFavorite);

export const filtersSelector = (state) => state.filters;

export const titleFilterSelector = (state) =>
  filtersSelector(state).get("title");

export const publishersSelector = (state) => state.publishers;

export const authorsSelector = (state) => state.authors;

export const filteredBooksSelector = createSelector(
  booksSelector,
  filtersSelector,
  (books, filters) => books.filter((book) => isBookPassFilters(book, filters))
);

export const filteredFavoritesBooksSelector = createSelector(
  favoritesBooksSelector,
  filtersSelector,
  (books, filters) => books.filter((book) => isBookPassFilters(book, filters))
);
