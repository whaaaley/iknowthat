
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ShadowRoot from '$/modules/ShadowRoot.js'

import layout from 'bundle-text:./_layout.scss'
import sidebar from 'bundle-text:./_sidebar.scss'
import navbar from 'bundle-text:./_navbar.scss'

import Matches from '$/features/matches/index.js'
import Messages from '$/features/messages/index.js'

function Navbar (props) {
  const tab = index => () => props.onTab(index)

  return <ShadowRoot id='navbar' styles={[navbar]}>
    <nav>
      <button onClick={tab(0)}>Matches</button>
      <button onClick={tab(1)}>Messages</button>
      <div>{/* emtpy */}</div>
    </nav>
    <hr style={{ '--index': props.index }}/>
  </ShadowRoot>
}

function Sidebar () {
  const [state, setState] = useState({ index: 0 })
  const onTab = index => setState({ index })

  return <ShadowRoot id='sidebar' styles={[sidebar]}>
    <div className='head'>Whaley</div>
    <div className='content'>
      <Navbar index={state.index} onTab={onTab}/>
      <div className='pages' style={{ '--index': state.index }}>
        <Matches/>
        <Messages/>
      </div>
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
