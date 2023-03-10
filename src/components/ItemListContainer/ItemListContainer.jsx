import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { consultarBDD } from "../../utils/funciones.js";

import { ItemList } from "../ItemList/ItemList.jsx";
import { getProductos } from "../../utils/firebase.js";

import { useDarkModeContext } from "../context/DarkModeContext";


export const ItemListContainer = () => {
    const { idCategoria } = useParams()
    const [productos, setProductos] = useState([])
    const { darkMode } = useDarkModeContext()

    useEffect(() => {
        if (idCategoria) { //undefined me da falso
            getProductos().then(products => {
                const prods = products.filter(prod => prod.idCategoria === idCategoria)
                const items = <ItemList prods={prods} plantilla="Item"/>
                setProductos(items)
            })
        } else {
            getProductos().then(prods => {
                const items = <ItemList prods={prods} plantilla="Item"/>
                setProductos(items)
            })
        }
    }, [idCategoria])

    return (
        <div className="row cardProductos">
            <h1 className={`title ${darkMode ? 'titlePrincipal' : 'titlePrincipalDark'}`}>Balcarce al galope</h1>
            {productos}
        </div>
    )
}