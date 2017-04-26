// flow-typed signature: 7e23e4366fd2ee14ba9e44d66ca35c64
// flow-typed version: <<STUB>>/react-intl_v^2.2.3/flow_v0.39.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'react-intl'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

type LocaleData = {
  [key: string]: any,
  locale: string
};

type IntlConfig = {
  locale: string,
  formats: Object,
  messages: {[id: string]: string},
  defaultLocale: string,
  defaultFormats: Object
};

type MessageDescriptor = {
  id: string,
  defaultMessage: string,
  description?: string
};

type MessageDescriptorMap = {[key: string]: any};

type IntlFormat = {
  formatDate: (value: any, options?: Object) => string,
  formatTime: (value: any, options?: Object) => string,
  formatRelative: (value: any, options?: Object) => string,
  formatNumber: (value: any, options?: Object) => string,
  formatPlural: (value: any, options?: Object) => string,
  formatMessage: (
    messageDescriptor: MessageDescriptor,
    values?: Object
  ) => string,
  formatHTMLMessage: (
    messageDescriptor: MessageDescriptor,
    values?: Object
  ) => string
};

declare module 'react-intl' {
  declare interface ReactIntl extends React.Component<*, *, *> {
    addLocaleData(data: LocaleData | Array<LocaleData>): void,
    intlShape: IntlConfig & IntlFormat & {now: () => number},
    injectIntl(
      WrappedComponent: ReactClass<*, *, *>,
      options?: {
        intlPropName?: string,
        withRef?: boolean
      }
    ): ReactClass<*, *, *>,
    defineMessages(
      messageDescriptors: MessageDescriptorMap
    ): MessageDescriptorMap,
    IntlProvider: React.Component<*, *, *>,
    FormattedDate: React.Component<*, *, *>,
    FormattedTime: React.Component<*, *, *>,
    FormattedRelative: React.Component<*, *, *>,
    FormattedNumber: React.Component<*, *, *>,
    FormattedPlural: React.Component<*, *, *>,
    FormattedMessage: React.Component<*, *, *>,
    FormattedHTMLMessage: React.Component<*, *, *>
  }
  declare var exports: ReactIntl;
}
