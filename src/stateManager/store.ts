import { AnyAction, applyMiddleware, createStore, Middleware } from "redux";
import { valARecalculated, valBRecalculated } from "./actionGenerators";
import { BuyCurrency, SellCurrency } from "../logic/logic";
import { composeWithDevTools } from "redux-devtools-extension";

enum LastChangedField {
  A,
  B,
}

export interface appState {
  currencyA: string;
  currencyB: string;
  valA: number;
  valB: number;
  lastChanged: LastChangedField;
  optionFast: boolean;
  optionPremium: boolean;
}

const defaultState: appState = {
  currencyA: "USD",
  currencyB: "BTC",
  valA: 0,
  valB: 0,
  lastChanged: LastChangedField.A,
  optionFast: false,
  optionPremium: false,
};

function reducer(state: appState = defaultState, action: AnyAction) {
  switch (action.type) {
    case "CURR_A_UPDATED":
      return {
        ...state,
        currencyA: action.payload,
      };

    case "CURR_B_UPDATED":
      return {
        ...state,
        currencyB: action.payload,
      };

    case "VAL_A_UPDATED":
      return {
        ...state,
        valA: action.payload,
        lastChanged: LastChangedField.A,
      };

    case "VAL_B_UPDATED":
      return {
        ...state,
        valB: action.payload,
        lastChanged: LastChangedField.B,
      };
    case "OPTION_FAST_CHANGED":
      return {
        ...state,
        optionFast: action.payload,
      };
    case "OPTION_PREMIUM_CHANGED":
      return {
        ...state,
        optionPremium: action.payload,
      };

    case "VAL_A_RECALCULATED":
      return {
        ...state,
        valA: action.payload,
      };

    case "VAL_B_RECALCULATED":
      return {
        ...state,
        valB: action.payload,
      };

    default:
      return state;
  }
}

const calculate: Middleware = ({ getState }) => {
  return (next) => (action) => {
    next(action);
    const state = getState();
    let val;

    if (state.lastChanged === LastChangedField.A) {
      val = SellCurrency(state.currencyA, state.currencyB, state.valA);
      return next(valBRecalculated(val));
    }
    val = BuyCurrency(state.currencyA, state.currencyB, state.valB);
    return next(valARecalculated(val));
  };
};

export const store = createStore(
  reducer,
  defaultState,
  composeWithDevTools(applyMiddleware(calculate))
);
