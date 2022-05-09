
import { useState } from 'react'
import ShadowRoot from '$/modules/ShadowRoot.js'

import layout from 'bundle-text:./_layout.scss'
import sidebar from 'bundle-text:./_sidebar.scss'
import navbar from 'bundle-text:./_navbar.scss'

import Matches from '$/features/matches/index.js'

function animeURL () {
  return 'https://boredhumans.b-cdn.net/anime_images/twdne/' +
    Math.floor(Math.random() * 100000) + '.jpg'
}

const matches = [
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

function Navbar (props) {
  const [state, setState] = useState({ index: 0 })

  function setMatches () {
    setState({ index: 0 })
    props.onChange?.(state.index)
  }

  function setMessages () {
    setState({ index: 1 })
    props.onChange?.(state.index)
  }

  return <ShadowRoot id='navbar' styles={[navbar]}>
    <nav>
      <button onClick={setMatches}>Matches</button>
      <button onClick={setMessages}>Messages</button>
      <div>{/* emtpy */}</div>
    </nav>
    <hr style={{ '--index': state.index }}/>
  </ShadowRoot>
}

function Sidebar (props) {
  return <ShadowRoot id='sidebar' styles={[sidebar]}>
    <div className='head'>
      Whaley
    </div>
    <div className='content'>
      <Navbar/>
      <Matches data={matches}/>
    </div>
  </ShadowRoot>
}

export default function ({ children }) {
  return <ShadowRoot id='layout' styles={[layout]} slots={{ children }}>
    <Sidebar/>
    <main>
      <slot name='children'></slot>
    </main>
  </ShadowRoot>
}
