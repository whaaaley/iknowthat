
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cc from 'classcat'

import { sendMessage } from '$/slices/chat.js'

import ShadowRoot from '$/modules/ShadowRoot.js'
import style from 'bundle-text:./_chat.scss'

function Message ({ data: { uid, message } }) {
  return <div className='message'>
    <div className='photo'>
      {uid}
    </div>
    <div className='text-box'>
      {message}
    </div>
  </div>
}

export default function () {
  const [state, setState] = useState({ message: '' })

  const dispatch = useDispatch()
  const { users, messages } = useSelector(state => state.chat.data)

  const onChange = event => {
    setState({ message: event.target.value })
  }

  const onSend = () => {
    dispatch(sendMessage(state.message))
    setState({ message: '' })
  }

  const buttonClass = cc({
    '-active': state.message.length > 0
  })

  return <ShadowRoot id='chat' styles={[style]}>
    <div className='head'>
      <h1>head</h1>
    </div>
    <div className='history'>
      {
        messages.map((message, index) => {
          return <Message key={index} data={message}/>
        })
      }
    </div>
    <div className='message-box'>
      <input
        type='text'
        value={state.message}
        onChange={onChange}
        placeholder='Type as message'
      />
      <button className={buttonClass} onClick={onSend}>SEND</button>
    </div>
  </ShadowRoot>
}
