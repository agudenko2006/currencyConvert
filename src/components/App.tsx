import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { CurrencyInput } from "./CurrencyInput";
import { getKnownCurrencies } from "../logic/logic";
import { Options } from "./Options";
import {
  appState,
  currAUpdated,
  currBUpdated,
  optionFastChanged,
  optionPremiumChanged,
  valAUpdated,
  valBUpdated,
} from "../stateManager/index";

let currencies = getKnownCurrencies();

function App() {
  const dispatch = useDispatch();

  const currA = useSelector((state: appState) => state.currencyA);
  const currB = useSelector((state: appState) => state.currencyB);
  const valA = useSelector((state: appState) => state.valA);
  const valB = useSelector((state: appState) => state.valB);

  return (
    <div className="wrapper">
      <div className="topbar">
        <CurrencyInput
          allCurrencies={currencies}
          selectedCurrency={currA}
          value={valA}
          onCurrencyChange={(val: string) => dispatch(currAUpdated(val))}
          onValueChange={(val: number) => dispatch(valAUpdated(val))}
        ></CurrencyInput>

        <span>-&gt;</span>

        <CurrencyInput
          allCurrencies={currencies}
          selectedCurrency={currB}
          value={valB}
          onCurrencyChange={(val: string) => dispatch(currBUpdated(val))}
          onValueChange={(val: number) => dispatch(valBUpdated(val))}
        ></CurrencyInput>
      </div>
      <Options
        onPremiumChange={(val: boolean) => dispatch(optionPremiumChanged(val))}
        onFastChange={(val: boolean) => dispatch(optionFastChanged(val))}
      ></Options>
    </div>
  );
}

export default App;
