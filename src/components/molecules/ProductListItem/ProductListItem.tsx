import styled from 'styled-components'
import { Image, Button } from 'semantic-ui-react'

import Product from '../../../models/types/Product'
import FormattedPrice from '../../atoms/FormattedPrice'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 10px;
	gap: 20px;
	${props => props.theme.transitionDuration.medium}

	&:hover {
		${props => props.theme.boxShadow.hover}

		& > .details > button {
			visibility: visible;
		}
	}

	& > img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}
`

const Details = styled.div`
	display: flex;
	flex-direction: column;
	gap: 7px;
	padding: 10px 0;
	flex-grow: 1;

	& p {
		margin: 0;
	}

	& > .product-name {
		font-size: 16px;
		line-height: 18px;
		flex-grow: 1;
		font-weight: 500;
		height: 36px;
		margin-bottom: 20px;
	}

	& > .product-category-brand {
		font-size: 14px;
		line-height: 14px;
		height: 28px;
		color: ${props => props.theme.colors.gray};
	}

	& > .product-price {
		font-size: 22px;
		line-height: 20px;
		color: ${props => props.theme.colors.orange};
		font-weight: 600;
	}

	& > button {
		visibility: hidden;
		background-color: ${props => props.theme.colors.yellow} !important;
		color: white !important;
		padding: 10px;
		font-size: 16px;
		font-weight: bold;
		border: none;
		cursor: pointer;
		border-radius: 0 !important;
	}
`

interface Props {
	product: Product,
	onAdd: () => void
}

const ProductListItem = ({ product, onAdd }: Props) => {
	return (
		<Container>
			<Image
				src='/images/no_image.png'
				alt="product"
			/>
			<Details className="details">
				<p className="product-category-brand">{product.category} - {product.brand}</p>
				<p className="product-name">{product.displayName}</p>
				<p className="product-price"><FormattedPrice value={product.price} /></p>
				<Button onClick={onAdd}>
					Add to Cart
				</Button>
			</Details>
		</Container>
	)
}

export default ProductListItem