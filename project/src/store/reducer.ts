import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { INITIAL_CITY } from '../utils/const';
import { getOffers, setCity } from './actions';


const initialState = {
  city: INITIAL_CITY,
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    });
});

