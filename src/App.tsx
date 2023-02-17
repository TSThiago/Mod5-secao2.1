import { useEffect } from 'react'
import './App.css'
import { addMoneyAction, getInputValueAction, removeMoneyAction } from './store/wallet/action'
import store from './store'
import { useSelector } from 'react-redux'
import { changeThemeAction } from './store/theme/action'
import  styled  from 'styled-components'

const Background = styled.div `
  background-color: ${props => props.color}
`

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1vh 1vw;
  padding: 0.25em 1em;
`
const Input = styled.input`
  margin: 1vh auto;
  width: 30vw
`

const Span = styled.span`
  font-size: large
`

function App() {

    useEffect(() => {
      handleChange
      changeTheme
    }, [])
  
  const walletValue = useSelector((state: iState) => state.wallet)
  const currentTheme = useSelector((state : iState) => state.theme.currentTheme)

  const addMoney = (value: number) => {
    store.dispatch(addMoneyAction(value))
  }

  const removeMoney = (value: number) => {
    store.dispatch(removeMoneyAction(value))
  }

  const handleChange = (event : React.FormEvent<HTMLInputElement>) => {
    store.dispatch(getInputValueAction(parseFloat(event.currentTarget.value)))
  }

  const changeTheme = () => {
    if(currentTheme === "DARK"){
      store.dispatch(changeThemeAction("LIGHT"))
    }
    else {
      store.dispatch(changeThemeAction("DARK"))
    }
    console.log(currentTheme)
  }

    return (  
      <div color='#242424' className="App">
        <h2>Carteira Digital</h2>
        <div className='walletValue'>
          <Span>R${walletValue.total.toFixed(2)}</Span>
        </div>
        <div className='walletInput'>
          <Input type="number" onChange={(event) => handleChange(event)} />
        </div>
        <div className='walletButtons'>
          <Button onClick={() => addMoney(walletValue.value)}>Depositar</Button>
          <Button onClick={() => removeMoney(walletValue.value)}>Sacar</Button>
          <Button onClick={() => changeTheme()}>Mudar Tema</Button>
        </div>
      </div>
    )
}

export default App
