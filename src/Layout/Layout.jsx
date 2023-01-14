import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Nav, NavBg } from '../styles/Nav'

export default function Layout({ handleTema }) {
  return (
    <div>
      <header>
        <NavBg>
          <Nav className='container'>
            <nav>
              <NavLink
                className={({ isActive }) => (isActive ? 'activo' : '')}
                to={'/home'}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'activo' : '')}
                to={'/about'}
              >
                About
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? 'activo' : '')}
                to={'/contacto'}
              >
                Contacto
              </NavLink>
            </nav>
            <button onClick={handleTema}>Cambiar tema</button>
          </Nav>
        </NavBg>
      </header>
      <main className='container'>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  )
}
