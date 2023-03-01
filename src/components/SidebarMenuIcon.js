import React, { useContext } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '../App';
const SidebarIcon=styled.div`
cursor:pointer;
margin: 5px 16px;
margin-bottom: 1rem;
padding: 0.5rem;
background-color: ${props => props.activeStatus && "#d7dfe9"};
`;
const Sidespan=styled.span`
padding: 0 1rem;
font-weight: ${props => props.activeStatus ? "700" : "500"};
color:${props => props.themed==="Light" ? "#000" : "#fff"};
`;
const SidebarMenuIcon = (props) => {
    const {icons,handleClickSidebarIcon,text,isActive}=props;
    const theme = useContext(UserContext);
    const handlesideicon=()=>{
      handleClickSidebarIcon();
    }
  return (
    <SidebarIcon activeStatus={isActive} themed={theme.themes} onClick={handlesideicon}>
        <FontAwesomeIcon icon={icons} style={{color:isActive &&"red"}}/>
        <Sidespan themed={theme.themes} activeStatus={isActive}>{text}</Sidespan>
    </SidebarIcon>
  )
}

export default SidebarMenuIcon