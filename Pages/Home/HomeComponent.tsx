"use client";
import { useNexus } from "@/utils/hooka/useNexus";
import { HomeView } from "./HomeView";
import { useEffect, useState } from "react";
import { getAllRooms } from "@/app/actions/getAllRooms";
import { roomType } from "@/redux/types/roomType";

export const HomeComponent = () => {
  const setValue = useNexus({
    slice: "room",
    type: "POST",
  });
  useEffect(() => {
    const testAsync = async () => {
      const data = await getAllRooms();
      setData(data);
      setValue(data);
    };
    testAsync();
  }, []);
  const [data, setData] = useState<roomType[]>([]);

  return <HomeView rooms={data} />;
};
