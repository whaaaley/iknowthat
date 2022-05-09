
import { createSlice } from '@reduxjs/toolkit'

function animeURL () {
  return 'https://boredhumans.b-cdn.net/anime_images/twdne/' +
    Math.floor(Math.random() * 100000) + '.jpg'
}

const { actions, reducer } = createSlice({
  name: 'chat',
  initialState: {
    error: null,
    loading: false,
    success: null,
    data: {
      users: {
        0: {
          name: 'Sarah',
          photo: animeURL()
        },
        123: {
          name: 'John',
          photo: animeURL()
        },
        456: {
          name: 'Jane',
          photo: animeURL()
        }
      },
      messages: [{
        uid: '123',
        message: 'hello world'
      }, {
        uid: '123',
        message: 'how are you?'
      }]
    }
  },
  reducers: {
    pushMessage (state, action) {
      const { uid, message } = action.payload
      state.messages.push({ uid, message })
    },
    sendMessage (state, { type, payload }) {
      state.data.messages.push({
        uid: '0',
        message: payload
      })
    },
    getChat (state, action) {
      fetch()
    }
  }
})

export const { pushMessage, sendMessage } = actions

export default reducer
