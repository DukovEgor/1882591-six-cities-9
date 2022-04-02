import { createAsyncThunk } from '@reduxjs/toolkit';
import { UseFormReset } from 'react-hook-form';
import { api, store } from '.';
import { errorHandle } from '../services/error-handle';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { Offer, Offers } from '../types/offer';
import { INewReview, IReview } from '../types/review';
import { UserData } from '../types/user-data';
import { APIRoute, AuthorizationStatus } from '../utils/const';
import { loadOffers, loadOffer, loadNearby, loadReviews, uploadReview, loadFavorites } from './app-data';
import { requireAuthorization, setUserData } from './user-process';

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

export const fetchHotelAction = createAsyncThunk(
  'data/fetchHotel',
  async (id: number) => {

    try {

      const { data } = await api.get<Offer>(`${APIRoute.Hotels}/${id}`);
      store.dispatch(loadOffer(data));

    } catch (error) {

      errorHandle(error);
    }
  },
);

export const fetchNearbyAction = createAsyncThunk(
  'data/fetchNearby',
  async (id: number) => {
    try {

      const { data } = await api.get<Offers>(`${APIRoute.Hotels}/${id}/nearby`);
      store.dispatch(loadNearby(data));

    } catch (error) {

      errorHandle(error);
    }
  },
);

export const fetchReviewsAction = createAsyncThunk(
  'data/fetchReviews',
  async (id: number) => {
    try {

      const { data } = await api.get<IReview[]>(`${APIRoute.Comments}/${id}`);
      store.dispatch(loadReviews(data));

    } catch (error) {

      errorHandle(error);
    }
  },
);

export const fetchNewReviewAction = createAsyncThunk(
  'data/fetchNewReview',
  async ({ id, comment, rating, reset, setIsDisabled }: { id: number, comment: string, rating: number, reset: UseFormReset<INewReview>, setIsDisabled: React.Dispatch<React.SetStateAction<boolean>> }) => {
    try {

      const { data } = await api.post<IReview[]>(`${APIRoute.Comments}/${id}`, { comment, rating });
      store.dispatch(uploadReview(data));
      reset();

    } catch (error) {

      errorHandle(error);

    } finally {

      setIsDisabled(false);
    }
  },
);

export const addToFavorite = createAsyncThunk(
  'data/addToFavorite',
  async ({ id, status }: { id: number, status: boolean }) => {
    try {

      const { DATA } = store.getState();

      const { data } = await api.post<Offer>(`${APIRoute.Favorite}/${id}/${Number(!status)}`);
      store.dispatch(loadFavorites(DATA.favorites.filter((offer) => offer.id !== data.id)));

    } catch (error) {

      errorHandle(error);
    }
  },
);

export const fetchFavorites = createAsyncThunk(
  'data/fetchFavorites',
  async () => {
    try {

      const { data } = await api.get<Offers>(APIRoute.Favorite);
      store.dispatch(loadFavorites(data));

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
