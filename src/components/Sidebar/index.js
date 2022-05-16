import './index.scss'
import LogoE from '../../assets/images/logo-e.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoE} alt="Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ehabmnada/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="profiles" icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/hopamnada"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="profiles" icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
