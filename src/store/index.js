import { createStore } from "redux";
import TicTacToeReducer from '../reducers';

const store = createStore(TicTacToeReducer);

export { store };
