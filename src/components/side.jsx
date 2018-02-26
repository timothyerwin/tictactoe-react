import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from "react-redux";

import { newGame } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    newGame: side => dispatch(newGame(side))
  };
};

const Button = styled.div `
  display: inline-block;
  padding: 20px 50px;
  font-size: 25px;
  font-weight: bold;
  margin: 5px;
  background: white;
  color: #09c;
  box-shadow: 0 0 7px rgba(0,0,0,.3);
  cursor: pointer;
`;

class ConnectedSide extends Component {
  chooseSide(side) {
    this.props.newGame(side);
  }

  render() {
    return (<div>
      <Button onClick={this.chooseSide.bind(this, 'X')}>X</Button>
      <Button onClick={this.chooseSide.bind(this, 'O')}>O</Button>
    </div>);
  }
};

const Side = connect(null, mapDispatchToProps)(ConnectedSide);

export default Side;
