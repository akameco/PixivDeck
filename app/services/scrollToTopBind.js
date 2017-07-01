// @flow
import scrollTop from 'residual-scroll-top'

const scrollTopFactory = (node: HTMLElement, fn?: Function) => (e: Event) => {
  e.preventDefault()

  if (node && node.scrollTop === 0) {
    return
  }

  if (node) {
    scrollTop(node, () => {
      if (fn) {
        fn()
      }
    })
  }
}

export type HandleHeaderClick = Event => void

export default scrollTopFactory
