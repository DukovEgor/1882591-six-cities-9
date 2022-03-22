import { City } from '../types/city';
import { Offers } from '../types/offer';

export function getFilteredOffers(city: City, offers: Offers) {
  return offers.filter((offer) => offer.city.name === city.name);
}

export function getSortedOffers(offers: Offers, type: string) {
  switch (type) {
    case 'Price: low to high':
      return offers.slice().sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return offers.slice().sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return offers.slice().sort((a, b) => a.rating - b.rating);
    default:
      return offers;
  }
}
