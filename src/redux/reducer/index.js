import { combineReducers } from "redux";
import books from "./books";
import authors from "./authors";
import publishers from "./publishers";
import filters from "./filters";

export default combineReducers({
  books,
  authors,
  publishers,
  filters,
});
