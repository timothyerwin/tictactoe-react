import { NEW_GAME, MOVE, SHOW_RESULTS } from "../constants/actions";

export const newGame = side => ({ type: NEW_GAME, payload: side });
export const move = (y, x) => ({ type: MOVE, payload: { y, x } });
export const showResults = () => ({ type: SHOW_RESULTS, payload: { } });
