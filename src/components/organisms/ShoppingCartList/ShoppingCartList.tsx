import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AppContext } from '../../../context/app.context'
import ShoppingCartListItem from '../../molecules/ShoppingCartListItem'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`

const Empty = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > a {
		margin-top: 20px;
		background-color: ${props => props.theme.colors.orange};
		padding: 15px 30px;
		color: white;
		font-size: 16px;
		font-weight: 600;
	}
`

const ShoppingCartList = () => {
	const appContext = useContext(AppContext)
	const { cartItems, removeFromCart } = appContext
	
	return (
		<Container>
			{
				cartItems.length > 0 &&
				cartItems.map((cartItem, index) =>
					<ShoppingCartListItem
						key={index}
						cartItem={cartItem}
						onRemove={() => removeFromCart(cartItem.product)}
					/>
				)
			}
			{
				cartItems.length < 1 &&
				<Empty>
					<p>No product has been added to cart yet!</p>
					<Link to="/">Shop Now</Link>
				</Empty>
			}
		</Container>
	)
}

export default ShoppingCartList