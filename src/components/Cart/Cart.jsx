import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../context/CarritoContext"
export const Cart = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
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
                        <p>Resumen de la compra: ${new Intl.NumberFormat('de-DE').format (totalPrice())}</p>
                            <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar carrito</button>
                            <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar comprando</button></Link>
                            <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar compra</button></Link>
                        </div>
                    </div>
            }
        </>
    )

}

