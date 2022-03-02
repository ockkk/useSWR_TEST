import { MovieParams } from '../api/getMovieList';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: MovieParams = {
  query : '',
  display: 10,
  country: undefined,
  genere: undefined,
  start: undefined,
  yearfrom: 1920,
  yearto: 2022,
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    changeQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    changeYearFrom: (state, action: PayloadAction<number>) => {
      state.yearfrom = action.payload;
    },
    changeYearTo: (state, action: PayloadAction<number>) => {
      state.yearto = action.payload;
    },
    changeDisplayCount: (state, action: PayloadAction<number>) => {
      state.display = action.payload;
      console.log(action.type)
    }
  }
});

export const { 
  changeQuery, 
  changeDisplayCount, 
  changeYearFrom, 
  changeYearTo 
} = movieSlice.actions;

export default movieSlice.reducer;
