
import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ShadowRoot ({ id, styles, slots, children }) {
  const slotList = []
  const styleList = []

  if (slots) {
    for (const key in slots) {
      slotList.push(<div key={key} slot={key}>{slots[key]}</div>)
    }
  }

  if (styles) {
    for (const key in styles) {
      styleList.push(<style key={key}>{styles[key]}</style>)
    }
  }

  const ref = useRef(null)
  const [state, setState] = useState({ isMounted: false })

  const root = document.createElement('div')
  let node

  Object.defineProperty(ref, 'current', {
    get () {
      return node
    },
    set (value) {
      node = value

      if (!state.isMounted) {
        node.attachShadow({ mode: 'open' }).appendChild(root)

        setState({
          root,
          isMounted: true
        })
      }
    }
  })

  function shadowRealm () {
    const portal = createPortal(
      [children, styleList],
      state.root
    )

    portal.containerInfo.id = id

    return portal
  }

  return <div ref={ref}>
    {state.isMounted && shadowRealm()}
    {slotList}
  </div>
}
