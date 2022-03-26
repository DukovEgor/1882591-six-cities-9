import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { Offers } from '../types/offer';
import { UserData } from '../types/user-data';
import { APIRoute, AuthorizationStatus, ERROR_TIMEOUT } from '../utils/const';
import { loadOffers, requireAuthorization, setError } from './actions';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError('')),
      ERROR_TIMEOUT,
    );
  },
);

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

      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));

    } catch (error) {

      errorHandle(error);

    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    try {

      const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
      saveToken(token);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));

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
