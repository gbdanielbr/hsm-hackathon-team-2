import { Link } from 'react-router-dom'
import { NavDiv } from './style'
import GamaLogo from '../../assets/images/gama-logo.png'

const NavBar = () => {
  return (
      <NavDiv>
        <img src={GamaLogo} alt="logo.png" />
        <div className="nav-links">
          <Link to="/">Cursos</Link>
          <Link to="/post">Post</Link>
        </div>
      </NavDiv>
  )
}

export default NavBar
