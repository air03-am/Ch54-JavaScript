import { Link } from "react-router-dom";

/*
 El componente Link permite a los usuarios moverse entre
 las diferentes "páginas" de la aplicación pero evita 
 recargas completas, preservando el estado de la aplicación.
*/

const Navbar = ({title}) => {
    return (
        <header>
            <h2>{title}</h2>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li><Link to="/products">Productos</Link></li>
                <li>
                    <Link to="#">Peliculas</Link>
                </li>
                <li> 
                    <Link to="#">Libros</Link>
                </li>
            </ul>
        </header>
    );
};

export { Navbar };