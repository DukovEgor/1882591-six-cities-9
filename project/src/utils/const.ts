import { City } from '../types/city';
import { Offers } from '../types/offer';


export enum AppRoutes {
  Root = '/',
  SignIn = '/sign-in',
  Room = '/room',
  Favorites = '/favorites',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export const widthPointsPerStep = 20;

export const ICONS_SIZES: [number, number] = [40, 40];
export const ANCHOR_SIZES: [number, number] = [20, 20];

export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13,
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13,
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13,
    },
  },
];

export const INITIAL_CITY = CITIES[0];
export const INITIAL_OFFERS: Offers = [];

export const sortingTypes = [
  {
    type: 'Popular',
    checked: true,
    sort(offers: Offers) {
      return offers;
    },
  },
  {
    type: 'Price: low to high',
    checked: false,
    sort(offers: Offers) {
      return offers.slice().sort((a, b) => a.price - b.price);
    },
  },
  {
    type: 'Price: high to low',
    checked: false,
    sort(offers: Offers) {
      return offers.slice().sort((a, b) => b.price - a.price);
    },
  },
  {
    type: 'Top rated first',
    checked: false,
    sort(offers: Offers) {
      return offers.slice().sort((a, b) => a.rating - b.rating);
    },
  },
];
