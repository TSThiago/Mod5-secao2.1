import { useEffect } from 'react'
import './App.css'
import { addMoneyAction, getInputValueAction, removeMoneyAction } from './store/wallet/action'
import store from './store'
import { useSelector } from 'react-redux'
import { changeThemeAction } from './store/theme/action'
import styled from 'styled-components'

const Background = styled.div`
  background-color: ${props => props.color};
  height: 100vh;
  width: 100vw;
  display: flex;
  place-content: center
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
  width: 30vw;
  background-color: transparent;
  color: ${props => props.color}
`

const Span = styled.span`
  font-size: large;
  color: ${props => props.color}
`

const Title = styled.h2`
  color: ${props => props.color}
`

function App() {

  useEffect(() => {
    handleChange
    changeTheme
  }, [])

  const walletValue = useSelector((state: iState) => state.wallet)
  const currentTheme = useSelector((state: iState) => state.theme.currentTheme)

  const addMoney = (value: number) => {
    store.dispatch(addMoneyAction(value))
  }

  const removeMoney = (value: number) => {
    store.dispatch(removeMoneyAction(value))
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    store.dispatch(getInputValueAction(parseFloat(event.currentTarget.value)))
  }

  const changeTheme = () => {
    if (currentTheme === "DARK") {
      store.dispatch(changeThemeAction("LIGHT"))
    }
    else {
      store.dispatch(changeThemeAction("DARK"))
    }
    console.log(currentTheme)
  }

  if (currentTheme === "DARK") {
    return (
      <Background color="#242424" className="App">
        <div className='wallet'>
          <Title color='white'>Carteira Digital</Title>
          <div className='walletValue'>
            <Span color='white'>R${walletValue.total.toFixed(2)}</Span>
          </div>
          <div className='walletInput'>
            <Input color='white' type="number" onChange={(event) => handleChange(event)} />
          </div>
          <div className='walletButtons'>
            <Button onClick={() => addMoney(walletValue.value)}>Depositar</Button>
            <Button onClick={() => removeMoney(walletValue.value)}>Sacar</Button>
            <Button onClick={() => changeTheme()}>Mudar Tema</Button>
          </div>
        </div>
      </Background>
    )
  } else {
    return (
      <Background color="white" className="App">
        <div className='wallet'>
          <Title color='black'>Carteira Digital</Title>
          <div className='walletValue'>
            <Span color='black'>R${walletValue.total.toFixed(2)}</Span>
          </div>
          <div className='walletInput'>
            <Input color='black' type="number" onChange={(event) => handleChange(event)} />
          </div>
          <div className='walletButtons'>
            <Button onClick={() => addMoney(walletValue.value)}>Depositar</Button>
            <Button onClick={() => removeMoney(walletValue.value)}>Sacar</Button>
            <Button onClick={() => changeTheme()}>Mudar Tema</Button>
          </div>
        </div>
      </Background>
    )
  }

}

export default App
