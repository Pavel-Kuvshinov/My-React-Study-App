import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  
    return (
      <>
        <nav className="navigation">
            <NavLink className="navigation__link" to="/">Home</NavLink>
            <NavLink className="navigation__link" to="/uncontrolled-form">Uncontrolled Form</NavLink>
            <NavLink className="navigation__link" to="/react-hook-form">React Hook Form</NavLink>
        </nav>
      </>
    )
  }
  
  export default Navigation