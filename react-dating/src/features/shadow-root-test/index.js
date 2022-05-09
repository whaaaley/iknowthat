
import ShadowRoot from '$/modules/ShadowRoot.js'
import style from 'bundle-text:./shadow-root-test.css'

export default function (props) {
  return <ShadowRoot id='shadow-root-test' styles={[style]}>
    <div>
      <h1>Hello world!</h1>
      {props.children}
    </div>
  </ShadowRoot>
}
