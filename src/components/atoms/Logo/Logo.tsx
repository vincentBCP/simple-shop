import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const Container = styled.div`
	display: inline;
	user-select: none;
`

const StyledLink = styled(Link)`
	color: black;
	text-decoration: none;
	display: flex;
	align-items: center;
	gap: 8px;

	&:hover, &:active, &:visited {
		color: black;
		text-decoration: none;
	}

	& > span {
		font-weight: 600;
		font-size: 16px;
	}
`

const Logo = () => {
	return (
		<Container>
			<StyledLink to="/">
				<Icon name="box" size="large" />
				<span>Shop</span>
			</StyledLink>
		</Container>
	)
}

export default Logo