import { NavLink } from 'react-router-dom'
import { pages } from '../routes'

export default function Navbar() {
  return (
    <header className="navbar">
      <span className="navbar-brand">react_plot</span>
      <nav className="navbar-nav">
        {pages.map((page) => (
          <NavLink
            key={page.path}
            to={page.path}
            end
            className={({ isActive }) =>
              `nav-link${isActive ? ' nav-link--active' : ''}`
            }
          >
            {page.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
