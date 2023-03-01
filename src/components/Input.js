import React, { useContext } from 'react'
import { UserContext } from '../App'; 
const Input = (props) => {
  const {type,name,label,value,handleChangeDeta,place}=props;
  const theme = useContext(UserContext);
  const handleChangeDet=(e)=>{
    handleChangeDeta(e.target.value);
  }
  return (
    <div className='InputLogin' style={{fontWeight:"800px"}}>
        <label htmlFor="username" >{label}</label>
        <input onChange={handleChangeDet} type={type} name={name} id={name} value={value} placeholder={place} style={{padding:" 0 1rem",color:theme.themes==="Light"?"#000":"#fff",backgroundColor:theme.themes==="Light"?"fff":"#000"}}/>
    </div>
  )
}

export default Input