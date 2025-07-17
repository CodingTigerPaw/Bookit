"use server";

import { createAdminClient } from "@/config/appwrite";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { RoomMapper } from "@/utils/mappers/roomMapper";
const getAllRooms = async () => {
  try {
    const { databases } = await createAdminClient();
    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE as string,
      process.env.NEXT_PUBLIC_APPWRITE_COLECTION_ROOMS as string
    );
    revalidatePath("/", "layout");
    const mappedRooms = rooms.map((room) => RoomMapper(room));
    return mappedRooms;
  } catch (err) {
    console.log(err);
    redirect("/error");
  }
};

export { getAllRooms };
