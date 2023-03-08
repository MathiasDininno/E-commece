import { Link } from "react-router-dom";
import React from "react";
export const Secciones = React.memo(() => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={'/'}><img className="logo" src="https://firebasestorage.googleapis.com/v0/b/balcarce-al-galope.appspot.com/o/Logo-Caballo.jpg?alt=media&token=0819343a-6e59-4202-9d83-5937f5d93b67" alt=""/></Link>
        </li>
    );
})