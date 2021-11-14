import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { AppDispatch, AppThunk } from '../store';

export type FlipCardState = {
    isFlipped: boolean
    isKnow: boolean
    index: number
    isFavor: boolean
};

//
export const initialState: FlipCardState = {
  isFlipped: true,
  isKnow: false,
  index: 0,
  isFavor: false,
};
// A slice
const flipCardSlice = createSlice({
  name: 'flippedCard',
  initialState,
  reducers: {

    incrementIndex: state => {
      state.index += 1;
      state.isFlipped = true;
    },
    decrementIndex: state => {
      state.index -= 1;
      state.isFlipped = true;
    },
    changeFlipped: state => {
      state.isFlipped = !state.isFlipped;
    },
    changeIsKnow: state => {
      state.isKnow = !state.isKnow;
    },
    changeIsFavor: state => {
      state.isFavor = !state.isFavor;
    },
  },
});

// Actions generated from the slice
const {
  incrementIndex,
  decrementIndex,
  changeFlipped,
  changeIsFavor,
  changeIsKnow,
} = flipCardSlice.actions;

// export user selector to get the slice in any component
export const flipCardSelector = (state: RootState) => state.flippedCard;
// export The reducer
const flipCardReducer = flipCardSlice.reducer;
export default flipCardReducer;
// Actions
export const changeIndex = (type: number): AppThunk => async (dispatch: AppDispatch) => {
  if (type === 1) {
    dispatch(incrementIndex());
  } else if (type === 0) {
    dispatch(decrementIndex());
  } else {
    console.log('Nope');
  }
};

export const changeFlip = () => (dispatch: AppDispatch) => {
  console.log('HELLO');
  dispatch(changeFlipped());
};
export const changeFavor = () => (dispatch: AppDispatch) => {
  dispatch(changeIsFavor());
};
export const changeKnow = () => (dispatch: AppDispatch) => {
  dispatch(changeIsKnow());
};
export const changeFav = () => (dispatch: AppDispatch) => {
  dispatch(changeIsFavor());
};
