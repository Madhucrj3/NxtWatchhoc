import { faFireFlameCurved, faGamepad, faHome, faVideo } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../App'
import SidebarMenuIcon from './SidebarMenuIcon'
const Handlesideiconsaved=styled.div`
background-color: ${props => props.theme==="Light" ? "#fff" : "#313131"} !important;
`;
const Siderbaricon = () => {
    const navigate=useNavigate();
    const val=useContext(UserContext);
    console.log(val);
    const handleSideIconhHome=()=>{
        val.setstatus("home");
        navigate("/");
        }
        const handleSideIconTrend=()=>{
          val.setstatus("trend");
        navigate("/trending");
        }
        const handleSideIconGame=()=>{
          val.setstatus('game');
        navigate("/gaming");
        }
        const handleSideIconSaved=()=>{
          val.setstatus("saved");
        navigate("/saveVideo");
        }
  return (
    <Handlesideiconsaved theme={val.themes}>
      <SidebarMenuIcon icons={faHome} handleClickSidebarIcon={handleSideIconhHome} text="Home" isActive={val.status==='home'?true:false}/>
      <SidebarMenuIcon icons={faFireFlameCurved} handleClickSidebarIcon={handleSideIconTrend} text="Trending" isActive={val.status==='trend'?true:false}/>
      <SidebarMenuIcon icons={faGamepad} handleClickSidebarIcon={handleSideIconGame} text="Gaming" isActive={val.status==='game'?true:false}/>
      <SidebarMenuIcon icons={faVideo} handleClickSidebarIcon={handleSideIconSaved} text="Saved Video" isActive={val.status==='saved'?true:false}/>
      </Handlesideiconsaved>
  )
}

export default Siderbaricon