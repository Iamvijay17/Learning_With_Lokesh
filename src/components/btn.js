import { useEffect } from 'react';
import '../App.css';

export function Btn1({ label, click, BtnColor }) {
  return (
    <button onClick={click} style={{ backgroundColor: BtnColor }} className='btn'>
      {label}
    </button>
  );
}

export function Btn2() {
  return <button></button>;
}

// style = {{ backgroundColor: 'red' }}    for jsx styling
// className = {btn}                      for css styling


  // const {label, click} = props;           // Destructuring
  // Btn1({ label, click })           // Destructuring
  // props.label



