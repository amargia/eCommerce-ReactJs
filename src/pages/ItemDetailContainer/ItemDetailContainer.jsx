import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

function getItem(id) {
  const myPromise = new Promise((resolve,reject) => {
    const itemList = [
      {
        id:1,
        categoria: 'mats',
        producto: 'MAT YOGA 5mm',
        detalle: 'Mat antideslizante profesional de Yoga. Compuesto de PU premium.',
        precio: '$40.000',
        stock: 5,
        imgUrl: '/imagenes/mat5mm.jpg'
      },
      {
        id:2,
        categoria: 'mats',
        producto: 'MAT YOGA 3mm',
        detalle: 'Mat Yoga antideslizante, fácil de limpiar y liviano. Compuesto de PVC.',
        precio: '$35.000',
        stock: 5,
        imgUrl: '/imagenes/mat3mm.jpg'
      },
      {
        id:3,
        categoria: 'accesorios',
        producto: 'LADRILLO ECO',
        detalle: 'Ladrillo amigable con el medio ambiente de corcho 100%. Provee mayor firmeza y tenacidad que los otros materiales.',
        precio: '$5.000',
        stock: 5,
        imgUrl: '/imagenes/ladrillo.jpg'
      }
    ];
    const item = itemList.find(item => item.id === parseInt(id));
    setTimeout(() => {
      resolve(item);
    });
  });
  return myPromise;
}

function ItemDetailContainer() {
  const [item, setItem] = useState ([]);
  const {id} = useParams();

  useEffect(() => {
    getItem(id)
      .then(result => {
        setItem(result);
      })
    }, [id]);

    return (
      <div className='lista'>      
        <ItemDetail item = {item} />      
      </div>
    )
}

export default ItemDetailContainer