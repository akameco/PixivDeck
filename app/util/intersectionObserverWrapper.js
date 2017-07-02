// @flow
declare class IntersectionObserver {
  observe: Function,
  disconnect: Function,
}

type ID = number | string

export default class IntersectionObserverWrapper {
  callbacks: { [key: ID]: Function } = {}
  observerBacklog: Array<*> = []
  observer: IntersectionObserver

  connect(options: Object) {
    const onIntersection = entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('data-id')
        if (this.callbacks[id]) {
          this.callbacks[id](entry)
        }
      })
    }

    this.observer = new IntersectionObserver(onIntersection, options)
    this.observerBacklog.forEach(([id, node, callback]) => {
      this.observe(id, node, callback)
    })
    this.observerBacklog = []
  }

  observe(id: ID, node: HTMLElement, callback: Function) {
    if (this.observer) {
      this.callbacks[id] = callback
      this.observer.observe(node)
    } else {
      this.observerBacklog.push([id, node, callback])
    }
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect()
    }
  }
}
