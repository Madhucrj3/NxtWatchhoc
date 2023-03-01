import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import GamingMain from '../../components/GamingMain';
import Navbar from '../../components/Navbar/Navbar';
import SideBarContd from '../../components/SideBarContainer';
import withFirstHoc from '../../components/withFirstHoc';
import { GameStyled } from './GamingComp';
const Gaming = () => {
    const navigate=useNavigate();
    const theme = useContext(UserContext);
     useEffect(() => {
     theme.setstatus("game");
  },[])
    useEffect(() => {
     if(localStorage.getItem('token')===null)
     navigate("/login");
    })
    return (
          <GamingMain />
    )
}

export default withFirstHoc(Gaming);