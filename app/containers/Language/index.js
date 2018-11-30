// @flow
import electron from 'electron'
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import { makeSelectLocale } from './selectors'
import { DEFAULT_LOCALE } from './reducer'
import * as actions from './actions'

type OP = {
  messages: Object,
  children?: React.Element<*>,
}

type Props = {
  locale: ?string,
} & typeof actions &
  OP

export class Language extends React.Component<Props> {
  componentDidMount() {
    if (!this.props.locale) {
      const app = electron.remote.app || electron.app
      const sysLocale = app.getLocale().toLowerCase()

      const locale = ['ja', 'zh', 'zh-tw'].includes(sysLocale)
        ? sysLocale
        : 'en'
      this.props.changeLocale(locale)
    }
  }

  render() {
    const { locale, messages, children } = this.props
    const localeMessages = (messages && locale && messages[locale]) || {}

    return (
      <IntlProvider
        defaultLocale={DEFAULT_LOCALE}
        key={locale}
        locale={locale}
        messages={localeMessages}
      >
        {children}
      </IntlProvider>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
})

const connector: Connector<OP, Props> = connect(
  mapStateToProps,
  actions
)
export default connector(Language)
