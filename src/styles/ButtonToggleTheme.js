import styled, { keyframes } from "styled-components";

export  const ButtonTheme = styled.button` 
color: red;
& .toggle {
  border-radius: 50%;
  display: block;
  height: 24px;
  overflow: hidden;
  position: relative;
  width: 24px;
  transition: 0.5s all ease;
}


& .toggle:hover {
  cursor: pointer;
}

& .toggle:before {
  content: "";
  display: block;
  position: absolute;
}

& .toggle-light:before {
  animation-duration: 0.5s;
  animation-name: sun;
  background-color: var(--light-shade);
  border-radius: 50%;
  box-shadow: 10px 0 0 -3.5px var(--light-shade),
    -10px 0 0 -3.5px var(--light-shade),
    0 -10px 0 -3.5px var(--light-shade),
    0 10px 0 -3.5px var(--light-shade),
    7px -7px 0 -3.5px var(--light-shade),
    7px 7px 0 -3.5px var(--light-shade),
    -7px 7px 0 -3.5px var(--light-shade),
    -7px -7px 0 -3.5px var(--light-shade);
  height: 10px;
  left: 7px;
  top: 7px;
  width: 10px;
}

& .toggle-light:hover:before {
  background-color: var(--light);
  box-shadow: 10px 0 0 -3.5px var(--light),
              -10px 0 0 -3.5px var(--light),
              0 -10px 0 -3.5px var(--light),
              0 10px 0 -3.5px var(--light),
              7px -7px 0 -3.5px var(--light),
              7px 7px 0 -3.5px var(--light),
              -7px 7px 0 -3.5px var(--light),
              -7px -7px 0 -3.5px var(--light);
}

 @keyframes sun {
  from {
    background-color: var(--dark);
    box-shadow: 0 0 0 -5px var(--dark),
                0 0 0 -5px var(--dark),
                0 0 0 -5px var(--dark),
                0 0 0 -5px var(--dark),
                0 0 0 -5px var(--dark),
                0 0 0 -5px var(--dark),
                0 0 0 -5px var(--dark),
                0 0 0 -5px var(--dark);
  }
  to {
    background-color: var(--light-shade);
    box-shadow: 10px 0 0 -3.5px var(--light-shade),
                -10px 0 0 -3.5px var(--light-shade),
                0 -10px 0 -3.5px var(--light-shade),
                0 10px 0 -3.5px var(--light-shade),
                7px -7px 0 -3.5px var(--light-shade),
                7px 7px 0 -3.5px var(--light-shade),
                -7px 7px 0 -3.5px var(--light-shade),
                -7px -7px 0 -3.5px var(--light-shade);
  }
}

& .toggle-dark:before {
  animation-duration: .5s;
  animation-name: moon;
  background-color: var(--dark-shade);
  border-radius: 50%;
  height: 20px;
  left: 2px;
  top: 2px;
  width: 20px;
  z-index: 1;
}

& .toggle-dark:hover:before {
  background-color: var(--dark);
}

@keyframes moon {
  from {
    height: 0;
    left: 12px;
    top: 12px;
    width: 0;
  }
  to {
    height: 20px;
    left: 2px;
    top: 2px;
    width: 20px;
  }
}

.toggle-dark:after {
  animation-duration: .5s;
  animation-name: moon-shadow;
  background: var(--light);
  border-radius: 50%;
  content: "";
  display: block;
  height: 18px;
  position: absolute;
  right: -2px;
  top: -2px;
  width: 18px;
  z-index: 2;
}

@keyframes moon-shadow {
  from {
    background-color: var(--dark);
    height: 0;
    right: 7px;
    top: 7px;
    width: 0;
  }
  to {
    background-color: var(--light);
    height: 18px;
    right: -2px;
    top: -2px;
    width: 18px;
  }
}

`