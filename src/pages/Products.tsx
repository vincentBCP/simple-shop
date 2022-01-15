import styled from 'styled-components'
import ProductList from '../components/organisms/ProductList'

const Container = styled.div`
	padding: 50px 0;
`

const Products = () => {
	return (
		<Container>
			<ProductList />
		</Container>
	)
}

export default Products