import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App';
import { HomeStyled } from '../Component';
import HomeMainContd from '../components/HomeMainContainer';
import Navbar from '../components/Navbar/Navbar';
import SideBarContd from '../components/SideBarContainer';
import withFirstHoc from '../components/withFirstHoc';
function Home() {
  const theme = useContext(UserContext);
  
  useEffect(() => {
     theme.setstatus("home");
  },[])
  const navigate=useNavigate();
  useEffect(() => {
   if(localStorage.getItem('token')===null)
   navigate("/login");
  })
  return (
      <HomeMainContd />
  )
}

export default withFirstHoc(Home)