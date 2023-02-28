import { CartWidget } from "../CartWidget/CartWidget";
import { Categorias } from "./Categorias/Categorias";
import { Secciones } from "./Secciones/Secciones"
import { BotonDarkMode } from "../BotonDarkMode/BotonDarkMode";

import { useDarkModeContext } from "../context/DarkModeContext";
export const Navbar = () => {

  const {darkMode} = useDarkModeContext()

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? "bg-primary" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Secciones />
            <Categorias />
          </ul>
          <CartWidget cantidadCarrito={9} />
          <BotonDarkMode/>
        </div>
      </div>
    </nav>
  )
}