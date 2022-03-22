import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { INITIAL_CITY } from '../utils/const';
import { changePinIcon, getOffers, setCity, setSortType } from './actions';


const initialState = {
  city: INITIAL_CITY,
  offers: offers,
  sortType: 'popular',
  isCardHovered: { isHovered: false, id: 0 },
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(changePinIcon, (state, action) => {
      state.isCardHovered = action.payload;
    });
});

