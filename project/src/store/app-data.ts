import { createSlice } from '@reduxjs/toolkit';
import { AppData } from '../types/state';
import { INITIAL_FAVORITES, INITIAL_NEARBY, INITIAL_OFFER, INITIAL_OFFERS, INITIAL_REVIEWS, NameSpace } from '../utils/const';

const initialState: AppData = {
  offers: INITIAL_OFFERS,
  offer: INITIAL_OFFER,
  reviews: INITIAL_REVIEWS,
  nearby: INITIAL_NEARBY,
  favorites: INITIAL_FAVORITES,
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
    loadFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { loadOffers, loadOffer, loadReviews, uploadReview, loadNearby, loadFavorites } = appData.actions;
