import React, { useContext } from 'react'
import styled from 'styled-components';
import { UserContext } from '../App';
const EmptySavedMain=styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: ${props=>props.bcol};
color: ${props=>props.col};
`;
const EmptySavedMain1=styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
const EmptySavedMainimg=styled.img`
/* width: 500px; */
height: 500px;
@media screen and (max-width: 768px) {
  width: 84vw;
    height: 348px;
    max-width: 500px;
}
@media screen and (max-width: 992px) and (min-width: 768px){
  width: 500px;
}
`;
const EMptyh1=styled.h1``;
const EMptyp=styled.p``;
const EmptySaved = (props) => {
  const {src1,alt1,head1,para1}=props;
  const theme=useContext(UserContext);
  return (
      <EmptySavedMain bcol={theme.themes==='Light'?'#fff':'#000'} col={theme.themes==='Light'?'#000':'#fff'}>
      <EmptySavedMain1>
        <EmptySavedMainimg src={src1} alt={alt1}></EmptySavedMainimg>
      </EmptySavedMain1>
      <EMptyh1>{head1}</EMptyh1>
      <EMptyp>{para1}</EMptyp>
    </EmptySavedMain>
  )
}

export default EmptySaved