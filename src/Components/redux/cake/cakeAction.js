import { Buy_cake } from "./cakeType";
export const buyCake = (number =1) => {
  return {
    type: Buy_cake,
    payload: number,
  };
};
