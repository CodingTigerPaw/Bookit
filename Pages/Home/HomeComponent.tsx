"use client";
import rooms from "@/data/rooms.json";
import { useNexus } from "@/utils/hooka/useNexus";
import { HomeView } from "./HomeView";
import { RoomCard } from "@/shared/roomCard";

export const HomeComponent = () => {
  type roomType = {
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

  const getRoomValue = useNexus({
    slice: "room",
    type: "GET",
    selectorKey: "rooms",
  }) as roomType[];

  const setRooms = useNexus({
    slice: "room",
    type: "POST",
    data: rooms,
  });

  const clearRooms = useNexus({
    slice: "room",
    type: "DELETE",
  });

  const roomsData = getRoomValue.map((room) => (
    <RoomCard key={room.$id} room={room} />
  ));

  return (
    <>
      <button onClick={() => setRooms(rooms)}>set rooms</button>
      <button onClick={() => clearRooms()}>clear rooms</button>

      <HomeView rooms={roomsData} />
    </>
  );
};
