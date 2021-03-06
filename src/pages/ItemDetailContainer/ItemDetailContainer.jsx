import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import db from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState ([]);
  const {id} = useParams();

  const getItem = async(id) => {
    try {
      const document = doc(db, "items", id)
      const response = await getDoc(document)
      const result = {id: response.id, ...response.data()}
      
      setItem(result)
  } catch (error) {
      console.log(error)
  }
}

  useEffect(() => {
      getItem(id)
    }, [id]);

    return (
      <div className='lista'>      
        <ItemDetail item = {item} />      
      </div>
    )
}

export default ItemDetailContainer