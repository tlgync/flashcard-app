import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { AppDispatch, AppThunk } from '../store';

interface MyObj {
  token: string | null;
}

export type AuthState = {
    authLoading: boolean;
    authhasErrors: boolean;
    authData: boolean
};
export type LocalState = {
    token: string | null;
};
//
export const initialState: AuthState = {
  authLoading: false,
  authhasErrors: false,
  authData: false,
};
// A slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading: state => {
      state.authLoading = true;
    },

    // action.payload dedigimiz donen data
    onCheck: (state, action: PayloadAction<boolean>) => {
      console.log(action, 'pay');
      state.authData = action.payload;
      state.authLoading = false;
      state.authhasErrors = false;
    },
    getUsersFailure: state => {
      state.authLoading = false;
      // handling Errors
      state.authhasErrors = true;
    },
  },
});

// Actions generated from the slice
const {
  startLoading,
  getUsersFailure,
  onCheck,
} = authSlice.actions;

// export user selector to get the slice in any component
export const checkSelector = (state: RootState) => state.auth;
// export The reducer
const authReducer = authSlice.reducer;
export default authReducer;
// Actions

export const fetchAuth = (): AppThunk => async (dispatch: AppDispatch) => {
  const user: MyObj = await JSON.parse(localStorage.getItem('user') || '');
  const response = await fetch(
    'http://localhost:5000/user/checkAuth', {
      method: 'GET',
      headers: user.token ? { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` } : { 'Content-Type': 'application/json' },
    },
  );
  try {
    dispatch(startLoading());
    const data: boolean = await response.json();
    dispatch(onCheck(data));
  } catch (error) {
    dispatch(getUsersFailure());
  }
};
