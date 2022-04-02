import { store } from '../store';
import { AuthorizationStatus } from '../utils/const';
import { City } from './city';
import { Offers, Offer } from './offer';
import { IReview } from './review';
import { UserData } from './user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  user: UserData,
};

export type AppData = {
  offers: Offers,
  offer: Offer,
  reviews: IReview[],
  nearby: Offers,
  isDataLoaded: boolean,
};

export type AppProcess = {
  city: City,
  sortType: string,
  isCardHovered: { isHovered: boolean, id: number },
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
