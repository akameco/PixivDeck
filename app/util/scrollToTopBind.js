// @flow
const easeOutExpo = x => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x))

const position = (start, end, elapsed, duration) => {
  if (elapsed > duration) {
    return end
  }
  return start + (end - start) * easeOutExpo(elapsed / duration)
}

const scrollTop = (node: HTMLElement, callback?: Function) => {
  const clock = Date.now()
  const duration = 700

  let opacity = 1
  const start = node.scrollTop

  const step = () => {
    const elapsed = Date.now() - clock
    node.scrollTop = position(start, 0, elapsed, duration)

    if (elapsed < duration) {
      if (duration - elapsed < 150) {
        opacity += 0.09
      } else if (opacity > 0) {
        opacity -= 0.06
      }
      node.style.opacity = `${opacity}`
      requestAnimationFrame(step)
    } else {
      node.style.opacity = '1.0'
      if (callback) {
        callback()
      }
    }
  }
  step()
}

const scrollToTopFactory = (node: HTMLElement, fn?: Function) => (e: Event) => {
  e.preventDefault()

  if (!node) {
    return
  }

  if (node.scrollTop === 0) {
    if (fn) {
      fn(e)
    }

    return
  }

  scrollTop(node, () => {
    if (fn) {
      fn(e)
    }
  })
}

export type HandleHeaderClick = Event => void

export default scrollToTopFactory
