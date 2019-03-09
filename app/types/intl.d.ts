/// <reference types="react-intl"/>

declare namespace ReactIntl {
  interface ExtractableMessage {
    [key: string]: string
  }

  export function defineMessages<T extends ExtractableMessage>(
    messages: T
  ): { [Key in keyof T]: FormattedMessage.MessageDescriptor }
}
