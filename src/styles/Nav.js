import styled from 'styled-components'

export const NavBg = styled.div`
  background: ${({ theme }) => theme.bg2};
  /* padding: 0.9rem; */
  margin-bottom: 5rem;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 4rem;
  a {
    color: ${({ theme }) => theme.fg};
    font-weight: 700;
    font-size: 2rem;
    margin-right: 5rem;
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

button {
    background: ${({ theme }) => theme.bg2};
    border: 0;
    color: ${({ theme }) => theme.fg};
    transition-property: border-bottom;
    cursor: pointer;
}
`
