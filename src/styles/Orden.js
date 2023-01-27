import styled from "styled-components";

export const StyledOrden = styled.div`
  user-select: none;
   cursor:pointer;
  position: relative;
 & .orden{
	width: 3rem;
 } 
  & span {
    display: block;
      
  }

  & .options {
    position: absolute;
  }
  & .hiden {
    display: none;
  }

  & .show {
    display: block;
  }
  input[type="checkbox"] {
    margin: 0 0.5rem;
    width: 2rem;
    height: 2rem;
  }
	& .icon-orden{
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem
	}
	& span{
		stroke: ${({ theme }) => theme.fg};
	}
	& span:hover{
		color: ${({ theme }) => theme.hoverEnlace};
		stroke: ${({ theme }) => theme.hoverEnlace};
	}
	svg {
		stroke: ${({ theme }) => theme.fg};
	}
	svg:hover{
		stroke: ${({ theme }) => theme.hoverEnlace};
	}
`;
