import React from 'react';
import Item from '../Item/Item';

export const ItemList = ({itemList}) => {
    return (
        <>
            <div className="lista">
                {itemList.map(item => <Item item={item} key={item.id} />)}
            </div>
        </>
    )
}