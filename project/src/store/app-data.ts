import { createSlice } from '@reduxjs/toolkit';
import { AppData } from '../types/state';
import { INITIAL_NEARBY, INITIAL_OFFERS, INITIAL_REVIEWS, NameSpace } from '../utils/const';

const initialState: AppData = {
  offers: INITIAL_OFFERS,
  offer: INITIAL_OFFERS[0],
  reviews: INITIAL_REVIEWS,
  nearby: INITIAL_NEARBY,
  isDataLoaded: false,
};

export const appData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    loadOffer: (state, action) => {
      // eslint-disable-next-line no-console
      console.log(`${action.payload  }from Reducer`);
      state.offer = action.payload;
    },
    loadReviews: (state, action) => {
      state.reviews = action.payload;
    },
    uploadReview: (state, action) => {
      state.reviews = action.payload;
    },
    loadNearby: (state, action) => {
      state.nearby = action.payload;
    },
  },
});

export const { loadOffers, loadOffer, loadReviews, uploadReview, loadNearby } = appData.actions;
