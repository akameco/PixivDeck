import keycode from 'keycode'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Fn = (event: any) => any

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const handleEscCreater = (fn: Fn) => (event: Event) => {
  if (keycode(event) === 'esc') {
    fn(event)
  }
}

export default handleEscCreater
