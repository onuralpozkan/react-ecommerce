import styles from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import getCount from "./store/Actions/countAction";
//import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
//import Layout from "./components/Layout/Layout";
import Cart from "./pages/Cart"
function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.CountReducer);
  console.log(state);
  return (
    <div className="App">
      <Switch>
        <Route path="/cart"><Cart /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
      <h1 className={styles.title}>React Project - State: {state}</h1>
      <button onClick={() => dispatch(getCount())}>GetState <i className="las la-edit"></i></button>
    </div>
  );
}

export default App;
