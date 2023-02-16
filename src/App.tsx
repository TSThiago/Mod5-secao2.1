import { useState, useEffect } from 'react'
import './App.css'
import { addMoneyAction, removeMoneyAction } from './store/wallet/action'
import store from './store'
import { useSelector } from 'react-redux'

function App() {
  const walletValue  = useSelector((state : iState) => state.wallet.total)

  const addMoney = () => {
    store.dispatch(addMoneyAction(10))
  }

  const removeMoney = () => {
    store.dispatch(removeMoneyAction(10))
  }

  return (
    <div className="App">
      <div>
        <span>R${walletValue.toFixed(2)}</span>
      </div>
      <div>
        <button onClick={addMoney}>Depositar R$10.00</button>
        <button onClick={removeMoney}>Sacar R$10.00</button>
      </div>
    </div>
  )
}

export default App
