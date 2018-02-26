import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

import { move } from "../actions";

const Div = styled.div `
  cursor: pointer;
  padding: 20px;
  font-size: 100px;
  background-color: #fff;
  width: 100px;
  height: 100px;
`;

const mapDispatchToProps = dispatch => {
  return {
    move: (y, x) => dispatch(move(y, x))
  };
};

class ConnectedSquare extends Component {
  click() {
    const { x, y, v } = this.props.value;

    if(v === ' ') {
      this.props.move(y, x);
    }
  }

  render() {
    return (<Div onClick={this.click.bind(this)}>{this.props.value.v || ' '}</Div>);
  }
};

const Square = connect(null, mapDispatchToProps)(ConnectedSquare);

export default Square;
