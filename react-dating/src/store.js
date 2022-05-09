
import { configureStore } from '@reduxjs/toolkit'

import chat from '$/slices/chat'
import counter from '$/features/counter/counterSlice'
import matches from '$/slices/matches'
import messages from '$/slices/messages'

export const store = configureStore({
  reducer: {
    chat,
    counter,
    matches,
    messages
  }
})
