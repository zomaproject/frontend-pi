import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import GlobalStyles from './styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { useState } from 'react'
import { useEffect } from 'react'
import ErorPage from './components/ErorPage'
import Home from './pages/Home'
import { Provider, useDispatch } from 'react-redux'
import { dowloadData } from './redux/actions'
function App() {
  const [temaActual, setTemaActual] = useState(
    localStorage.getItem('tema') || 'dark'
  )
  const dispatch = useDispatch()
  const handleTema = () => {
    if (temaActual === 'dark') return setTemaActual('light')
    if (temaActual === 'light') return setTemaActual('dark')
  }
  useEffect(() => {
    localStorage.setItem('tema', temaActual)
  }, [temaActual])

  useEffect(() => {
    dispatch(dowloadData())
  }, [])
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme[temaActual]}>
          <GlobalStyles />
          <Routes>
            <Route
              path='/'
              element={<Layout handleTema={handleTema} />}
              errorElement={<ErorPage />}
            >
              <Route path='/home' element={<Home />} />
              <Route path='*' element={<ErorPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
  )
}

export default App
