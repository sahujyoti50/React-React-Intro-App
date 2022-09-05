import { buyCake } from "./redux";
import {connect} from "react-redux";
const CakeContainer = (props) => {
  return (
    <>
      <p>{props.numOfCake}</p>
      <button onClick={props.buyCake}>Buy Cake</button>
    </>
  );
};

const mapToState = (state) => {
  return {
    numOfCake: state.cake.numOfCake,
  };
};

const mapToDispatch = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect (mapToState,mapToDispatch) (CakeContainer);
