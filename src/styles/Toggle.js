import styled from "styled-components";

export const ToggleTheme = styled.div`
.label{
  background-color: #263238;
  width: 50px;
  height: 24px;
  padding: 5px;
  border-radius: 50px;  
  position: relative;
  display: flex;
  transition: background 0.2s linear;
  justify-content: space-between;
  align-items: center;
}

.ball{
  background-color: #f5f5f5;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 2px;
  transition: transform 0.2s linear;
}

.checkbox{
  opacity: 0;
  position: absolute;
}

.checkbox:checked + .label .ball{
  transform: translateX(24px);
}

.fa-sun{
  color: #ffc400;
}
.fa-moon{
  color: #bdbdbd;
}
`