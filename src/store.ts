import { AnyAction, applyMiddleware, createStore, Middleware } from "redux";
import { BuyCurrency, SellCurrency } from "./logic";

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
}

const defaultState: appState = {
  currencyA: "USD",
  currencyB: "BTC",
  valA: 0,
  valB: 0,
  lastChanged: 0,
};

export function currAUpdated(val: string): AnyAction {
  return {
    type: "CURR_A_UPDATED",
    payload: val,
  };
}

export function currBUpdated(val: string): AnyAction {
  return {
    type: "CURR_B_UPDATED",
    payload: val,
  };
}

export function valAUpdated(val: number): AnyAction {
  return {
    type: "VAL_A_UPDATED",
    payload: val,
  };
}

export function valBUpdated(val: number): AnyAction {
  return {
    type: "VAL_B_UPDATED",
    payload: val,
  };
}

export function valARecalculated(val: number): AnyAction {
  return {
    type: "VAL_A_RECALCULATED",
    payload: val,
  };
}

export function valBRecalculated(val: number): AnyAction {
  return {
    type: "VAL_B_RECALCULATED",
    payload: val,
  };
}

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
        lastChanged: 0,
      };

    case "VAL_B_UPDATED":
      return {
        ...state,
        valB: action.payload,
        lastChanged: 1,
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

const calculate: Middleware = ({getState}) => {
  return (next) => (action) => {
    next(action);
    const state = getState();
    let val;

    if (state.lastChanged === 0) {
      val = SellCurrency(state.currencyA, state.currencyB, state.valA);
      return next(valBRecalculated(val));
    }
    val = BuyCurrency(state.currencyA, state.currencyB, state.valB);
    return next(valARecalculated(val));
  };
}

export const store = createStore(
  reducer,
  defaultState,
  applyMiddleware(calculate)
);
