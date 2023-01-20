import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import ThemeIcon from '../components/ThemeIcon'

import { Footer } from '../styles/footer'
import { Nav, NavBg } from '../styles/Nav'

export default function Layout({ handleTema, temaActual }) {
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
              <NavLink  
                to={'/create-recipe'}
                className={({ isActive }) => (isActive ? 'activo' : '')} >
                 CookBook 
                </NavLink>
            </nav>
            <button onClick={handleTema}>
              {/* <ThemeIcon theme={temaActual} /> */}
              dark
            </button>
          </Nav>
        </NavBg>
      </header>
      <Outlet />
      {/* <Footer>
        <div className='container'>
          <NavLink to={'#'} className={'fa fa-github'}>{}</NavLink>
          <NavLink to={'#'} className={'fa fa-linkedin'}>{}</NavLink>
        </div>
      </Footer> */}
    </div>
  )
}
