//import styles from "./App.module.css";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart"
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
function App() {

  return (
    <div className="App" style={{position:'relative'}}>
      <Switch>
        <Route path="/product-detail/:productId"><ProductDetail /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/cart"><Cart /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
      {/* <h1 className={styles.title}>React Project - State: {state}</h1>
      <button onClick={() => dispatch(getCount())}>GetState <i className="las la-edit"></i></button> */}
    </div>
  );
}

export default App;
