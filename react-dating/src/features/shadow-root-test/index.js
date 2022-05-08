
import ShadowRoot from '../../modules/ShadowRoot.js'
import style from 'bundle-text:./shadow-root-test.css'

export default function (props, children) {
  return <ShadowRoot id='shadow-root-test' styles={[style]}>
    <h1>this is only a test</h1>
    <h1>this is only a test</h1>
    <h1>this is only a test</h1>
    <h1>this is only a test</h1>
    <h1>this is only a test</h1>
  </ShadowRoot>
}
