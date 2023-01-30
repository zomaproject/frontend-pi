import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { Footer } from '../styles/footer'

import { Nav, NavBg } from '../styles/Nav'
export default function Layout({ handleTema }) {
  const loading = useSelector(state => state.loading.loading)
  return (
    <div className='layout'>
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

          </Nav>
        </NavBg>
      </header>
      <Outlet />
      {loading ? '' :

        <Footer>
          <div className='container'>
            <NavLink to={'#'} className={'fa fa-github'}>{ }</NavLink>
            <NavLink to={'#'} className={'fa fa-linkedin'}>{ }</NavLink>
          </div>
        </Footer>
      }
    </div>
  )
}
