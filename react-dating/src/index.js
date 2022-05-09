
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'

import App from './app.js'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<React.StrictMode>
  <Provider store={store}>
    <App/>
  </Provider>
</React.StrictMode>)

// TODO: Ignore this. Parcel has a bug. This is for dev only.
let index = 0

const observer = new MutationObserver(function () {
  if (index++ > 3) {
    window.location.reload()
  }
})

observer.observe(document.head, { childList: true })
