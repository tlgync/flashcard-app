import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { AppDispatch, AppThunk } from '../store';
import { Service } from '../services';
import { IAuth, ICheck, ILogin } from '../Types/Auth';

export type UsersState = {
    loading: boolean;
    hasErrors: boolean;
    data: ILogin[];
};

export type ProviderState = {
  provider: ICheck
}
//
export const initialState: UsersState = {
  loading: false,
  hasErrors: false,
  data: [],
};
// A slice
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    startLoading: state => {
      state.loading = true;
    },

    // action.payload dedigimiz donen data
    onLogin: (state, action: PayloadAction<ILogin[]>) => {
      state.data = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUsersFailure: state => {
      state.loading = false;
      // handling Errors
      state.hasErrors = true;
    },
  },
});

// Actions generated from the slice
const {
  startLoading,
  // getUsersFailure,
  onLogin,
} = loginSlice.actions;

// export user selector to get the slice in any component
export const loginSelector = (state: RootState) => state.login;
// export The reducer
const loginReducer = loginSlice.reducer;
export default loginReducer;
// Actions
export const fetchLogin = (data: IAuth): AppThunk => async (dispatch: AppDispatch) => {
  Service.User.Login(data).then(res => {
    dispatch(startLoading());
    dispatch(onLogin(res));
    localStorage.setItem('user', JSON.stringify(res));
  });
};
