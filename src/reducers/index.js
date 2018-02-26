import { NEW_GAME, MOVE, SHOW_RESULTS } from "../constants/actions";

import engine from 'tictactoe';

const { HumanVsComputerMatch }  = engine;

const getSquareState = squares => {
  const state = [];

  for(let y = 0; y < 3; y++) {
    for(let x = 0; x < 3; x++) {
      let v = squares[y][x];

      state.push({
        y,
        x,
        v
      });
    }
  };

  return state;
};

let match = new HumanVsComputerMatch('X', 'O');

const initialState = {
  match,
  squares: getSquareState(match.game.board),
};

const TicTacToeReducer = (state = initialState, action) => {

  switch (action.type) {
    case NEW_GAME:
      const side = action.payload;

      const match = new HumanVsComputerMatch(side, side === 'X' ? 'O': 'X');

      return {
        match,
        squares: getSquareState(match.game.board),
        draw: false,
        win: null,
        over: false,
        results: false,
      };
    case MOVE:
      const coords = action.payload;

      const { y, x } = coords;

      if(state.match.canMove && !state.match.game.over && state.match.turn === state.match.players.human) {
        state.match.human(y, x);
      }

      if(state.match.canMove && !state.match.game.over) {
        state.match.computer();
      }

      return {
        match: state.match,
        squares: getSquareState(state.match.game.board),
        draw: state.match.game.draw,
        win: state.match.game.win,
        over: state.match.game.over,
      };
    case SHOW_RESULTS:
      return {
        match: state.match,
        squares: getSquareState(state.match.game.board),
        draw: state.match.game.draw,
        win: state.match.game.win,
        over: state.match.game.over,
        results: true,
      };
    default:
      return state;
  }
};

export default TicTacToeReducer;
