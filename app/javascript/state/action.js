import { SET_START_DATETIME, SET_END_DATETIME } from "./actionTypes";

export function setStartDatetime(datetime) {
  return {
    type: SET_START_DATETIME,
    payload: datetime,
  };
}

export function setEndDatetime(datetime) {
  return {
    type: SET_END_DATETIME,
    payload: datetime,
  };
}
