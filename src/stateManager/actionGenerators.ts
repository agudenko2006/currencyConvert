import { AnyAction } from "redux";

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
