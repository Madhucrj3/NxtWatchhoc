import React, { useEffect, useState,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Logo from '../Logo';
import "./Login.css";
import { UserContext } from '../../App';
function Login() {
  const [showPassword, setshowPassword] = useState(false);
  const [userdetails, setuserdetails] = useState({
    username:'',
    password:''
  })
  const [validCred, setvalidCred] = useState(false);
  const navigate = useNavigate();
  const theme = useContext(UserContext);
  console.log(theme);
  useEffect(() => {
    const token=localStorage.getItem('token');
    if(token)
    {
     navigate("/");
    }
 }, [])
  const handlechangecheck=()=>{
    setshowPassword(prevState=> !prevState);
  }
  const fetchtoken=async (userDetails)=>{
    const URL = 'https://apis.ccbp.in/login';
    await fetch(URL, {
        method: "POST",
        body: JSON.stringify(userDetails)
    })
   .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    if(data.jwt_token!==undefined)
    {
      localStorage.setItem("token", data.jwt_token)
       navigate('/');
    }
    else{

      setvalidCred(true);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }
  const handleCred=()=>{
    fetchtoken(userdetails);
  }
  const handleChangeDet=(e)=>{
    setuserdetails(prevState=>{
      return {
        ...prevState,
        username:e
      }
    })
  }
  const handleChangeDetPass=(e)=>{
    setuserdetails(prevState=>{
      return {
        ...prevState,
        password:e
      }
    })
  }
  const handleClickTheme2=()=>{
    console.log("Clicked")
  }
  return (
    <div className='LoginContd' style={{backgroundColor: theme.themes==='Light'?'#fff' :'#313131'}}>
      <div className='LoginDiv'style={{backgroundColor: theme.themes==='Light'?'#fff' :'#000',color:theme.themes==='Light'?'#7e858e':'#fff'}}>
        <div className='LoginDivimg' style={{color:'#fff'}}>
        <Logo handleClicklogo={handleClickTheme2} logoStyles={{width:"200px"}} src1={theme.themes==="Light"? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"} alt1="logo"/>
        </div>
        <Input place="Username"  type="text" name="username" label="USERNAME" value={userdetails.username} handleChangeDeta={handleChangeDet}/>
        <Input place="Password"  type={showPassword===true ?"text":"password"} name="password" label="PASSWORD" value={userdetails.password} handleChangeDeta={handleChangeDetPass}/>
        <Checkbox type="checkbox" name="show" label="SHOW" handlechangecheck={handlechangecheck}/>
        <Button text="Login" btnstyle={{width: '100%',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: '#3b82f6',
    border: 'none',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer'}} handleCred={handleCred} />
    {validCred && <p  className='wronCred'>Enter Correct Credentials</p>}
      </div>
    </div>
  )
}

export default Login
// rahul@2021