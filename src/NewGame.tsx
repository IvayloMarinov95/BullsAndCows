import React, { Component } from "react";
import { connect } from "react-redux";
import { generateNumber } from "./actions";

type MapStateToProps = ReturnType<typeof MapStateToProps>;
type MapDispatch = ReturnType<typeof MapDispatch>;

type Props = MapStateToProps & MapDispatch;

class NewGame extends Component<Props> {
  random4DigitNumberNotStartingWithZero = () => {
    const digits = "123456789".split(""),
      first = this.shuffle(digits).pop();
    // Add "0" to the array
    digits.push("0");
    return parseInt(
      first +
        this.shuffle(digits)
          .join("")
          .substring(0, 3),
      10
    );
  };

  shuffle = (o: Array<string>) => {
    for (
      let j, x, i = o.length;
      i;
      j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  };

  componentDidMount() {
    const randomNumber = this.random4DigitNumberNotStartingWithZero();
    this.props.generateNumber(randomNumber);
    console.log(this.props.generateNumber(randomNumber));
  }

  render() {
    return (
      <section>
        <button
          type="submit"
          onClick={() => window.location.reload()}
          className="Button"
        >
          New Game
        </button>
        <p>{this.props.generatedNumber}</p>
      </section>
    );
  }
}

const MapDispatch = (dispatch: any) => ({
  generateNumber: (data: number) => dispatch(generateNumber(data)),
});

const MapStateToProps = (state: any) => ({
  generatedNumber: state.generatedNumber,
});

export default connect<MapStateToProps, MapDispatch>(
  MapStateToProps,
  MapDispatch
)(NewGame);
