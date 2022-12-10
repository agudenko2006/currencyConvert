import { AnyAction, applyMiddleware, createStore } from "redux";
import { BuyCurrency, SellCurrency } from "./logic";

export interface appState {
  currencyA: string;
  currencyB: string;
  valA: number;
  valB: number;
  lastChanged: number;
}

const defaultState: appState = {
  currencyA: "USD",
  currencyB: "BTC",
  valA: 0,
  valB: 0,
  lastChanged: 0,
};

export function setCurrA(val: string): AnyAction {
  return {
    type: "SET_CURR_A",
    payload: val,
  };
}

export function setCurrB(val: string): AnyAction {
  return {
    type: "SET_CURR_B",
    payload: val,
  };
}

export function setValA(val: number): AnyAction {
  return {
    type: "SET_VAL_A",
    payload: val,
  };
}

export function setValB(val: number): AnyAction {
  return {
    type: "SET_VAL_B",
    payload: val,
  };
}

function reducer(state: appState = defaultState, action: AnyAction) {
  // console.log(action)
  switch (action.type) {
    case "SET_CURR_A":
      return {
        ...state,
        currencyA: action.payload,
      };

    case "SET_CURR_B":
      return {
        ...state,
        currencyB: action.payload,
      };

    case "SET_VAL_A":
      return {
        ...state,
        valA: action.payload,
        lastChanged: 0,
      };

    case "SET_VAL_B":
      return {
        ...state,
        valB: action.payload,
        lastChanged: 1,
      };

    default:
      return state;
  }
}

function calculate({ getState }) {
  return (next) => (action) => {
    const returnValue = next(action);
    const state = getState();
    let val;

    if (state.lastChanged === 0) {
      val = SellCurrency(state.currencyA, state.currencyB, state.valA);
      return next(setValB(val));
    }
    val = BuyCurrency(state.currencyA, state.currencyB, state.valB);
    return next(setValA(val));
  };
}

export const store = createStore(
  reducer,
  defaultState,
  applyMiddleware(calculate)
);
