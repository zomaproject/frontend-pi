import styled from "styled-components";

export const StyleAlert = styled.div`
  color: white;
  text-align: center;
  font-weight: 900;
  margin: 5rem auto;
  padding: 0.5rem;
  border-radius: 1rem;

  &.error {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  }
   &.success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb
  }
`;
