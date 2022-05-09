
import { createSlice } from '@reduxjs/toolkit'

function animeURL () {
  return 'https://boredhumans.b-cdn.net/anime_images/twdne/' +
    Math.floor(Math.random() * 100000) + '.jpg'
}

const testMessages = [
  {
    name: 'John',
    lastMessage: 'lorem ipsum',
    photo: animeURL()
  },
  {
    name: 'Jane',
    lastMessage: 'lorem ipsum',
    photo: animeURL()
  },
  {
    name: 'Jack',
    lastMessage: 'lorem ipsum',
    photo: animeURL()
  },
  {
    name: 'Jill',
    lastMessage: 'lorem ipsum',
    photo: animeURL()
  }
]

const { actions, reducer } = createSlice({
  name: 'matches',
  initialState: {
    data: [
      ...testMessages
    ]
  },
  reducers: {
    setMessages (state, action) {
      state.messages = action.payload
    }
  }
})

export const { setMessages } = actions

export default reducer
