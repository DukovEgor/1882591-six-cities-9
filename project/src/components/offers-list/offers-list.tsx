import { Offer } from '../../types/offer';
import Card from '../card/card';

type OffersListProps = {
  offers: Offer[];
}

export default function OffersList({ offers }: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((index) => (
        <Card key={index.id} title={index.title} price={index.price} type={index.type} id={index.id} isPremium bedrooms={0} city={{
          location: {
            latitude: 0,
            longitude: 0,
            zoom: 0,
          },
          name: '',
        }} description={''} goods={[]} host={{
          avatarUrl: '',
          id: 0,
          isPro: false,
          name: '',
        }} images={[]} isFavorite={false} location={{
          latitude: 0,
          longitude: 0,
          zoom: 0,
        }} maxAdults={0} previewImage={''} rating={0}
        />))}
    </div>
  );
}
