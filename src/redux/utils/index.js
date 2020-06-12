import { OrderedMap } from "immutable";
import store from "store";

export function isFavorite(book) {
  return (store.get(book.id) && store.get(book.id).isFavorite) || false;
}

export function arrToMap(arr, ItemRecord) {
  return arr.reduce(
    (acc, item) =>
      acc.set(
        item.id,
        new ItemRecord({ ...item, isFavorite: isFavorite(item) })
      ),
    new OrderedMap({})
  );
}

export function mapToArr(obj) {
  return Object.values(obj);
}

// Is it fastest and readable way to do it?
export function getUniquesValuesOfKey(objectsArr, key) {
  const uniquesValues = new Set();
  objectsArr.forEach((obj) => {
    uniquesValues.add(obj[key]);
  });
  return Array.from(uniquesValues);
}

/**
 * Check if BookRecord pass filters set in FiltersRecord
 * @param  {BookRecord} book description in ../reducer/books.js
 * @param  {FilterRecord} filters description in ../reducer/filters.js
 * @return {Boolean}      Is book passed filters
 */
export function isBookPassFilters(book, filters) {
  if (
    !book
      .get("title")
      .toLowerCase()
      .includes(filters.get("title").toLowerCase())
  )
    return false;
  if (
    !filters.get("publishers").isEmpty() &&
    !filters.get("publishers").has(book.get("publisher"))
  )
    return false;
  if (
    !filters.get("authors").isEmpty() &&
    !filters.get("authors").has(book.get("author"))
  )
    return false;
  if (
    filters.getIn(["dateRange", "from"]) &&
    filters.getIn(["dateRange", "from"]) > book.get("published")
  )
    return false;
  if (
    filters.getIn(["dateRange", "to"]) &&
    filters.getIn(["dateRange", "to"]) < book.get("published")
  )
    return false;

  return true;
}

export function getBookRating(book) {
  return (store.get(book.get("id")) && store.get(book.get("id")).rating) || 0;
}
