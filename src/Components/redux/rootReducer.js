import { combineReducers } from "redux";
import {cakeReducer} from "./cake/cakeReducer";
import { icecreamReducer } from "./iceCream/iceCreamReducer";

export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
});
