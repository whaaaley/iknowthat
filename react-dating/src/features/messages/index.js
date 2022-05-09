
import { useState } from 'react'
import { useSelector } from 'react-redux'
import cc from 'classcat'

import ShadowRoot from '$/modules/ShadowRoot.js'
import style from 'bundle-text:./_messages.scss'

export default function () {
  const [state, setState] = useState({ index: 0 })
  const messages = useSelector(state => state.messages.data)

  const setIndex = index => () => setState({ index })

  return <ShadowRoot id='messages' styles={[style]}>
    {messages.map((message, index) => {
      const className = cc({
        'item': true,
        '-active': index === state.index
      })

      const variables = {
        '--photo': `url(${message.photo})`
      }

      return <div className={className} style={variables} key={index} onClick={setIndex(index)}>
        <div className='photo'></div>
        <div>
          <div className='name'>{message.name}</div>
          <div className='lastMessage'>{message.lastMessage}</div>
        </div>
      </div>
    })}
  </ShadowRoot>
}
