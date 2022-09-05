import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "./redux";
export const HookCakeConatainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <>
      <p>number of Cakes:{numOfCakes}</p>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </>
  );
};
