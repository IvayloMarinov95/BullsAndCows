import React, { Component, ChangeEvent } from "react";
import { connect } from "react-redux";
import { ActionTypes } from "./actions";

type MapStateToProps = ReturnType<typeof MapStateToProps>;
type mapDispatch = ReturnType<typeof mapDispatch>;

type Props = MapStateToProps & mapDispatch;

class NewGame extends Component<Props> {
  random4DigitNumberNotStartingWithZero = () => {
    var digits = "123456789".split(""),
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

  shuffle = (o: any) => {
    for (
      var j, x, i = o.length;
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

const mapDispatch = (dispatch: any) => ({
  generateNumber: (data: any) =>
    dispatch({ type: ActionTypes.GENERATE_NUMBER, payload: data })
});

const MapStateToProps = (state: any) => ({
  generatedNumber: state.generatedNumber
});

export default connect<MapStateToProps, mapDispatch>(
  MapStateToProps,
  mapDispatch
)(NewGame);
