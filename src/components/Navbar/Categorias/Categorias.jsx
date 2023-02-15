import { Link } from "react-router-dom";
export const Categorias = () => {

  return (
    <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <button className="btn btn-dark">Categorias</button>
      </Link>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to={'/category/caballo-bagual'}>Caballo Bagual</Link></li>
        <li><Link className="dropdown-item" to={'/category/caballo-gateado'}>Caballo Gateado</Link></li>
        <li><Link className="dropdown-item" to={'/category/caballo-pinto'}>Caballo Pinto</Link></li>
        <li><Link className="dropdown-item" to={'/category/caballo-alazan'}>Caballo Alazan</Link></li>
      </ul>
    </li>
  )
}
