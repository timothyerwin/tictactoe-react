import React from 'react';
import { connect } from "react-redux";

import styled from 'styled-components';

import Square from './square';

const mapStateToProps = state => {
  if(state.match) {
    return {
      squares: state.squares
    };
  } else {
    return {
      squares: []
    }
  }
};

const Div = styled.div `
  margin-top: 50px;
  display: inline-grid;
  grid-gap: 10px;
  background: #09c;
  grid-template-columns: repeat(3, 1fr);
`;

const ConnectedBoard = ({ squares }) => (<Div>
      { squares.map(square => <Square key={`y=${square.y}-x=${square.x}`} value={square} />) }
    </Div>);

const Board = connect(mapStateToProps)(ConnectedBoard);

export default Board;
