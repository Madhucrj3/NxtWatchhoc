import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../App';
const Popupdiv=styled.div`
padding: 2rem;
border-radius: 8px;
background-color: ${props=>props.colorback};
`;
const Popupdivh1=styled.h4`
text-align: center;
color: ${props=>props.colorh1};
`;
const Popupbtndiv=styled.div`
display: flex;
justify-content: space-around;
`;
const Popupbtn1=styled.button`
background-color: #000;
color: #fff;
border:2px solid #fff;
padding:0.5rem 1rem;
cursor: pointer;
`;
const Popupbtn2=styled.button`
background-color: #3b82f6;
border: none;
color: #fff;
font-weight: 600;
padding:0.5rem 1rem;
cursor: pointer;
`;
const PopUps = (props) => {
  const {closeModal,handleLogout}=props;
  const handelCancelLogout=()=>{
    closeModal();
  }
  const hanleConfirmLogout=()=>{
    handleLogout();
  }
  const globalvariable=useContext(UserContext);
  console.log(globalvariable);
  return (
    <Popupdiv colorback={globalvariable.themes==='Light'?'#fff' :"#000"}>
        <Popupdivh1 colorh1={globalvariable.themes==='Light'?'#000' :"#fff"}>Are You sure you want to logout?</Popupdivh1>
        <Popupbtndiv>
            <Popupbtn1 onClick={handelCancelLogout}>Cancel</Popupbtn1>
            <Popupbtn2 onClick={hanleConfirmLogout}>Confirm</Popupbtn2>
        </Popupbtndiv>
    </Popupdiv>
  )
}

export default PopUps