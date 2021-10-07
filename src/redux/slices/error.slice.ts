import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './error.types';

export const initialState: InitialState = {
  characterNameError: '',
};

export const error = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setCharacterNameError: (state, action) => {
      state.characterNameError = action.payload;
    },
    // setFilteredCharactersFromApi: (state, action) => {
    //   state.filteredCharactersFromApi = action.payload;
    // },
  },
});

export const { setCharacterNameError } = error.actions;

export default error.reducer;
