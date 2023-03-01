import React, { useContext } from 'react'
import { UserContext } from '../App';
const Checkbox = (props) => {
  const globalData=useContext(UserContext);
  const {type,name,handlechangecheck,label}=props;
  const handlechangechecked=()=>{
    handlechangecheck();
  }
  return (
    <div className='InputLoginpass' style={{color:globalData.themes==='Light'?"#000":"#fff" }}>
    <input type={type} name={name} id={name} onClick={handlechangechecked} />
    <label htmlFor={name}>Show Password</label>
    </div>
  )
}

export default Checkbox