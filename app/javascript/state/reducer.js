import { SET_END_DATETIME, SET_START_DATETIME } from "./actionTypes";

const initState = {
  startDateTime: null,
  endDateTime: null,
};

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_START_DATETIME:
      return { ...state, startDateTime: action.payload };
    case SET_END_DATETIME:
      return { ...state, endDateTime: action.payload };
    default:
      return state;
  }
};

export default Reducer;
