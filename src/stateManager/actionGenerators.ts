import { AnyAction } from "redux";

// from UI
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

export function optionFastChanged(val: boolean): AnyAction {
  return {
    type: "OPTION_FAST_CHANGED",
    payload: val,
  };
}

export function optionPremiumChanged(val: boolean): AnyAction {
  return {
    type: "OPTION_PREMIUM_CHANGED",
    payload: val,
  };
}

// from logic
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
