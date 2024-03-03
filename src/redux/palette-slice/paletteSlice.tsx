import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ColorItem, Color } from "../../types/paletteTypes";

export interface PaletteState {
  colorItems: ColorItem[];
}

const initialState: PaletteState = {
  colorItems: [],
};

export const paletteSlice = createSlice({
  name: "palette",
  initialState,
  reducers: {
    addColorItems: (state, action: PayloadAction<ColorItem>) => {
      state.colorItems =  [...state.colorItems, action.payload]
    },
    deleteColorItems: (state, action: PayloadAction<string>) => {
      state.colorItems = state.colorItems.filter((item) => action.payload !== item.id)
    },
    editColorItems: (state, action: PayloadAction<{isSelected: number | null, color:Color}>) => {
      state.colorItems = state.colorItems.map((item, idx) =>
      idx === action.payload.isSelected ? { ...item, color: action.payload.color } : item
    )
    },
  },
});

export const { addColorItems, deleteColorItems, editColorItems } = paletteSlice.actions;

export default paletteSlice.reducer;
