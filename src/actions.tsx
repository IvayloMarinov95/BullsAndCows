export enum ActionTypes {
  GENERATE_NUMBER = "GENERATE_NUMBER",
  ADD_TRY = "ADD_TRY",
  GUESS_NUMBER = "GUESS_NUMBER"
}

export const addTry = (attempt: any) => ({
  type: ActionTypes.ADD_TRY,
  payload: attempt
});

export const generateNumber = (data: any) => ({
  type: ActionTypes.GENERATE_NUMBER,
  payload: data
});

export const guessNumber = (data: any) => ({
  type: ActionTypes.GUESS_NUMBER,
  payload: data
});
