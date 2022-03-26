import { createReducer } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offers } from '../types/offer';
import { UserData } from '../types/user-data';
import { AuthorizationStatus, INITIAL_CITY, INITIAL_OFFERS } from '../utils/const';
import { changePinIcon, loadOffers, requireAuthorization, setCity, setSortType, setUserData } from './actions';

interface initialStateProps {
  city: City,
  offers: Offers,
  sortType: string,
  isCardHovered: { isHovered: boolean, id: number },
  isDataLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  user: UserData;
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

