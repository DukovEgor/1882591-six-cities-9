import { createSlice } from '@reduxjs/toolkit';
import { AppProcess } from '../types/state';
import { INITIAL_CITY, NameSpace } from '../utils/const';

const initialState: AppProcess = {
  city: INITIAL_CITY,
  isCardHovered: { isHovered: false, id: 0 },
  sortType: 'popular',
};

export const appProcess = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    changePinIcon: (state, action) => {
      state.isCardHovered = action.payload;
    },
  },
});

export const { changePinIcon, setSortType, setCity } = appProcess.actions;
