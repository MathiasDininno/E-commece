import { Link } from "react-router-dom";
export const Secciones = () => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={'/'}><img className="logo" src="../img/Logo-Caballo.jpg" alt=""/>Balcarce al galope</Link>
        </li>
    );
}