import { RoomDetailsComponent } from "@/Pages/roomDetails";

const RoomPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <RoomDetailsComponent id={id} />;
};

export default RoomPage;
