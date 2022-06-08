import { inputActionType } from "./enum";
import { InputData } from "./model";

export interface inputAction {
  type: inputActionType;
  payload: string;
}

export const inputReducer = (state: InputData, action: inputAction) => {
  const { type, payload } = action;

  switch (type) {
    case inputActionType.NAME:
      return { ...state, name: payload };
    case inputActionType.EMAIL:
      return { ...state, email: payload };
    case inputActionType.PHONE:
      return { ...state, phone: payload };
    case inputActionType.GENDER:
      return { ...state, gender: payload };
    case inputActionType.NOTES:
      return { ...state, notes: payload };
    default:
      throw new Error("Invalid action type");
  }
};
