import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { useDarkModeContext } from "../context/DarkModeContext";
import { useCarritoContext } from "../context/CarritoContext";

export const ItemDetail = ({prod}) => {
    const { darkMode } = useDarkModeContext ()
    const { addItem } = useCarritoContext()

    const onAdd = (cantidad) =>{ //Agregar al carrito
        addItem(prod, cantidad)
    }

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={prod.img} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
            <div className={`card-body ${darkMode && "itemDetailBodyDark"}`}>
                    <p className="card-text">Raza: {prod.raza}</p>
                    <p className="card-text">Valor: ${prod.precio}</p>
                    <p className="card-text">Edad: {prod.edad}</p>
                    <p className="card-text">Stock: {prod.stock}</p>
                    <ItemCount valInicial={1} stock={prod.stock} onAdd={onAdd}/>
                    <Link className="nav-link" to={'/cart'}><button className="btn btn-dark">Finalizar Compra</button></Link>
                </div>
            </div>
        </div>
    );
}
