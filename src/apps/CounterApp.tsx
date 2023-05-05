import {useDispatch, useSelector} from 'react-redux';

export const CounterApp = ({counterSlice, selector}: any) => {
  const count:any = useSelector(selector)
  const dispatch = useDispatch();
  console.log('Counter', counterSlice.name);
  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(counterSlice.actions.increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(counterSlice.actions.decrement())}
      >
        Decrement
      </button>
    </div>
  );
}
