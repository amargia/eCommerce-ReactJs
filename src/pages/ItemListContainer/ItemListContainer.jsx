import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where, limit, doc } from 'firebase/firestore';
import db from "../../services/firebase";
import {ItemList} from '../../components/ItemList/ItemList';


const ItemListContainer = () => {
  const [items, setItems] = useState ([]);
  const { categoriaId } = useParams();

  const getProducts = async (categoria) => {
    try {
      const document = categoria ? query(collection(db, "items"), where('categoria', '==', categoria)) : collection(db, "items")
      const col = await getDocs(document)
      const result = col.docs.map((doc) => doc = { id:doc.id, ...doc.data()})
      setItems(result)
    } catch (error) {
      console.log(error)
    }

/*   const db = getFirestore();
  const itemCollection = collection(db, 'items');
  const q = query(
    itemCollection
  );

  return getDocs(q) */
};


  useEffect(() => {
    getProducts(categoriaId)
  }, [categoriaId])

/*   getProducts(categoriaId)
  .then(snapshot => {
    setItems(snapshot.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    }));
  }) */
    return (
      <div>      
        <ItemList itemList={items}/>      
      </div>)
};

export default ItemListContainer