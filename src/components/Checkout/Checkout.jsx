import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import db from '../../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import './Checkout.css';
import Spinner from '../Spinner/Spinner';

const Checkout = () => {
    const {cartItems, totalPrice, clearCart} = useContext(CartContext);
    const [load, setLoad] = useState(false);
    const [orderId, setOrderId] = useState();

    const [buyer, setBuyer] = useState({
        Nombre:'',
        Email:'',
        Telefono:'',
    });
    
    const {Nombre, Email, Telefono} = buyer
    
    const handleInputChange = (e) => {
        setBuyer(({...buyer, [e.target.name] : e.target.value}))
    }
    
    const generateOrder = async(data) => {
        setLoad(true)
        try {
            const col = collection(db, "orders")
            const order = await addDoc(col, data)
            setOrderId(order.id)
            clearCart()
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const fecha = new Date()
        const items = cartItems.map(e => {return {id:e.id, title:e.producto, price:e.precio, quantity:e.qty }})
        const total = totalPrice()
        const data = {fecha, buyer, items, total}
        console.log("datos", data)
        generateOrder(data)
    }
    return (
        <>
            <h1>Finalizar compra</h1>
            <hr />
            {load ? <Spinner /> : (!orderId&& <div>
                    <h4>Completa tus datos:</h4>
                <br />
                <form onSubmit={handleSubmit}>
                    <input type="text" name='Nombre' placeholder='Nombre' value={Nombre} onChange={handleInputChange} required />
                    <br />
                    <input type="email" name='Email' placeholder='E-mail' value={Email} onChange={handleInputChange} required />
                    <br />
                    <input type="number" name="Telefono" placeholder='Número de teléfono' value={Telefono} onChange={handleInputChange} required />
                    <br />
                    <input type="submit" value="Finalizar compra" className="button" />
                </form>
            </div>)
            }
            <div>
            {
                orderId&& (
                    <div>
                        <h4>Compra realizada con éxito!</h4>
                        <h4>{`Su código de compra es ${orderId}`}</h4>
                        <Link to="/"><button>Realizar una nueva compra</button></Link>
                    </div>
                )
            }
            </div>
        </>
    )
}

export default Checkout;