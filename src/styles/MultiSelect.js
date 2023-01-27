import styled from "styled-components";

export const StyleMultiSelect = styled.div`
.icon-filter {
  width: 2rem;
}
  user-select: none;
 .dropdown-list-multiselect {
  position: relative;
  display: inline-block;
}

& .dropdown-list-multiselect__selected-options {
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 5px;
  min-height: 3rem;
  min-width: 30rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;

}

& .dropdown-list-multiselect__selected-option {
  display: inline-block;
  margin-right: 5px;
  padding: 3px;
  background-color: #ccc;
}

& .dropdown-list-multiselect__remove-button {
  cursor: pointer;
  margin-left: 5px;
  padding: 2px;
  border: none;
  background-color: transparent;
}

& .dropdown-list-multiselect__options {
  position: absolute;
  /* top: 100%; */
  /* left: 0; */
  /* right: 0; */
  /* border: 1px solid #ccc; */
  padding: 5px;
  background-color: #BFDB38;
  border-radius: 1rem;
  z-index: 1;
}

& .dropdown-list-multiselect__option {
  cursor: pointer;
  padding: 5px;
  background: #BFDB38;
  /* border-radius: 1rem; */
}

& .dropdown-list-multiselect__option.selected {
  background-color: #ccc;
}

li:hover{
  background-color: ${({theme}) => theme.hoverEnlace};
}
ul {
  /* background-color: red; */
}
li {
  list-style: none;
  text-decoration: none;
  color: #000;
  text-transform: capitalize;
  font-weight: 900 ;
}
`;
