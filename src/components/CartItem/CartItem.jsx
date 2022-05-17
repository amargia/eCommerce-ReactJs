import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
    const { removeItem, removeOneItem } = useCartContext();
    const { producto, qty, precio, id } = item;
  
    return (
      <div>
        <h1>{producto}</h1>
        <h4>Unidades: {qty}</h4>
        <h4>Precio unitario: {precio}</h4>
        <button onClick={() => removeOneItem(id)}>Eliminar 1 item</button>
        <button onClick={() => removeItem(id)}>Eliminar todos</button>
      </div>
    );
};
  

export default CartItem;