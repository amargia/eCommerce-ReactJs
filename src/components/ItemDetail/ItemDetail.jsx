import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../context/CartContext";
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    const [qty, setQty] = useState('0');

    const {addItem} = useCartContext()
  
    const addHandler = (count) => {
      console.log('function on Add count is: ' + count)
      setQty(count)
      addItem({...item, qty: count})
    }

    return (
        <div className='card'>
            <div className='header'>{ item.producto }</div>
            <div className='content'>
                <div className='img-container'>
                    <img className='imgProd' src={ item.imgUrl } alt="Imagen del producto" />
                    <h5>Descripción: </h5>
                    <p className='detalleProd'>{ item.detalle }</p>
                    <br />
                    <div className='footer'>${ item.precio }</div>
                    <br />
                    <div>
                    <ItemCount stock={item.stock} initial={1} onAdd={addHandler} />
                    </div>
                    <div>
                    {qty>0 && <Link to="/cart"><button>Terminar mi compra</button></Link>}
                    </div>
                </div>
            </div>
        </div>
    )
};
  
export default ItemDetail