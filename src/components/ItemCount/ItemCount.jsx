import React, {useState} from 'react';

function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(initial);
    const incrementCount = () => {
        setCount(count + 1);
    };

    const decreaseCount = () => {
        setCount(count - 1);
    };

    return (
        <>
            <div className='row'>
                <div className='col'>
                    <button onClick={() => decreaseCount()} disabled={count <= 1}>-</button>
                </div>
                <div className='col'>
                    <div>{count}</div>
                </div>
                <div className='col'>
                    <button onClick={() => incrementCount()} disabled={count >= stock}>+</button>
                </div>
            </div>
            <div className='row botonAdd'>
                <div className='text-center'>
                    <button type="button" onClick={() => onAdd(count)} disabled={stock === 0}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount