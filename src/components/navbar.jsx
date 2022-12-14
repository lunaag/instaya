import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">InstaYA</a>
          <div id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                   <NavLink
                      style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
                      className="nav-link"
                      to="/home">Inicio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                      style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
                      className="nav-link"
                      to="/registro">Servicios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                      style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
                      className="nav-link"
                      to="/login">Sigue tu envio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                      style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}
                      className="nav-link"
                       to="/datempresa ">Contáctanos</NavLink>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )

}
export default Navbar;