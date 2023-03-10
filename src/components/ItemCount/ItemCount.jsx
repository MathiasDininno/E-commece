import React from "react"
import { useState } from "react"
export const ItemCount = ({ valInicial, stock, onAdd }) => {

    const [contador, setContador] = useState(valInicial)

    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > valInicial && setContador(contador - 1)

    return (
        <div>
            <button className="btn btn-dark" onClick={() => restar() }>-</button>
            {contador}
            <button className="btn btn-dark" onClick={() => sumar() }>+</button>
            <button className="btn btn-light" onClick={() => onAdd(contador)}>Agregar al carrito</button>
        </div>
    );
}  