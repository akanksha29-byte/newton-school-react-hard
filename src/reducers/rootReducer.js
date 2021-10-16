import { combineReducers } from "redux";
import { albumReducer } from "./albumReducer";

export const rootReducer = combineReducers({
  album: albumReducer
});
