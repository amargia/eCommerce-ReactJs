import { createContext, useContext, useState } from "react";
import React from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState ([]);

    const addItem = (item) => {
        if(isInCart(item.id)){
            const oldProduct = getFromList(item.id);
            const newQty = oldProduct.qty + item.qty;
            const newProduct = {
                    ...item,
                    qty: newQty}
            const removeOldItem = cartItems.filter(product => product.id !== item.id)
            const cartNew = [...removeOldItem, newProduct]
            setCartItems(cartNew)
        }else{
            setCartItems([...cartItems,item])
        }
    }

    const getFromList = (id) => {
        return cartItems.find(i => i.id === id)
    }

    const removeOneItem = (id) => {
        const indexToRemove = cartItems.findIndex(item => item.id === id);
        if (cartItems[indexToRemove].qty === 1) {
            setCartItems(cartItems.filter(i => i.id !== id))
        } else {
            setCartItems(cartItems.map(p => p.id === id ? {...p, qty: p.qty - 1} : p));
        }
    }

    const removeItem = (id) => {
            setCartItems(cartItems.filter(i => i.id !== id))
    }

    const clearCart = () => {
        setCartItems([]);
    }

    const isInCart = (id) => {
        return cartItems.some(item => item.id === id);
    }

    const cartQty = () => { 
        return cartItems.reduce((totalQty, { qty }) => totalQty + qty, 0);
    }
    
    const totalPrice = () => {
        return cartItems.reduce((totalCost, prod ) => totalCost + (prod.precio*prod.qty), 0);
    };

    return(
        <CartContext.Provider value={{cartItems, addItem, removeItem, removeOneItem, clearCart, isInCart, cartQty, totalPrice}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;