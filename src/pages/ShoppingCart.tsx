import styled from 'styled-components'
import ShoppingCartList from '../components/organisms/ShoppingCartList'

const Container = styled.div`
	padding: 50px 0;
`

const ShoppingCart = () => {
	return (
		<Container>
			<ShoppingCartList />
		</Container>
	)
}

export default ShoppingCart