// @flow
import React from 'react'

declare function Callback(): React.Element<*>

type Options = {
  inline?: boolean
}

declare module '@storybook/react' {
  declare interface Story {
    add: (storyName: string, callback: Function) => Story;
    addWithInfo: (storyName: string, info: string | Function, storyFn?: Function | Options, options?: Options) => Story;
  }

  declare function storiesOf(name: string, module: any): Story;
  declare function action(name: string): Function;
}
