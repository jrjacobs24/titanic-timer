import { combineReducers } from "redux";
import { createReducer } from "redux-act";
import { changeDate } from "./actions";

const date = createReducer(
  {
    [changeDate]: (state, date) => date
  },
  new Date()
);

export default combineReducers({
  date
});

/**
 * Selectors
 */

export const getSelectedDate = state => state.date;
