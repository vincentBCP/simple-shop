import React, { useCallback, useEffect, useState } from 'react'
import Papa from 'papaparse'

import CartItem from '../models/types/CartItem'
import Product from '../models/types/Product'

interface Props {
	productList: Product[],
	cartItems: CartItem[],
	addToCart: (p: Product) => void,
	removeFromCart: (p: Product) => void
}

export const AppContext = React.createContext<Props>({
	productList: [],
	cartItems: [],
	addToCart: (p: Product) => {},
	removeFromCart: (p: Product) => {}
})

export const AppProvider = ({ children }: any) => {
	const [productList, setProductList] = useState<Product[]>([])
	const [cartItems, setCartItems] = useState<CartItem[]>([])

	useEffect(() => {
		fetch('/Products.csv')
		.then(resp => resp.text())
		.then(text => Papa.parse(text))
		.then(resp => {
			const products: Product[] = []
			resp.data.forEach((d: any, index) => {
				if (index === 0 || !d[1]) return

				products.push({
					id: d[0],
					displayName: d[1],
					barcode: d[2],
					price: Number(d[3]),
					brand: d[4],
					category: d[5]
				})
			})

			setProductList(products)
		})
		.catch(err => console.error(err))
	}, [])

	const addToCart = useCallback((product: Product) => {
		const index = cartItems.findIndex(c => c.product.id === product.id)

		if (index === -1) {
			setCartItems([
				...cartItems,
				{ product: product, quantity: 1 } as CartItem
			])
			return
		}

		const newCartItems = [...cartItems]
		newCartItems[index].quantity = newCartItems[index].quantity + 1
		setCartItems(newCartItems)
	}, [cartItems])

	const removeFromCart = useCallback((product: Product) => {
		const index = cartItems.findIndex(c => c.product.id === product.id)

		if (index === -1) return

		const newCartItems = [...cartItems]
		newCartItems.splice(index, 1)
		
		setCartItems([...newCartItems])
	}, [cartItems])

	return (
		<AppContext.Provider
			value={{
				productList: productList,
				cartItems: cartItems,
				addToCart: addToCart,
				removeFromCart: removeFromCart
			}}
		>
			{children}
		</AppContext.Provider>
	)
}