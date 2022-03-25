import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, INITIAL_CITY, INITIAL_OFFERS } from '../utils/const';
import { changePinIcon, loadOffers, requireAuthorization, setCity, setError, setSortType } from './actions';


const initialState = {
  city: INITIAL_CITY,
  offers: INITIAL_OFFERS,
  sortType: 'popular',
  isCardHovered: { isHovered: false, id: 0 },
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(changePinIcon, (state, action) => {
      state.isCardHovered = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

