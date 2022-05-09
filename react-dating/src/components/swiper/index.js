
import ShadowRoot from '$/modules/ShadowRoot.js'
import style from 'bundle-text:./_swiper.scss'

export default function ({ data, children }) {
  return <ShadowRoot id='swiper' styles={[style]} slots={{ children }}>
    <div className='stack'>
      {data.map((user, index) => {
        const style = {
          '--photo': `url(${user.photo})`
        }

        return <div key={index} className='card' style={style}>
          <div className='user'>
            <div>{/* empty */}</div>
            <h1>{user.name} <span>{user.age}</span></h1>
            <div>{user.bio}</div>
          </div>
          <div className='controls'>hi</div>
        </div>
      })}
    </div>

  </ShadowRoot>
}
