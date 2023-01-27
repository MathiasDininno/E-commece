import React from 'react';

export const CartWidget = ({cantidadCarrito}) => {
    return (
        <>
            <button className='btn btn-dark'>Carrito</button>
            <p>{cantidadCarrito}</p>
        </>
    );
}