import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import styled from 'styled-components';
import { UserContext } from '../App';
export const SideMainHeaddiv=styled.div`
display: flex;
align-items: center;
margin-bottom: 1rem;
`;
export const SideMainHeaddivimg=styled.div`
padding-right:12px;
`;
export const SideMainHeadh1=styled.h1`
color:${props=>props.colors==='Light'?"#000":"#fff"};
`;
const SideMainHead = (props) => {
    const globalvar=useContext(UserContext);
    const {titleName,iconss}=props;
  return (
    <SideMainHeaddiv >
        <SideMainHeaddivimg>
           <FontAwesomeIcon icon={iconss} style={{color:"red",height:"30px"}}/>
        </SideMainHeaddivimg>
        <SideMainHeadh1 colors={globalvar.themes}>
            {titleName}
        </SideMainHeadh1>
    </SideMainHeaddiv>
  )
}

export default SideMainHead