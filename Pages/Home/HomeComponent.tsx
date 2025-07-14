"use client";
import rooms from "@/data/rooms.json";
import { useNexus } from "@/utils/hooka/useNexus";
import { HomeView } from "./HomeView";
import { useEffect } from "react";
import { roomType } from "@/redux/types/roomType";

export const HomeComponent = () => {
  const getRoomValue: roomType[] =
    useNexus({
      slice: "room",
      type: "GET",
      selectorKey: "rooms",
    }) ?? [];

  const setRooms = useNexus({
    slice: "room",
    type: "POST",
  });

  useEffect(() => {
    setRooms(rooms);
  }, [setRooms]);

  return (
    <>
      <HomeView rooms={getRoomValue} />
    </>
  );
};
