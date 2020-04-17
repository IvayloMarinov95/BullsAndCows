export enum ActionTypes {
  GENERATE_NUMBER = "GENERATE_NUMBER",
  ADD_TRY = "ADD_TRY",
  GUESS_NUMBER = "GUESS_NUMBER",
}

export const addTry = (attempt: Array<string>) => ({
  type: ActionTypes.ADD_TRY,
  payload: attempt,
});

export const generateNumber = (data: number) => ({
  type: ActionTypes.GENERATE_NUMBER,
  payload: data,
});

export const guessNumber = (data: string) => ({
  type: ActionTypes.GUESS_NUMBER,
  payload: data,
});
