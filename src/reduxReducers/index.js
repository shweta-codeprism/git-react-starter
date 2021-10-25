/* @flow */

import { combineReducers } from "redux";
import { searchReducer } from "./search";

const reducers = combineReducers({
  Search: searchReducer
});

export default reducers;
