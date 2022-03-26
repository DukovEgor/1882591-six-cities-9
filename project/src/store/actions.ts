import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offers } from '../types/offer';
import { UserData } from '../types/user-data';
import { AppRoutes, AuthorizationStatus } from '../utils/const';

export const setCity = createAction<City>('setCity');
export const setSortType = createAction<string>('setFilter');
export const changePinIcon = createAction<{ isHovered: boolean, id: number }>('changePinIcon');
export const loadOffers = createAction<Offers>('loadOffers');
export const setUserData = createAction<UserData>('setUserData');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const redirectToRoute = createAction<AppRoutes>('redirectToRoute');
