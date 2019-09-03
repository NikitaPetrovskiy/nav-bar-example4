import React from 'react';

export const ItemList = (props) => {
    return (
        <a className={props.initialActiveItem} href={props.link}>{props.text}</a>
    )
}