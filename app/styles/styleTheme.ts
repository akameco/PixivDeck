const theme = {
  base: '#222426',
  black: '#222426',
  white: '#e1e8ed',
  gray: '#889996',
  blue: '#68a3c9',
  sub: '',
  accent: '',
}

export function key(path: keyof typeof theme) {
  return () => theme[path]
}
export default theme
