import styled from 'styled-components'

export const NavBg = styled.div`
  background: ${({ theme }) => theme.bg2};
  padding: 1rem;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  a {
    color: ${({ theme }) => theme.fg};
    font-weight: 700;
    font-size: 2rem;
    margin-right: 5rem;
    padding: 1rem;
    transition-property: border-bottom;
  }
  & a:last-of-type {
    margin-right: 0;
  }
  & a:hover {
    color: ${({ theme }) => theme.hoverEnlace};
  }

.activo {
    color: ${({ theme }) => theme.hoverEnlace};
    /* border-bottom: 0.2rem solid ${({ theme }) => theme.hoverEnlace}; */
  }
`
