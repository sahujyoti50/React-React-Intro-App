import { buyicecream } from "./iceCreamTypes";

const initialState = {
  numOfIcecream: 15
};
export const icecreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case buyicecream:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};
