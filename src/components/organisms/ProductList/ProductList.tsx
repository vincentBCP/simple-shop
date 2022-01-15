import { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { Pagination } from 'semantic-ui-react'
import styled from 'styled-components'
import { AppContext } from '../../../context/app.context'
import ProductListItem from '../../molecules/ProductListItem'

const Container = styled.div`
	& > .pagination {
		display: flex;
		justify-content: flex-end;

		&:nth-child(1) {
			margin-bottom: 30px;
		}

		&:nth-child(3) {
			margin-top: 50px;
		}
	}
`

const List = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 25px;
`

const ITEMS_PER_PAGE = 20

const ProductList = () => {
	const [page, setPage] = useState(1)
	const appContext = useContext(AppContext)
	const { productList, addToCart } = appContext

	const filterList = () => {
		const p = page - 1;
		return productList.slice(p * ITEMS_PER_PAGE, p * ITEMS_PER_PAGE + ITEMS_PER_PAGE)
	}

	const getTotalPages = () => {
		const p = Number(productList.length / ITEMS_PER_PAGE)
		const modulos = productList.length % ITEMS_PER_PAGE
		const pages = Number(p.toString().split('.')[0]) + (modulos !== 0 ? 1 : 0)

		return pages
	}

	return (
		<Container>
			<div className="pagination">
				<Pagination
					ellipsisItem={null}
					activePage={page}
					onPageChange={(ev, data) => {
						setPage(Number(data.activePage))
					}}
					totalPages={getTotalPages()}
				/>
			</div>
			<List>
				{
					filterList().map((product, index) =>
						<ProductListItem
							key={index}
							product={product}
							onAdd={() => {
								addToCart(product)
								toast.success("Item added to cart!")
							}}
						/>
					)
				}
			</List>
			<div className="pagination">
				<Pagination
					ellipsisItem={null}
					activePage={page}
					onPageChange={(ev, data) => {
						setPage(Number(data.activePage))
					}}
					totalPages={getTotalPages()}
				/>
			</div>
		</Container>
	)
}

export default ProductList