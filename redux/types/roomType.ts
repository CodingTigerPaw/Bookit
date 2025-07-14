export type roomSliceType = {
  rooms: roomType[] | [];
};

export type roomType = {
  $id: string;
  user_id: string;
  name: string;
  description: string;
  sqft: number;
  capacity: number;
  address: string;
  amenities: string;
  availability: string;
  price_per_hour: number;
  image: string;
};
