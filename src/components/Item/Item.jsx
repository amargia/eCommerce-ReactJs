import React from "react";
import { Link } from 'react-router-dom';
import './Item.css';

function Item({ item }) {
    const { producto, precio, id, imgUrl } = item;
    return (
        <div className='cardItem'>
            <div className='header'>{ producto }</div>
            <div className='contentItem'>
                <div className='img-container'>
                    <img className='imgProd' src={imgUrl} alt="Imagen del producto" />
                </div>
                <Link to={'/item/' + id}><button className="botonDetalle">Detalle</button></Link>
                <div className='footerItem'>${ precio }</div>
            </div>
        </div>
    )
  }
  
export default Item