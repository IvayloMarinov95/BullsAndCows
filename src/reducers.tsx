import { ActionTypes } from "./actions";
import { AnyAction } from "redux";

const initialState = {
  generatedNumber: "",
  tries: [],
  guessedNumber: ""
};
export default function(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ActionTypes.ADD_TRY:
      return { ...state, tries: action.payload };
    case ActionTypes.GENERATE_NUMBER:
      return { ...state, generatedNumber: action.payload };
    case ActionTypes.GUESS_NUMBER:
      return { ...state, guessedNumber: action.payload };
  }
  return state;
}
