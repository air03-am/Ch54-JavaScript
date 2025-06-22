
const Navbar = ({title}) => {
    return (
        <header>
            <h2>{title}</h2>
            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Peliculas</a>
                </li>
                <li> 
                    <a href="#">Libros</a>
                </li>
            </ul>
        </header>
    );
};

export { Navbar };