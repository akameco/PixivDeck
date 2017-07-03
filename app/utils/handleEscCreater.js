// @flow
import keycode from 'keycode'

const handleEscCreater = (fn: Function) => (event: Event) => {
  if (keycode(event) === 'esc') {
    fn(event)
  }
}

export default handleEscCreater
