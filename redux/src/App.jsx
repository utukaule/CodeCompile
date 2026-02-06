import { useDispatch, useSelector } from "react-redux";
import { increment, decreament  } from "./features/Counter/CounterSlice";
const App = () => {
  const {value} = useSelector((s)=>s.counter)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {value}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decreament())}>-</button>
    </div>
  );
};

export default App;
