import React, { Component, ChangeEvent } from "react";
import { connect } from "react-redux";
import { ActionTypes } from "./actions";

type MapStateToProps = ReturnType<typeof MapStateToProps>;
type MapDispatch = ReturnType<typeof MapDispatch>;

type Props = MapStateToProps & MapDispatch;

class AddTry extends Component<Props> {
  state = {
    disabled: false
  };

  changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const attemptNumber = e.target.value;
    this.props.guessNumber(attemptNumber);
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    const random = this.props.generatedNumber.toString();
    console.log(typeof random);
    const splittedRandom = random.split("");
    console.log(splittedRandom);
    const guessed = this.props.guessedNumber;
    const splittedGuessed = guessed.split("");

    let totalBulls = 0;
    let totalCows = 0;
    for (let i = 0; i < 4; i++) {
      if (splittedRandom[i] === splittedGuessed[i]) {
        totalBulls++;
      } else if (random.includes(splittedGuessed[i])) {
        totalCows++;
      }
    }
    const newTry = [...this.props.tries];
    if (guessed !== "")
      newTry.unshift({ guess: guessed, cows: totalCows, bulls: totalBulls });

    if (totalBulls !== 4) {
      this.props.addTry(newTry);
    } else {
      this.props.addTry(newTry);
      this.setState({ disabled: true });
      alert("Congratulations!");
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p>Enter number:</p>
        <input
          type="text"
          placeholder="****"
          onChange={this.changeHandler}
          maxLength={4}
          disabled={this.state.disabled}
        />
        <button type="submit" className="Button" disabled={this.state.disabled}>
          Try
        </button>
      </form>
    );
  }
}

const MapStateToProps = (state: any) => ({
  generatedNumber: state.generatedNumber,
  tries: state.tries,
  guessedNumber: state.guessedNumber
});

const MapDispatch = (dispatch: any) => ({
  guessNumber: (data: any) =>
    dispatch({
      type: ActionTypes.GUESS_NUMBER,
      payload: data
    }),
  addTry: (data: any) =>
    dispatch({
      type: ActionTypes.ADD_TRY,
      payload: data
    })
});

export default connect<MapStateToProps, MapDispatch>(
  MapStateToProps,
  MapDispatch
)(AddTry);
