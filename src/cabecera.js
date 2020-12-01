import {Link} from "react-router-dom"

function Cabecera() {

    return (<>
    <h1>Rutas en React</h1>
    <p>Estás en el ejercicio 2</p>
    <ul>
    <li>
    <Link to="/">Inicio</Link>
    </li>
    <li>
    <Link to="/perros">Perros</Link>
    </li>
    <li>
    <Link to="/gatos">Gatos</Link>
    </li>
    </ul>
    </>)

}

export default Cabecera;
