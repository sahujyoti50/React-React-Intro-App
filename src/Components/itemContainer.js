import {connect} from "react-redux";
import { buyCake, buyIceCreams } from "./redux";
const ItemConianer = (props) => {
  return (
    <>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}> Buy Items</button>
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCake
    : state.iceCream.numOfIcecream;

  return {
    item: itemState,
  };
};

const mapDispatchtoProps=(dispatch,ownProps)=>{
const dispatchFunction=ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(buyIceCreams())
return{
    buyItem:dispatchFunction
}
}
export default connect(mapStateToProps,mapDispatchtoProps)(ItemConianer);
