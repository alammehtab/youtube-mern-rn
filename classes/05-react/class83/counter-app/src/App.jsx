import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'
import './App.css'

function App() {
   const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1>{count}</h1>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  )
}

export default App