import { FormattedMessage } from 'react-intl'

declare module 'react-intl' {
  interface ExtractableMessage {
    [key: string]: string
  }

  export function defineMessages<T extends ExtractableMessage>(
    messages: T
  ): { [Key in keyof T]: FormattedMessage.MessageDescriptor }
}
