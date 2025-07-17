import { roomType } from "@/redux/types/roomType";
export const RoomMapper = (data): roomType => {
  const mappedRoom = {
    $id: data.$id,
    user_id: data.user_id,
    name: data.name,
    description: data.description,
    sqft: data.sqft,
    capacity: data.capacity,
    address: data.address,
    amenities: data.amenities,
    availability: data.availability,
    price_per_hour: data.price_per_hour,
    image: data.image,
  };
  return mappedRoom;
};
