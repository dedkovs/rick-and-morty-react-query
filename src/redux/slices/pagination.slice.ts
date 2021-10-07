import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './pagination.types';

export const initialState: InitialState = {
  pagesCount: 0,
  pageNumber: 1,
};

export const pagination = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPagesCount: (state, action) => {
      state.pagesCount = action.payload;
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setPagesCount, setPageNumber } = pagination.actions;

export default pagination.reducer;
