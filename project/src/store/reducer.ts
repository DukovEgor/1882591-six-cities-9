import { createReducer } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer, Offers } from '../types/offer';
import { IReview } from '../types/review';
import { UserData } from '../types/user-data';
import { AuthorizationStatus, INITIAL_CITY, INITIAL_OFFERS, INITIAL_REVIEWS } from '../utils/const';
import { changePinIcon, loadNearby, loadOffer, loadOffers, loadReviews, requireAuthorization, setCity, setSortType, setUserData } from './actions';

interface initialStateProps {
  city: City,
  offers: Offers,
  offer: Offer,
  sortType: string,
  isCardHovered: { isHovered: boolean, id: number },
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  user: UserData,
  reviews: IReview[],
  nearby: Offers,
}
const initialState: initialStateProps = {
  city: INITIAL_CITY,
  offers: INITIAL_OFFERS,
  sortType: 'popular',
  isCardHovered: { isHovered: false, id: 0 },
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: {
    avatarUrl: '',
    email: '',
    id: 0,
    isPro: false,
    name: '',
    token: '',
  },
  offer: {
    bedrooms: 0,
    city: {
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0,
      },
      name: '',
    },
    description: '',
    goods: [],
    host: {
      avatarUrl: '',
      id: 0,
      isPro: false,
      name: '',
    },
    id: 0,
    images: [],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0,
    },
    maxAdults: 0,
    previewImage: '',
    price: 0,
    rating: 0,
    title: '',
    type: '',
  },
  reviews: INITIAL_REVIEWS,
  nearby: [],
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
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(loadNearby, (state, action) => {
      state.nearby = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setUserData, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(changePinIcon, (state, action) => {
      state.isCardHovered = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

