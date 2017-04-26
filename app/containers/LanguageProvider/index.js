// @flow
import React, { PureComponent } from 'react'
import type { Connector } from 'react-redux'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { createSelector } from 'reselect'
import { makeSelectLocale } from './selectors'
import { DEFAULT_LOCALE } from './constants'

type Props = {
  locale?: string,
  messages?: Object,
  children?: React$Element<*>,
}

class LanguageProvider extends PureComponent {
  props: Props

  render() {
    const { locale, messages, children } = this.props
    const localeMessages = (messages && locale && messages[locale]) || {}
    return (
      <IntlProvider
        defaultLocale={DEFAULT_LOCALE}
        key={locale}
        locale={locale}
        messages={localeMessages}>
        {children}
      </IntlProvider>
    )
  }
}

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale,
}))

const connector: Connector<{}, Props> = connect(mapStateToProps)
export default connector(LanguageProvider)
