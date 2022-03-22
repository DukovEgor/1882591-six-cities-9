import { City } from '../types/city';
import { Offers } from '../types/offer';

export function getFilteredOffers(city: City, offers: Offers) {
  return offers.filter((offer) => offer.city.name === city.name);
}
