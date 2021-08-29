import styles from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import getCount from "./store/Actions/countAction";
//import Header from "./components/Header/Header";
//import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.CountReducer);
  console.log(state);
  return (
    <div className="App">
      <Layout />
      <h1 className={styles.title}>React Project - State: {state}</h1>
      <button onClick={() => dispatch(getCount())}>GetState <i className="las la-edit"></i></button>
    </div>
  );
}

export default App;
