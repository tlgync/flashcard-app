import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { AppDispatch, AppThunk } from '../store';
import { Service } from '../services';
import { ICheck, IRegister, IRegisterResponse } from '../Types/Auth';

export type UsersState = {
    loading: boolean;
    hasErrors: boolean;
    data: IRegisterResponse[];
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
const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    startLoading: state => {
      state.loading = true;
    },

    // action.payload dedigimiz donen data
    onRegister: (state, action: PayloadAction<IRegisterResponse[]>) => {
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
  onRegister,
} = registerSlice.actions;

// export user selector to get the slice in any component
export const registerSelector = (state: RootState) => state.register;
// export The reducer
const registerReducer = registerSlice.reducer;
export default registerReducer;
// Actions
export const fetchRegister = (data: IRegister): AppThunk => async (dispatch: AppDispatch) => {
  Service.User.Register(data).then(res => {
    dispatch(startLoading());
    dispatch(onRegister(res));
  });
};
