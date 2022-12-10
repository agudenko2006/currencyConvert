import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { CurrencyInput } from './CurrencyInput'
import { getKnownCurrencies } from './logic'
import { Options } from './Options';
import { appState, setCurrA, setCurrB, setValA, setValB } from './store';

let currencies = getKnownCurrencies();

function App() {
    const dispatch = useDispatch();

    const currA = useSelector((state: appState) => state.currencyA)
    const currB = useSelector((state: appState) => state.currencyB)
    const valA = useSelector((state: appState) => state.valA)
    const valB = useSelector((state: appState) => state.valB)

    return (
        <div className="wrapper">
            <div className="topbar">
                <CurrencyInput
                    allCurrencies={currencies}
                    selectedCurrency={currA}
                    value={valA}

                    onCurrencyChange={(val: string) => dispatch(setCurrA(val))}
                    onValueChange={(val: number) => dispatch(setValA(val))}
                ></CurrencyInput>

                <span>-&gt;</span>

                <CurrencyInput
                    allCurrencies={currencies}
                    selectedCurrency={currB}
                    value={valB}

                    onCurrencyChange={(val: string) => dispatch(setCurrB(val))}
                    onValueChange={(val: number) => dispatch(setValB(val))}
                ></CurrencyInput>
            </div>
            {/* <Options
                onPremiumChange={handlePremiumChange}
                onFastChange={handleFastChange}
            ></Options> */}
        </div>
    )
}

export default App
