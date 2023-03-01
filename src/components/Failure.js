import React, { useContext } from 'react'
import styled from 'styled-components';
import { UserContext } from '../App';
export const Failuremain=styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: ${props=>props.colored};
background-color: ${props=>props.bcolored};
padding-bottom: 1rem;
`;
export const FailureMainimgdiv=styled.div`

`;
export const FailureMainimg=styled.img`
width: 300px;
`;
export const Failuremainh3=styled.h1`

`;
export const Failuremainp=styled.p`
margin-top: 0;
font-size: 24px;
`;
export const Failuremainbtn=styled.button`
background-color: #3b82f6;
border: none;
color: #fff;
font-weight: 600;
padding:0.5rem 1rem;
cursor: pointer;
border-radius: 5px;
`;
const Failure = (props) => {
    const {src,alt,page,c1,c2}=props;
    const globalVar=useContext(UserContext);
    console.log(globalVar.themes);
    const handleretry=()=>{
        page();
    }

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:globalVar.hascross?"100%":"82vh",width:"100%"}}>
   <Failuremain colored={globalVar.themes==='Light'? "#000":"#fff"} bcolored={globalVar.themes==='Light'? "#fff":"#000"}>
    <FailureMainimgdiv>
        <FailureMainimg src={src} alt={alt}></FailureMainimg>
    </FailureMainimgdiv>
    <Failuremainh3 >{c1}</Failuremainh3>
    <Failuremainp>{c2}</Failuremainp>
    <Failuremainbtn onClick={handleretry}>Retry</Failuremainbtn>
   </Failuremain>
   </div>
  )
}

export default Failure