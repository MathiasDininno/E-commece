import { CartWidget } from "../CartWidget/CartWidget";
import { Categorias } from "../Categorias/Categorias";
export const Navbar = ({ nombre }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand" href="#">{nombre}</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    {Categorias}
                    <CartWidget cantidadCarrito = {10}/>
                </div>
            </div>
        </nav>
    );
}