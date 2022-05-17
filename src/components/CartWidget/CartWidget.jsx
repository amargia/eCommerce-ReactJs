import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiShoppingBag } from 'react-icons/bi';
import { CartContext, useCartContext } from "../../context/CartContext";
import '../NavBar/NavBar.css';

const CartWidget = () => {
	const { cartQty } = useCartContext(CartContext);
	return (
		<NavLink to='/cart' className='linkCart gridCart'>
			<div className='contenedorCarrito'>
				<h4 className="carrito"><BiShoppingBag /></h4>
				<span>{cartQty()}</span>
			</div>
		</NavLink>
	)
};

export default CartWidget;