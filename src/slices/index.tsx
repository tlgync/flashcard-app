import { combineReducers } from '@reduxjs/toolkit';
import flipCardReducer from './FlipCardSlice';
import loginReducer from './LoginSlice';

const rootReducer = combineReducers({
  login: loginReducer,
  flippedCard: flipCardReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
