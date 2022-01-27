import './App.css'
import Header from './Components/Header'
import Form from './Components/Form'
import Resultado from './Components/Resultado'
import { useState } from 'react'

function App() {
  const [total, setTotal] = useState('')
  const [porcentaje, setPorcentaje] = useState('')

  const calculate = (loan, months, interest) => {
    loan = parseFloat(loan)
    months = parseFloat(months)
    interest = parseFloat(interest)

    const grantTotal = loan * (1+interest/100) ** months
    const percentage = ((1+interest/100) ** months-1) * 100
    setTotal(grantTotal.toFixed())
    setPorcentaje(percentage.toFixed())
  }

  return (
    <main className="container" id="main">
      <Header />
      <Form calculate={calculate}/>
      <Resultado total={total} porcentaje={porcentaje} />
    </main>
  )
}

export default App
