import { RoomCard } from "@/shared/roomCard";
import { roomType } from "@/redux/types/roomType";
type HomeViewProps = {
  rooms: roomType[];
};

export const HomeView = ({ rooms }: HomeViewProps) => {
  const roomsData = rooms.map((room) => (
    <RoomCard key={room.$id} room={room} />
  ));
  console.log(rooms);
  return <>{roomsData}</>;
};
