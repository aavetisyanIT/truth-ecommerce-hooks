import React, { useState, createContext, useEffect } from 'react';
import {
	addItemToCart,
	removeItemFromCart,
	filterItemFromCart,
	getCartItemsCount,
	countCartTotal,
} from './cart.utils';

export const CartContext = createContext({
	hidden: true,
	toggleHidden: () => {},
	cartItems: [],
	addItem: () => {},
	removeItem: () => {},
	clearItemFromCart: () => {},
	cartItemsCount: 0,
	total: 0,
});

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [cartItemsCount, setCartItemsCount] = useState(0);
	const [hidden, setHidden] = useState(true);
	const [total, setTotal] = useState(0);

	const addItem = item => setCartItems(addItemToCart(cartItems, item));
	const removeItem = item =>
		setCartItems(removeItemFromCart(cartItems, item));
	const toggleHidden = () => setHidden(!hidden);
	const clearItemFromCart = item =>
		setCartItems(filterItemFromCart(cartItems, item));

	useEffect(() => {
		setCartItemsCount(getCartItemsCount(cartItems));

		setTotal(countCartTotal(cartItems));
	}, [cartItems]);

	return (
		<CartContext.Provider
			value={{
				hidden,
				toggleHidden,
				cartItems,
				addItem,
				cartItemsCount,
				removeItem,
				clearItemFromCart,
				total,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
