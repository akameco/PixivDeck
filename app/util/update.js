// @flow
function update<T, S: { [*]: T }, A: { +id: * }>(
  state: S,
  action: A,
  subject: $Shape<T>
): S {
  return { ...state, [action.id]: { ...state[action.id], ...subject } }
}

export default update
