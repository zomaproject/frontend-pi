import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Footer } from '../styles/footer'
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
      <Footer>
        <div className='container'>
         <NavLink to={'#'} className={'fa fa-github'}></NavLink> 
         <NavLink to={'#'} className={'fa fa-linkedin'}></NavLink> 
        </div>
      </Footer>
    </div>
  )
}
