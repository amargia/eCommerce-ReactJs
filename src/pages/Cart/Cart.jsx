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
            <h3>Total: ${totalPrice()}</h3>
            <button onClick={() => clearCart()}>Vaciar Carrito</button>
            <Link to='/'><button>Seguir comprando</button></Link>
            <Link to='/checkout'><button>Finalizar compra</button></Link>
          </>
        ) : (
          <h3>El carrito está vacio</h3>
        )}
      </div>
    );
};

export default Cart