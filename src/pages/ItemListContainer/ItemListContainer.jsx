import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
//import { collection, getDocs, getFirestore, query, where, limit } from 'firebase/firestore';
import {ItemList} from '../../components/ItemList/ItemList';


function getProducts(categoria) {
  const myPromise = new Promise((resolve, reject) => {
    const itemList = [
      {
        id:1,
        categoria: 'mats',
        producto: 'MAT YOGA 5mm',
        precio: '$40.000',
        stock: 5,
        imgUrl: '/imagenes/mat5mm.jpg'
      },
      {
        id:2,
        categoria: 'mats',
        producto: 'MAT YOGA 3mm',
        precio: '$35.000',
        stock: 5,
        imgUrl: '/imagenes/mat3mm.jpg'
      },
      {
        id:3,
        categoria: 'accesorios',
        producto: 'LADRILLO ECO',
        precio: '$5.000',
        stock: 5,
        imgUrl: '/imagenes/ladrillo.jpg'
      }
    ];
    const filtroProd = categoria ? itemList.filter(p => p.categoria === categoria) : itemList;
    setTimeout(() => {
      resolve(filtroProd);
    }, 1000);
  });
  return myPromise;
}

function ItemListContainer() {
  const [items, setItems] = useState ([]);
  const { categoriaId } = useParams();

  useEffect(() => {
/*     const db = getFirestore();
    const itemCollection = collection(db, "items");
    const q = query(
      itemCollection,
      where('precio', '<', 40000),
      limit(1)
    );

    getDocs(q)
      .then(snapshot => {
        console.log(snapshot.docs.map(doc => { 
          return {...doc.data(), id: doc.id} 
        }));
      })
      .catch(
        err => console.log(err)
      ); */
    getProducts(categoriaId)
      .then((result => setItems(result)))
    },[categoriaId])
    return (
      <div>      
        <ItemList itemList={items}/>      
      </div>)
};

export default ItemListContainer