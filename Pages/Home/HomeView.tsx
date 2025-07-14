"use client";
import { Heading } from "@/shared/heading";
import { RoomCard } from "@/shared/roomCard";

import { roomType } from "@/redux/types/roomType";
type HomeViewProps = {
  rooms: roomType[];
};

export const HomeView = ({ rooms }: HomeViewProps) => {
  const roomsData = rooms.map((room) => (
    <RoomCard key={room.$id} room={room} />
  ));

  return (
    <>
      <Heading title="Avaliabile Rooms" />
      <h1>{roomsData}</h1>
    </>
  );
};
