import React, { Component, ChangeEvent, FormEvent } from "react";
import { connect } from "react-redux";
import { guessNumber, addTry } from "./actions";

type MapStateToProps = ReturnType<typeof MapStateToProps>;
type MapDispatch = ReturnType<typeof MapDispatch>;

type Props = MapStateToProps & MapDispatch;

interface State {
  disabled: boolean;
}

class AddTry extends Component<Props, State> {
  state = {
    disabled: false,
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const attemptNumber = e.target.value;
    this.props.guessNumber(attemptNumber);
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const random = this.props.generatedNumber.toString();
    const splittedRandom = random.split("");
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
    if (guessed !== "" && guessed.length === 4) {
      newTry.unshift({ guess: guessed, cows: totalCows, bulls: totalBulls });
    } else {
      alert("Input must be 4 characters long!");
    }

    if (totalBulls !== 4) {
      this.props.addTry(newTry);
    } else {
      this.props.addTry(newTry);
      this.setState({ disabled: true });
      alert("Congratulations! -> " + guessed);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Enter number:</p>
        <input
          type="text"
          placeholder="****"
          onChange={this.handleChange}
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
  guessedNumber: state.guessedNumber,
});

const MapDispatch = (dispatch: any) => ({
  guessNumber: (data: string) => dispatch(guessNumber(data)),
  addTry: (data: Array<string>) => dispatch(addTry(data)),
});

export default connect<MapStateToProps, MapDispatch>(
  MapStateToProps,
  MapDispatch
)(AddTry);
