import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from "react-redux";

import { newGame } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    newGame: side => dispatch(newGame(side))
  };
};

const H1 = styled.h1 `
  color: #333;
  font-size: 50px;
  font-weight: bold;
  margin: 50px 0;
  text-transform: uppercase;
`;

const Button = styled.div `
  display: inline-block;
  padding: 20px 150px;
  font-size: 25px;
  font-weight: bold;
  margin: 5px;
  background: #0f9c36;
  color: #fff;
  box-shadow: 0 0 7px rgba(0,0,0,.3);
  cursor: pointer;
`;

class ConnectedResult extends Component {
  newGame(side) {
    this.props.newGame(side);
  }

  render() {
    let text = '';

    const { value } = this.props;

    if(value.win) {
      if(value.win === value.match.players.human.side) {
        text = 'You won!';
      } else {
        text = 'The Computer won. Try again.'
      }
    } else if(value.draw) {
      text = 'The game was a draw. Try again.'
    }

    return (<div>
      <H1>{text}</H1>

      <br />
      <Button onClick={this.newGame.bind(this, 'X')}>New Game</Button>
    </div>);
  }
};

const Result = connect(null, mapDispatchToProps)(ConnectedResult);

export default Result;
