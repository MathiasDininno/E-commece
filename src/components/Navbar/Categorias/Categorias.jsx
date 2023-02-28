import { Link } from "react-router-dom";
export const Categorias = () => {

  return (
    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <button className="btn btn-dark">Categorias</button>
      </Link>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to={'/category/caballo-mustang'}>Caballo Mustang</Link></li>
        <li><Link className="dropdown-item" to={'/category/caballo-pinto'}>Caballo Pinto</Link></li>
        <li><Link className="dropdown-item" to={'/category/caballo-arabe'}>Caballo Arabe</Link></li>
      </ul>
    </li>
  )
}
