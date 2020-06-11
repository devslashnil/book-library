import fixtures from "../../fixtures.json";
import { getUniquesValuesOfKey } from "../utils";

const initialState = getUniquesValuesOfKey(fixtures, "publisher");

export default (state = initialState, action) => state;
