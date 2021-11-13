import { combineReducers } from '@reduxjs/toolkit';
import loginReducer from './LoginSlice';

const rootReducer = combineReducers({
  login: loginReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
