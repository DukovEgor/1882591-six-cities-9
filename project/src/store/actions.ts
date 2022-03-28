import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer, Offers } from '../types/offer';
import { IReview } from '../types/review';
import { UserData } from '../types/user-data';
import { AppRoutes, AuthorizationStatus } from '../utils/const';

export const setCity = createAction<City>('setCity');
export const setSortType = createAction<string>('setFilter');
export const changePinIcon = createAction<{ isHovered: boolean, id: number }>('changePinIcon');
export const loadOffers = createAction<Offers>('loadOffers');
export const loadOffer = createAction<Offer>('loadOffer');
export const loadReviews = createAction<IReview[]>('loadReviews');
export const loadNearby = createAction<Offers>('loadNearby');
export const setUserData = createAction<UserData>('setUserData');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoutes>('redirectToRoute');
