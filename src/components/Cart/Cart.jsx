import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
    const carrito = [{ id: 6, idCategoria: "caballo-arabe", cant: 3, raza: "Arabe", edad: 4, precio: 400000, stock: 6, img: "Arabe.jpg"}, {id: 6, idCategoria: "caballo-arabe", cant: 5, raza: "Arabe", edad: 4, precio: 400000, stock: 6, img: "Arabe.jpg"},{ id: 6, idCategoria: "caballo-arabe", cant: 7, raza: "Arabe", edad: 4, precio: 400000, stock: 6, img: "Arabe.jpg" }]
    return (
        <>
            {
                carrito.length === 0
                    ? //Si no existen productos en el carrito
                    <>
                        <h2>Carrito vacio</h2>
                        <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                    </>
                    : //Si existen productos en el carrito
                    <div className="container cartContainer">
                        <ItemList prods={carrito} plantilla="ItemCart"/>
                        <div className="divButtons">
                            <p>Resumen de la compra: PrecioTotal</p>
                            <button className="btn btn-danger" onClick={() => console.log("Vaciar Carrito")}>Vaciar carrito</button>
                            <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar comprando</button></Link>
                            <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar compra</button></Link>
                        </div>
                    </div>
            }
        </>
    )

}

