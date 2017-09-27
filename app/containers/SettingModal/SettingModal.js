// @flow
import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import { List, ListItem } from 'material-ui/List'
import SelectField from 'material-ui/SelectField'
import Subheader from 'material-ui/Subheader'
import Toggle from 'material-ui/Toggle'
import MenuItem from 'material-ui/MenuItem'
import VisibilityOffIcon from 'material-ui/svg-icons/action/visibility-off'
import Chip from 'components/Chip'
import Card from './Card'
import LimitSetting from './LimitSetting'
import messages from './messages'
import { ChipWrap, Field, Icon, Input, TagFilter, Wrap } from './styles'

export type Props = {
  onDelete: (tag: string) => void,
  onSubmit: (tag: string) => void,
  onCheckShowText: (isShow: boolean) => void,
  onCheckIllustOnly: (isShow: boolean) => void,
  onSelectLanguage: (locale: string) => void,
  onRemoveCache: Function,
  tags: Array<string>,
  isShowCaption: boolean,
  isIllustOnly: boolean,
  locale: string,
}

type State = {
  value: string,
}

export default class SettingFilterModal extends Component {
  props: Props
  state: State = { value: '' }

  handleCangeInput = (event: any) => {
    if (event.target && event.target.value) {
      this.setState({ value: event.target.value })
    }
  }

  handleSubmit = (event: any) => {
    if (event.keyCode === 13 && this.state.value !== '') {
      event.preventDefault()
      this.props.onSubmit(this.state.value)
      this.setState({ value: '' })
    }
  }

  handleCheckShowText = () => {
    this.props.onCheckShowText(!this.props.isShowCaption)
  }

  handleCheckSetOnlyIllust = () => {
    this.props.onCheckIllustOnly(!this.props.isIllustOnly)
  }

  render() {
    const {
      isShowCaption,
      isIllustOnly,
      tags,
      locale,
      onSelectLanguage,
    } = this.props

    return (
      <Wrap>
        <Card>
          <List>
            <Subheader>
              <FormattedMessage {...messages.uiSetting} />
            </Subheader>
            <ListItem
              primaryText={<FormattedMessage {...messages.showCaption} />}
              rightToggle={
                <Toggle
                  onToggle={this.handleCheckShowText}
                  toggled={isShowCaption}
                />
              }
            />
            <ListItem
              primaryText={<FormattedMessage {...messages.showOnlyImg} />}
              rightToggle={
                <Toggle
                  onToggle={this.handleCheckSetOnlyIllust}
                  toggled={isIllustOnly}
                />
              }
            />
          </List>
        </Card>
        <Card>
          <TagFilter>
            <Subheader>
              <FormattedMessage {...messages.tagFilter} />
            </Subheader>
            <Field>
              <Icon>
                <VisibilityOffIcon />
              </Icon>
              <Input
                type="text"
                value={this.state.value}
                onChange={this.handleCangeInput}
                onKeyDown={this.handleSubmit}
              />
            </Field>
            <ChipWrap>
              {tags.map(tag => (
                <Chip
                  key={tag}
                  onRequestDelete={() => this.props.onDelete(tag)}
                >
                  {tag}
                </Chip>
              ))}
            </ChipWrap>
          </TagFilter>
        </Card>
        <Card>
          <Subheader>
            <FormattedMessage {...messages.language} />
          </Subheader>
          <SelectField
            value={locale}
            onChange={(ev, i, value) => onSelectLanguage(value)}
          >
            <MenuItem value={'ja'} primaryText="日本語" />
            <MenuItem value={'en'} primaryText="English" />
            <MenuItem value={'zh'} primaryText="中文" />
          </SelectField>
        </Card>
        <LimitSetting />
        {/* <Card>
          <RedText onClick={this.props.onRemoveCache}>
            <FormattedMessage {...messages.cache} />
          </RedText>
        </Card> */}
      </Wrap>
    )
  }
}
