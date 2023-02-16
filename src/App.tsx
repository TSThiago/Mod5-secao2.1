import { useEffect } from 'react'
import './App.css'
import { addMoneyAction, getInputValueAction, removeMoneyAction } from './store/wallet/action'
import store from './store'
import { useSelector } from 'react-redux'

function App() {

    useEffect(() => {
      handleChange
    }, [])
  
  const walletValue = useSelector((state: iState) => state.wallet)

  const addMoney = (value: number) => {
    store.dispatch(addMoneyAction(value))
  }

  const removeMoney = (value: number) => {
    store.dispatch(removeMoneyAction(value))
  }

  const handleChange = (event : React.FormEvent<HTMLInputElement>) => {
    store.dispatch(getInputValueAction(parseFloat(event.currentTarget.value)))
    console.log(event.currentTarget.value)

  }

  return (
    <div className="App">
      <div>
        <span>R${walletValue.total.toFixed(2)}</span>
      </div>
      <div>
        <input type="number" onChange={(event) => handleChange(event)} />
      </div>
      <div>
        <button onClick={() => addMoney(walletValue.value)}>Depositar</button>
        <button onClick={() => removeMoney(walletValue.value)}>Sacar</button>
      </div>
    </div>
  )
}

export default App
