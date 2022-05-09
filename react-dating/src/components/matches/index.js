
import { useState } from 'react'
import { useSelector } from 'react-redux'

import ShadowRoot from '$/modules/ShadowRoot.js'
import style from 'bundle-text:./_matches.scss'

export default function () {
  const matches = useSelector(state => state.matches.data)

  return <ShadowRoot id='matches' styles={[style]}>
    {matches.map((match, index) => {
      const style = {
        '--photo': `url(${match.photo})`
      }

      return <div key={index} className='card' style={style}>
        {/* nothing yet... */}
      </div>
    })}
  </ShadowRoot>
}
