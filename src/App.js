import styles from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import getCount from "./store/Actions/countAction";
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.CountReducer);
  console.log(state);
  return (
    <div className="App">
      <h1 className={styles.title}>React Project - State: {state}</h1>
      <button onClick={()=> dispatch(getCount())}>GetState</button>
    </div>
  );
}

export default App;
