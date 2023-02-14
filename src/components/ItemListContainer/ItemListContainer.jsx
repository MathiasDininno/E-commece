import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { consultarBDD } from "../../utils/funciones.js";
// import { ItemList } from "../ItemList/ItemList.jsx";
// import { Categorias } from "../Navbar/Categorias/Categorias.jsx";

export const ItemListContainer = () => {
    const { idCategoria } = useParams()
    const categorias = [{ id: 1, descripcion: "Product 1" },
    { id: 2, descripcion: "Product 2" },
    { id: 2, descripcion: "Product 3" }]
    const [productos, setProductos] = useState([])
    const getProductsByCategory = (id) => {
        fetch('../json/productos.json')
            .then(res => res.json())
            .then(json => setProductos(json.filter(el => el.category === parseInt(id)))
            )
    }
    const getProducts = () => {
        fetch('../json/productos.json')
            .then(res => res.json())
            .then(json =>
                setProductos(json)
            )
    }

    useEffect(() => {
        if (idCategoria) {
            const categoriaId = (categorias.find(e => e.descripcion === idCategoria)).id
            setTimeout(() => {
                getProductsByCategory(categoriaId)
            })
        } else {
            setTimeout(() => {
                getProducts()
            })
        }
    }, [idCategoria])

    return (
        <div className="row cardProductos">
            {productos}
        </div>
    );
}

