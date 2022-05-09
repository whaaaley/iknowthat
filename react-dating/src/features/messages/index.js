
import { useState } from 'react'
import { useSelector } from 'react-redux'

import ShadowRoot from '$/modules/ShadowRoot.js'
import style from 'bundle-text:./_messages.scss'

export default function () {
  const messages = useSelector(state => state.messages.data)

  return <ShadowRoot id='messages' styles={[style]}>
    {messages.map((message, index) => {
      const variables = {
        '--photo': `url(${message.photo})`
      }

      return <div className='item' style={variables} key={index}>
        {/* nothing yet... */}
        <h1>hi</h1>
      </div>
    })}
  </ShadowRoot>
}
