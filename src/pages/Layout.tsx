import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Label } from 'semantic-ui-react'
import styled from 'styled-components'
import Logo from '../components/atoms/Logo'
import { AppContext } from '../context/app.context'

const Container = styled.div`

`

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 10px;
	margin: 0 15%;
	border-bottom: 1px solid ${props => props.theme.colors.divider};
	height: 63px;

	& > .cart {
		display: flex;
		&, &:active, &:hover, &:visited {
			color: black;
		}

		& .label {
			color: white;
			font-size: 11px;
			background-color: ${props => props.theme.colors.orange};
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`

const Content = styled.div`
	padding: 0 15%;
`

const Layout = ({ children }: any) => {
	const appContext = useContext(AppContext)
	const { cartItems } = appContext

	return (
		<Container>
			<Header>
				<Logo />
				<Link className="cart" to="/cart">
					<Icon name="shop" size="large" />
					{ cartItems.length > 0 && <Label circular>{cartItems.length}</Label> }
				</Link>
			</Header>
			<Content>
				{children}
			</Content>
		</Container>
	)
}

export default Layout