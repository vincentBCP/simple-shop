import styled from 'styled-components'
import CartItem from '../../../models/types/CartItem'
import { Button, Icon, Image } from 'semantic-ui-react'
import FormattedPrice from '../../atoms/FormattedPrice'

const Container = styled.div`
	display: flex;
	gap: 20px;
	${props => props.theme.boxShadow.default}

	& > img {
		width: 100px;
		height: 100px;
		object-fit: cover;
	}

	& > button {
		width: 100px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: transparent !important;
		cursor: pointer;
		color: black !important;
		border-radius: 0 !important;
		margin: 0 !important;
		${props => props.theme.transitionDuration.medium}

		& i {
			margin-right: -7px !important;
		}

		&:hover {
			background-color: ${props => props.theme.colors.grayLightest} !important;
		}
	}
`

const Details = styled.div`
	flex-grow: 1;
	display: flex;
	align-items: center;

	& p {
		margin: 0;
	}

	& > .product-name {
		font-weight: 600;
		font-size: 16px;
		line-height: 16px;
		width: 70%;
	}

	& > .quantity {
		flex-grow: 1;
	}

	& > .sub-total {
		font-weight: 600;
		font-size: 22px;
		line-height: 22px;
		color: ${props => props.theme.colors.orange};
	}
`

interface Props {
	cartItem: CartItem,
	onRemove: () => void
}

const ShoppingCartListItem = ({ cartItem, onRemove }: Props) => {
	return (
		<Container>
			<Image
				src="/images/no_image.png"
				alt="product"
			/>
			<Details>
				<p className="product-name">{cartItem.product.displayName}</p>
				<p className="quantity">Qty: {cartItem.quantity}</p>
				<p className="sub-total"><FormattedPrice value={cartItem.quantity * cartItem.product.price}/></p>
			</Details>
			<Button onClick={onRemove}>
				<Icon name="close" size="large" />
			</Button>
		</Container>
	)
}

export default ShoppingCartListItem