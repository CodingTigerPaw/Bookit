import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { roomType, roomSliceType } from "../types/roomType";

const initialState: roomSliceType = {
  rooms: [],
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<roomType[]>) => {
      state.rooms = action.payload;
    },
    reset: (state) => {
      state.rooms = [];
    },
  },
});

export const { setValue, reset } = roomSlice.actions;
export default roomSlice.reducer;
