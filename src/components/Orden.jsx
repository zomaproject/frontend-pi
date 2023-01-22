import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


const Orden = ({setOrden}) => {


  const dispatch = useDispatch()
  const [check, setCheck] = useState({
    'A-Z': false,
    'Z-A': false,
    'asc': false,
    'des': false
  })

  const handleCheck = (e) => {
    (Object.keys(check).forEach(key => {
      check[key] = false;
    }));  
    if(e.target.checked){
      setCheck({
        ...check,
        [e.target.id]: true
      })
      setOrden(e.target.id)
    }
    else{
      setCheck({
        ...check,
        [e.target.id]: false
      })
      setOrden('')
    }
  }


  return (
    <div>

      <div>
        <label htmlFor="a-z">a-z</label>
        <input type="checkbox" id='A-Z' checked={check['A-Z']}  onChange={handleCheck} />
      </div>

      <div>
        <label htmlFor="z-a">z-a</label>
        <input type="checkbox" id='Z-A' checked={check['Z-A']} onChange={handleCheck} />
      </div>

      <div>
        <label htmlFor="0-9">Menor a Mayor </label>
        <input type="checkbox" id='asc' checked={check['asc']} onChange={handleCheck} />
      </div>

      <div>
        <label htmlFor="9-0">Mayor a menor</label>
        <input type="checkbox" id='des' checked={check['des']} onChange={handleCheck} />
      </div>
    </div>
  );
};

export default Orden;