
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store'

import ShadowRoot from './modules/ShadowRoot.js'
import style from 'bundle-text:./_main.scss'

import Layout from './features/layout/index.js'
import Swiper from './features/swiper/index.js'

const container = document.getElementById('root')
const root = createRoot(container)

function animeURL () {
  return 'https://boredhumans.b-cdn.net/anime_images/twdne/' +
    Math.floor(Math.random() * 100000) + '.jpg'
}

const profiles = [
  {
    name: 'John',
    age: '25',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc euismod euismod consectetur, nunc nisl cursus nisl, euismod euismod nunc nisl euismod.',
    photo: animeURL()
  },
  {
    name: 'Jane',
    age: '26',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc euismod euismod consectetur, nunc nisl cursus nisl, euismod euismod nunc nisl euismod.',
    photo: animeURL()
  },
  {
    name: 'Jack',
    age: '27',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc euismod euismod consectetur, nunc nisl cursus nisl, euismod euismod nunc nisl euismod.',
    photo: animeURL()
  },
  {
    name: 'Katrina',
    age: '28',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc euismod euismod consectetur.',
    photo: animeURL()
  }
]

function App ({ children }) {
  return <ShadowRoot id='app' styles={[style]} slots={{ children }}>
    <div className='app'>
      <Layout>
        <Swiper data={profiles}/>
      </Layout>
    </div>
  </ShadowRoot>
}

root.render(<React.StrictMode>
  <Provider store={store}>
    <App/>
  </Provider>
</React.StrictMode>)

let index = 0

const observer = new MutationObserver(function () {
  if (index++ > 2) {
    window.location.reload()
  }
})

observer.observe(document.head, { childList: true })
