import React from "react";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
    const { cartItems,  clearCart, totalPrice} = useCartContext();
    return (
        <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        {cartItems.length > 0 ? (
          <>
            <div className="header">Total: ${totalPrice()}</div>
            <button onClick={() => clearCart()}>Vaciar Carrito</button>
            <Link to='/'><button>Seguir comprando</button></Link>
            <Link to='/checkout'><button>Finalizar compra</button></Link>
          </>
        ) : (
          <div className="header">El carrito está vacio</div>
        )}
      </div>
    );
};

export default Cart