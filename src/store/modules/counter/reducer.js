import { MENOS, MAIS } from "./actionsTypes";

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case MENOS:
      return state - 1;
    case MAIS:
      return state + 1;

    default:
      return state;
  }
};

export default reducerCounter;
