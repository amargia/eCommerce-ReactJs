import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { CartContext, useCartContext } from "../../context/CartContext";
import { BiShoppingBag } from 'react-icons/bi';

function NavBar() {
	const { cartQty } = useCartContext(CartContext);
	return (
		<div className='fondoLogo'>
			<Link to='/'><img className='logo' src='/imagenes/logo.png' alt='logo Yoga' /></Link>
			<div className='nav'>
				<ul className='navLista gridLista'>
					<li><NavLink to='/categoria/mats' className={nav => nav.isActive ? 'nav-active' : ''}>MATS</NavLink></li>
					<li><NavLink to='/categoria/accesorios' className={nav => nav.isActive ? 'nav-active' : ''}>ACCESORIOS</NavLink></li>
					<li><NavLink to='/categoria/conjuntos' className={nav => nav.isActive ? 'nav-active' : ''}>CONJUNTOS</NavLink></li>
				</ul>
				{cartQty() > 0 ? <CartWidget className='carrito'/>
				: 
				<NavLink to='/cart' className='linkCart gridCart'>
					<div className='contenedorCarrito'>
						<h4 className="carrito"><BiShoppingBag /></h4>
					</div>
				</NavLink>}
			</div>
		</div>
	)
}

export default NavBar;