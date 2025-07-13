"use client";
import { ReactNode } from "react";

// type room = {
//   $id: string;
//   user_id: string;
//   name: string;
//   description: string;
//   sqft: number;
//   capacity: number;
//   location: string;
//   adrress: string;
//   amenities: string;
//   availability: string;
//   price_per_hour: number;
//   image: string;
// };
type HomeViewProps = {
  rooms: ReactNode[];
};

export const HomeView = ({ rooms }: HomeViewProps) => {
  return (
    <>
      <h1>{rooms}</h1>
    </>
  );
};
