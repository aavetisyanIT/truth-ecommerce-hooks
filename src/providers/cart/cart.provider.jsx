import React, { useState, createContext } from 'react';
import { addItemToCart } from './cart.utils';

export const CartContext = createContext({
	hidden: true,
	toggleHidden: () => {},
	cartItems: [],
	addItem: () => {},
	removeItem: () => {},
	clearItemFromCart: () => {},
	cartitemsCoutn: 0,
});

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);
	const [cartItemsCount, setCartItemsCount] = useState(0);
	const [hidden, setHidden] = useState(true);

	const addItem = item => setCartItems(addItemToCart(cartItems, item));
	const toggleHidden = () => setHidden(!hidden);

	return (
		<CartContext.Provider
			value={{
				hidden,
				toggleHidden,
				cartItems,
				addItem,
				cartItemsCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
