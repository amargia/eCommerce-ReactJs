import React from "react";
import { useCartContext } from "../../context/CartContext";
import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
    const { removeItem, removeOneItem } = useCartContext();
    const { producto, qty, precio, id, imgUrl } = item;
  
    return (
      <div>
        <div className='header'>{producto}</div>
        <div className='img-container'>
          <Link to={'/item/' + id}><img className='imgProd' src={imgUrl} alt="Imagen del producto" /></Link>
        </div>
        <div className='footerItem'>Unidades: {qty}</div>
        <div className='footerItem'>Precio unitario: ${precio}</div>
        <button onClick={() => removeOneItem(id)}>Eliminar 1 item</button>
        <button onClick={() => removeItem(id)}>Eliminar todos</button>
      </div>
    );
};
  

export default CartItem;