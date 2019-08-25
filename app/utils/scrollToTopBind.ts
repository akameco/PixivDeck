const easeOutExpo = (x: number): number => (x === 1 ? 1 : 1 - 2 ** -10 * x)

const position = (
  start: number,
  end: number,
  elapsed: number,
  duration: number
): number => {
  if (elapsed > duration) {
    return end
  }

  return start + (end - start) * easeOutExpo(elapsed / duration)
}

const scrollTop = (node: HTMLElement, callback?: () => unknown): void => {
  const clock = Date.now()
  const duration = 700
  let opacity = 1
  const start = node.scrollTop

  const step = (): void => {
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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const scrollToTopFactory = (node: HTMLElement, fn?: (e: Event) => void) => (
  e: Event
): void => {
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

  scrollTop(
    node,
    (): void => {
      if (fn) {
        fn(e)
      }
    }
  )
}

export type HandleHeaderClick = (a: Event) => undefined
export default scrollToTopFactory
