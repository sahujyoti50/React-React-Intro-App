import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import store from "./Components/redux/store";
import { HookCakeConatainer } from "./Components/HookCakeContainer";
import IceCreamcontainer from "./Components/iceCreamcontainer";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/itemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <HookCakeConatainer />
        <IceCreamcontainer />
        <CakeContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
