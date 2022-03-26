import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { Offers } from '../types/offer';
import { UserData } from '../types/user-data';
import { APIRoute, AppRoutes, AuthorizationStatus } from '../utils/const';
import { loadOffers, redirectToRoute, requireAuthorization, setUserData } from './actions';

export const fetchHotelsAction = createAsyncThunk(
  'data/fetchHotels',
  async () => {
    try {

      const { data } = await api.get<Offers>(APIRoute.Hotels);
      store.dispatch(loadOffers(data));

    } catch (error) {

      errorHandle(error);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    try {

      const { data } = await api.get<UserData>(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(setUserData(data));

    } catch (error) {

      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {

      const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(data.token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
      store.dispatch(redirectToRoute(AppRoutes.Root));
      store.dispatch(setUserData(data));

    } catch (error) {

      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {

      await api.delete(APIRoute.Logout);
      dropToken();
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));

    } catch (error) {

      errorHandle(error);
    }
  },
);
