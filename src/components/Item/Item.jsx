import React from "react";
import { Link } from 'react-router-dom';
import './Item.css';

function Item({ item }) {
    return (
        <div className='cardItem'>
            <div className='header'>{ item.producto }</div>
            <div className='contentItem'>
                <div className='img-container'>
                    <img className='imgProd' src={item.imgUrl} alt="Imagen del producto" />
                </div>
                <Link to={'/item/' + item.id}><button className="botonDetalle">Detalle</button></Link>
                <div className='footerItem'>{ item.precio }</div>
            </div>
        </div>
    )
  }
  
export default Item