
import { createSlice } from '@reduxjs/toolkit'

function animeURL () {
  return 'https://boredhumans.b-cdn.net/anime_images/twdne/' +
    Math.floor(Math.random() * 100000) + '.jpg'
}

const testMatches = [
  {
    name: 'John',
    age: '25',
    photo: animeURL()
  },
  {
    name: 'Jane',
    age: '26',
    photo: animeURL()
  },
  {
    name: 'Jack',
    age: '27',
    photo: animeURL()
  },
  {
    name: 'Jill',
    age: '28',
    photo: animeURL()
  }
]

const { actions, reducer } = createSlice({
  name: 'matches',
  initialState: {
    data: [
      ...testMatches
    ]
  },
  reducers: {
    setMatches (state, action) {
      state.matches = action.payload
    }
  }
})

export const { setMatches } = actions

export default reducer
