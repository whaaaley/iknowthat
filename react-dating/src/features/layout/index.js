
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ShadowRoot from '$/modules/ShadowRoot.js'

import layout from 'bundle-text:./_layout.scss'
import sidebar from 'bundle-text:./_sidebar.scss'
import navbar from 'bundle-text:./_navbar.scss'

import Matches from '$/features/matches/index.js'

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
  const matches = useSelector(state => state.matches.data)
  console.log(matches)

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
