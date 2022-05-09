
import { configureStore } from '@reduxjs/toolkit'

import counter from '$/features/counter/counterSlice'
import matches from '$/slices/matches'

export const store = configureStore({
  reducer: {
    counter,
    matches
  }
})
