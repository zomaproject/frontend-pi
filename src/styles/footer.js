import styled from "styled-components";

export const Footer = styled.footer`

  display: flex;
  /* margin-top: 6rem; */
  border-top: 0.25rem solid ${({ theme }) => theme.fg};
  & a {
    padding: 2rem;
    color: ${({ theme }) => theme.fg};
    font-size: 3rem;
    transition-property: opacity;
  }
  & a:last-child {
    margin-right: 0;
  }
  & a:hover {
    opacity: 0.5;
  }
`;
