import * as React from 'react'
import styled from 'styled-components'
import Subheader from 'material-ui/Subheader'
import { FormattedMessage } from 'react-intl'
import Card from './Card'
import messages from './messages'

const Discription = styled.div`
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  margin: 4px 0 0;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  padding: 5px 20px;
`
const A = styled.a`
  color: rgba(37, 143, 233, 0.8);
  text-decoration: underline;
  display: inline-flex;
  align-items: flex-end;
  margin: 2px;
`

const LimitSetting = () => (
  <Card>
    <Subheader>
      <FormattedMessage {...messages.limit} />
    </Subheader>
    <Discription>
      <FormattedMessage {...messages.r18FilterDesc} />
      <br />
      <A href="http://www.pixiv.net/setting_user.php" target="_brank">
        <FormattedMessage {...messages.r18Link} />
      </A>
    </Discription>
  </Card>
)

export default LimitSetting
