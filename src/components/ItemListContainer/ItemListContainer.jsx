import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
                const prods = products.filter(prod => prod.stock > 0).filter(prod => prod.categoria === idCategoria)
                const items = <ItemList prods={prods} plantilla="Item"/>
                setProductos(items)
                console.log(idCategoria)
            })
        } else {
            getProductos().then(products => {
                const prods = products.filter(prod => prod.stock > 0)
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