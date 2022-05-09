
import { useState } from 'react'
import ShadowRoot from '$/modules/ShadowRoot.js'
import style from 'bundle-text:./_matches.scss'

export default function ({ data, children }) {
  return <ShadowRoot id='matches' styles={[style]} slots={{ children }}>
    {data.map((match, index) => {
      const style = {
        '--photo': `url(${match.photo})`
      }

      return <div key={index} className='card' style={style}>
        {/* nothing yet... */}
      </div>
    })}
  </ShadowRoot>
}
