import { Link } from "react-router-dom";
import { useDarkModeContext } from "../context/DarkModeContext";

export const Item = ({ item }) => {

    const { darkMode } = useDarkModeContext()
    console.log(darkMode)

    return (
        <div className="card mb-3 cardProducto border-primary" style={{ maxWidth: '715px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} className="card-img-top" alt={`imagen de ${item.nombre}`} />
                </div>
                <div className="col-md-8">
                    <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody'}`}>
                        <h5 className="card-title">{item.raza}</h5>
                        <p className="card-text">${item.precio}</p>
                        <Link className="nav-link" to={`/item/${item.id}`}><button className="btn btn.dark">Ver Animal</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}