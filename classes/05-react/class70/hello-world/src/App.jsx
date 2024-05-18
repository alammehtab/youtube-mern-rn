import {useState} from 'react'
import './Style.css'

function App() {
  const [counter, setCounter] = useState(0)

  // storing styles in a variable
  const buttonsStyle = {
    padding:10,backgroundColor: 'black',color:'white'
  }

  // decrement handler
  function handleDecrement(){
    // no re-rendering, cz state isn't changing/updating
    // counter = counter-1

    if(counter > 0){
      setCounter(counter-1)
    }else{
      alert("Tasbeeh negative nahi hoti, tu bara negative ha!")
    }
    // alert("Counter decremented!")
  }

  // increment handler
  function handleIncrement(){
    // no re-rendering, cz state isn't changing/updating
    // counter = counter + 1
    setCounter(counter+1)
    // alert("Counter incremented!")
  }

  return (
    <>
      <h1 style={{color: 'crimson'}}>{counter}</h1>
      {/* {console.log(counter)} */}
      {/* using arrow function */}
      {/* <button onClick={()=>alert("Counter decremented!")}>Decrement</button> */}

      {/* repetive styling */}
      {/* <button onClick={handleDecrement}  style={{
    padding:10,backgroundColor: 'black',color:'white'
  }}>Decrement</button>
      <button onClick={handleIncrement} style={{
    padding:10,backgroundColor: 'black',color:'white'
  }}>Increment</button> */}

      {/* using helper function */}
      {/* styling using a variable, removing duplication */}
      <button onClick={handleDecrement}  style={buttonsStyle}>Decrement</button>
      <button onClick={handleIncrement} style={buttonsStyle}>Increment</button>
    </>
  )
}

export default App
