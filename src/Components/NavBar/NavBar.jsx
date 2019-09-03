import React from 'react';
import {ItemList} from './ItemList';

export const NavBar = (props) => {

    const handleClick = (event) => {
        const ClickedItem = event.target;
        document.querySelector('.active').classList.remove('active');
        ClickedItem.classList.add('active');
    }
    const ItemsList = props.items.map((item, index) => (
        <ItemList key={index} link="#" text={item}
                         initialActiveItem={props.initialActiveItem === item ? 'active': null} />
    ));

    return (
        <div className={props.clsName} onClick={handleClick}>
            {ItemsList}
        </div>
    )
}