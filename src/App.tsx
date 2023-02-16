import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addMoney = () => {
    setCount(count + 10)
  }

  const removeMoney = () => {
    setCount(count - 10)
  }

  return (
    <div className="App">
      <div>
        <span>R${count.toFixed(2)}</span>
      </div>
      <div>
        <button onClick={addMoney}>Depositar R$10.00</button>
        <button onClick={removeMoney}>Sacar R$10.00</button>
      </div>
    </div>
  )
}

export default App
