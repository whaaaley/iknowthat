
import { useSelector } from 'react-redux'

import ShadowRoot from './modules/ShadowRoot.js'
import style from 'bundle-text:./_main.scss'

import Layout from './features/layout/index.js'
// import Swiper from './features/swiper/index.js'
import Chat from './features/chat/index.js'

export default function ({ children }) {
  const matches = useSelector(state => state.matches.data)
  console.log(matches)

  return <ShadowRoot id='app' styles={[style]} slots={{ children }}>
    <div className='app'>
      <Layout>
        {/* <Swiper data={matches}/> */}
        <Chat/>
      </Layout>
    </div>
  </ShadowRoot>
}
