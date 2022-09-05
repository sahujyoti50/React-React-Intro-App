import { buyCake } from "./redux";
import { connect } from "react-redux";
import { useState } from "react";
const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <>
      <p>{props.numOfCake}</p>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="input"
      />
      <button onClick={() => props.buyCake(number)}>Buy Cake</button>
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
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapToState, mapToDispatch)(NewCakeContainer);
