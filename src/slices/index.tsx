import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import flipCardReducer from './FlipCardSlice';
import loginReducer from './LoginSlice';

const rootReducer = combineReducers({
  login: loginReducer,
  flippedCard: flipCardReducer,
  auth: authReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
