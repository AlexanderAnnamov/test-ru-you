import { configureStore } from '@reduxjs/toolkit'
import paletteSlice from './palette-slice/paletteSlice'

export const store = configureStore({
  reducer: {
    palette: paletteSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch