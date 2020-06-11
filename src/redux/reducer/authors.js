import fixtures from "../../fixtures.json";
import { getUniquesValuesOfKey } from "../utils";

const initialState = getUniquesValuesOfKey(fixtures, "author");

export default (state = initialState, action) => state;
