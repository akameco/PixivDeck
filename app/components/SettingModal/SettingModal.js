// @flow
import React, {Component} from 'react';
import styled from 'styled-components';
import Chip from 'material-ui/Chip';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import VisibilityOffIcon from 'material-ui/svg-icons/action/visibility-off';
import {FormattedMessage} from 'react-intl';
import Card from './Card';
import LimitSetting from './LimitSetting';
import messages from './messages';

export type Props = {
  onDelete: (tag: string) => void,
  onSubmit: (tag: string) => void,
  onCheckShowText: (isShow: boolean) => void,
  onCheckIllustOnly: (isShow: boolean) => void,
  tags: Array<string>,
  isIllustComment: boolean,
  isIllustOnly: boolean,
};

type State = {
  value: string,
};

export default class SettingFilterModal extends Component {
  props: Props;
  state: State = {value: ''};

  handleCangeInput = (event: SyntheticEvent) => {
    // eslint-disable-line no-undef
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.setState({value: target.value});
    }
  };

  handleSubmit = (event: SyntheticKeyboardEvent) => {
    // eslint-disable-line no-undef
    if (event.keyCode === 13 && this.state.value !== '') {
      event.preventDefault();
      this.props.onSubmit(this.state.value);
      this.setState({value: ''});
    }
  };

  handleCheckShowText = () => {
    this.props.onCheckShowText(!this.props.isIllustComment);
  };

  handleCheckSetOnlyIllust = () => {
    this.props.onCheckIllustOnly(!this.props.isIllustOnly);
  };

  renderChip(tag: string) {
    const handleClick = () => this.props.onDelete(tag);
    const style = {margin: 4};
    return (
      <Chip key={tag} onRequestDelete={handleClick} style={style}>
        {tag}
      </Chip>
    );
  }

  render() {
    const {isIllustComment, isIllustOnly} = this.props;
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
                  toggled={isIllustComment}
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
              <Icon><VisibilityOffIcon /></Icon>
              <Input
                type="text"
                value={this.state.value}
                onChange={this.handleCangeInput}
                onKeyDown={this.handleSubmit}
              />
            </Field>
            <ChipWrap>
              {this.props.tags.map(this.renderChip, this)}
            </ChipWrap>
          </TagFilter>
        </Card>
        <LimitSetting />
      </Wrap>
    );
  }
}

const ChipWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	font-size: 1.1rem;
	height: 30px;
	width: calc(100% - 2.5rem);
	margin-top: 10px;
	padding-left: 2.5rem;
	border: 1px solid rgba(0, 0, 0, 0.09);
	border-radius: 17px;

	&:focus {
		border: 1px solid rgba(82, 158, 204, 0.7);
	}
`;

const Field = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 2rem;
`;

const Wrap = styled.div`
	max-width: 100%;
	margin-top: 2rem;
	margin-left: 1rem;
	margin-right: 1rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const TagFilter = styled.div`
	padding-left: 10px;
	padding-right: 10px;
`;

const Icon = styled.div`
	position: absolute;
	top: 1rem;
	left: 0.5rem;
	width: 1.5rem;
	height: 1.5rem;
`;
