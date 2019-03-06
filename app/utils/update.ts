function update<
  T,
  State extends {
    [a: string]: T
  },
  Action extends {
    id: any
  }
>(state: State, action: Action, subject: Partial<T>): State {
  return { ...state, [action.id]: { ...state[action.id], ...subject } }
}

export default update
