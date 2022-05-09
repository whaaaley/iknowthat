
import { useSelector } from 'react-redux'

import ShadowRoot from './modules/ShadowRoot.js'
import style from 'bundle-text:./_main.scss'

import Layout from './components/layout/index.js'
// import Swiper from './components/swiper/index.js'
import Chat from './components/chat/index.js'

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
