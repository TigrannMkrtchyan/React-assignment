export interface CardProps {
  card: ICard;
}

export interface ICard {
  sequence_number: number;
  eta: string;
  time_window: string;
  street: string;
  zip: string;
  city: string;
  lat: number;
  lng: number;
}
