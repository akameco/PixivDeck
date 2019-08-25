import * as React from 'react'
import styled from 'styled-components'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  color: #eee;
`
const styles = {
  color: '#eee',
}
interface Props {
  defaultValue: string
  onChange: Function
}

class FilterUsersIn extends React.Component<Props> {
  handleChange = (e: Event, value: string | null | undefined) => {
    if (!value) {
      return
    }

    this.props.onChange(Number(value))
  }

  render() {
    return (
      <Wrap>
        <div>フィルタ users入り</div>
        <RadioButtonGroup
          name="usersIn"
          defaultSelected={this.props.defaultValue || '0'}
          onChange={this.handleChange}
        >
          <RadioButton value={'0'} label="デフォルト" labelStyle={styles} />
          <RadioButton value={'100'} label="100users入り" labelStyle={styles} />
          <RadioButton value={'500'} label="500users入り" labelStyle={styles} />
          <RadioButton
            value={'1000'}
            label="1000users入り"
            labelStyle={styles}
          />
          <RadioButton
            value={'5000'}
            label="5000users入り"
            labelStyle={styles}
          />
          <RadioButton
            value={'10000'}
            label="10000users入り"
            labelStyle={styles}
          />
        </RadioButtonGroup>
      </Wrap>
    )
  }
}

export default FilterUsersIn
