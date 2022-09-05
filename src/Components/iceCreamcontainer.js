import { buyIceCreams} from "./redux";
import {connect} from "react-redux";
const icecreamContainer = (props) => {
  return (
    <>
      <p>{props.numOfIcecream}</p>
      <button onClick={props.buyIceCreams}>Buy icecream</button>
    </>
  );
};

const mapToState = (state) => {
  return {
    numOfIcecream: state.iceCream.numOfIcecream,
  };
};

const mapToDispatch = (dispatch) => {
  return {
    buyIceCreams: () => dispatch(buyIceCreams()),
  };
};
export default connect (mapToState,mapToDispatch) (icecreamContainer);
