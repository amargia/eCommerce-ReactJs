import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from "../../context/CartContext";
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    const [showButton, setButton] = useState('addToCart');

    const {addItem} = useCartContext()
  
    const addHandler = (count) => {
      console.log('function on Add count is: ' + count)
      setButton('goToCart')
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
                    <div className='footer'>{ item.precio }</div>
                    <br />
                    <div>
                    {
                        showButton === 'addToCart' ? <ItemCount stock={item.stock} initial={1} onAdd={addHandler} />
                        :
                        <Link to="/cart"><button>Terminar mi compra</button></Link>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
};
  
export default ItemDetail