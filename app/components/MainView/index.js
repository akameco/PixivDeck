// @flow
import styled from 'styled-components'
import * as colors from 'constants/colors'

const MainView = styled.div`
	position: absolute;
	left: 50px;
	width: calc(100% - 50px);
	height: 100%;
	overflow-y: hidden;
	background-color: ${colors.background};
`

export default MainView
