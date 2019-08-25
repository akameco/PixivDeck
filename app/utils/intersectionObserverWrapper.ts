export default class IntersectionObserverWrapper {
  callbacks: { [key: string]: any } = {}
  observerBacklog: any[] = []
  observer: IntersectionObserver | null = null

  connect(options: IntersectionObserverInit) {
    const onIntersection: IntersectionObserverCallback = entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('data-id')
        if (id && this.callbacks[id]) {
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

  observe(id: string, node: HTMLElement, callback: any) {
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
