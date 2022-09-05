import {Buy_cake} from "./cakeType";
const initialState = {
  numOfCake: 10,
};

export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Buy_cake:
      return {
        ...state,
        numOfCake: state.numOfCake - action.payload,
      };
    default:
      return state;
  }
};


