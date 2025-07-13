"use client";
import rooms from "@/data/rooms.json";
import { HomeView } from "./HomeView";
import { useAppSelector } from "@/redux/store/hooks";

export const HomeComponent = () => {
  const count = useAppSelector((state) => state.counter.value);

  const isRooms = () => rooms.length > 0;

  const mapRooms = () =>
    rooms.map((room) => <h3 key={room.$id}>{room.name}</h3>);

  const roomsData = isRooms() ? mapRooms() : [];
  return (
    <>
      {count}
      <HomeView rooms={roomsData} />
    </>
  );
};
