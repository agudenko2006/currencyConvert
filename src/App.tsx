import { useState } from 'react'
import './App.css'
import { CurrencyInput } from './CurrencyInput'
import { calculateExchange, getKnownCurrencies, IOptions } from './logic'
import { Options } from './Options';

let currencies = getKnownCurrencies();

function App() {
  const [valA, setValA] = useState(5)
  const [currA, setCurrA] = useState(currencies[0])
  const [valB, setValB] = useState(0)
  const [currB, setCurrB] = useState(currencies[1])
  const [premium, setPremium] = useState(false)
  const [fast, setFast] = useState(false)

  const updateB = (val: number) => setValB(calculateExchange(currA, currB, val, {premium, fast}))
  const updateA = (val: number) => setValA(calculateExchange(currB, currA, val, {premium, fast}))
  const updateOpt = (opt: IOptions) => setValB(calculateExchange(currA, currB, valA, opt)) 

  function handleCurrAChange(val: string) {
    setCurrA(val)
    updateB(valA)
  }
  function handleCurrBChange(val: string) {
    setCurrB(val)
    updateA(valB)
  }
  function handleValAChange(val: number) {
    setValA(val)
    updateB(val)
  }
  function handleValBChange(val: number) {
    setValB(val)
    updateA(val)
  }

  function handlePremiumChange(val: boolean) {
    setPremium(val)
    updateOpt({premium: val, fast})
  }
  function handleFastChange(val: boolean) {
    setFast(val)
    updateOpt({premium, fast: val})
  }

  return (
    <div className="wrapper">
      <div className="topbar">
        <CurrencyInput
          allCurrencies={currencies}
          selectedCurrency={currA}
          value={valA}
          
          onCurrencyChange={handleCurrAChange}
          onValueChange={handleValAChange}
        ></CurrencyInput>

        <span>-&gt;</span>

        <CurrencyInput
          allCurrencies={currencies}
          selectedCurrency={currB}
          value={valB}
          
          onCurrencyChange={handleCurrBChange}
          onValueChange={handleValBChange}
        ></CurrencyInput>
      </div>
      <Options
        onPremiumChange={handlePremiumChange}
        onFastChange={handleFastChange}
      ></Options>
    </div>
  )
}

export default App
