// @flow
import React from 'react'
import styled from 'styled-components'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import type {ColumnType} from '../../types/column'
import ColumnSetting from './ColumnSettinContainer'

const style = {
	color: '#999999',
}

type Props = {
	column: ColumnType,
	onTopClick: (event: Event) => void,
	onClose: () => void
}

type State = {
	open: bool;
}

class ColumnHeader extends React.Component {
	props: Props
	state: State = {
		open: false,
	}

	handleClick = () => {
		this.setState({open: !this.state.open})
	}

	render() {
		const {onClose, onTopClick, column} = this.props
		const {title} = column
		return (
			<Wrap>
				<Header>
					<Item onClick={this.handleClick}>
						<IconButton>
							<NavigationMenu color={style.color}/>
						</IconButton>
					</Item>
					<Title onClick={onTopClick}>
						{title}
					</Title>
					<Item onClick={onClose}>
						<IconButton>
							<NavigationClose color={style.color}/>
						</IconButton>
					</Item>
				</Header>
				<ColumnSetting
					open={this.state.open}
					id={column.id}
					minBookmarks={column.minBookmarks}
					/>
			</Wrap>
		)
	}
}

const Wrap = styled.div`
	display: flex;
	width: 100%;
	margin: 0;
	padding: 0;
	flex-direction: column;
`

const Header = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	z-index: 200;
	text-align: center;
	color: #e1e8ed;
	background: #292f33;
	width: 100%;
	cursor: pointer;
`

const Item = styled.div`
	display: flex;
	position: relative;
	justify-content: space-between;
	align-items: center;
`

const Title = styled.div`
	color: #e1e8ed;
	font-size: 1rem;
	white-space: nowrap;
	overflow-x: auto;
	overflow-y: hidden;

	&::-webkit-scrollbar {
		display: none;
	}
`

export default ColumnHeader
