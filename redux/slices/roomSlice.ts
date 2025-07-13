import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type roomSliceType = {
  rooms: roomType[] | [];
};

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
const initialState: roomSliceType = {
  rooms: [],
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.rooms = action.payload;
    },
    reset: (state) => {
      state.rooms = [];
    },
  },
});

export const { setValue, reset } = roomSlice.actions;
export default roomSlice.reducer;
