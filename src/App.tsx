import { useState } from 'react'
import './App.css'
import { CurrencyInput } from './CurrencyInput'

let currencies = ["RUB", "USD", "BTC"]

function App() {
  const [valA, setValA] = useState(5)
  const [currA, setCurrA] = useState("USD")
  const [valB, setValB] = useState(0)
  const [currB, setCurrB] = useState("BTC")

  function swap() {
    let valTmp = valA
    let currTmp = currA

    setValA(valB)
    setValB(valTmp)

    setCurrA(currB)
    setCurrB(currTmp)
  }

  return (
    <div className="wrapper">
      <div className="topbar">
        <CurrencyInput
          allCurrencies={currencies}
          selectedCurrency={currA}
          value={valA}
          
          onCurrencyChange={setCurrA}
          onValueChange={setValA}
        ></CurrencyInput>

        <input type="button" value="<->" className="swap-btn" title="click to swap" onClick={swap} />

        <CurrencyInput
          allCurrencies={currencies}
          selectedCurrency={currB}
          value={valB}
          
          onCurrencyChange={setCurrB}
          onValueChange={setValB}
        ></CurrencyInput>
      </div>
    </div>
  )
}

export default App
