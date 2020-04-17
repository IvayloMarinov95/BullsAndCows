import React, { Component } from "react";
import { connect } from "react-redux";

type MapProps = ReturnType<typeof MapStateToProps>;

type Props = MapProps;

class TryList extends Component<Props> {
  render() {
    console.log(this.props);
    return (
      <tbody>
        {this.props.tries
          ? this.props.tries.map((t: any, i: number) => {
              return (
                <tr className="Button" key={i}>
                  <td>{this.props.tries.length - i}</td>
                  <td>{t.guess}</td>
                  <td>
                    <img src="./bull-face-frontal-outline-4.png" alt="" />
                    {t.bulls}
                    <img src="./cow.png" alt="" />
                    {t.cows}
                  </td>
                </tr>
              );
            })
          : null}
      </tbody>
    );
  }
}

const MapStateToProps = (state: any) => ({
  tries: state.tries,
});

export default connect<MapProps>(MapStateToProps)(TryList);
