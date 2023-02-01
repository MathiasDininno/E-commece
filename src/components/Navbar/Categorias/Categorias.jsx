export const Categorias = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Seguir viendo
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Servicio</a></li>
                <li><a className="dropdown-item" href="#">Caballo overo</a></li>
                <li><a className="dropdown-item" href="#">Caballo tobiano</a></li>
                <li><a className="dropdown-item" href="#">Caballo alazan</a></li>
            </ul>
        </li>
    );
}