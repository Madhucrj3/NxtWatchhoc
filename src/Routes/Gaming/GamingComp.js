import styled from "styled-components";
export const GameStyled=styled.div`
display: flex;
background-color: ${props=>props.bcol};
`;
export const GameMainComp=styled.div`
 width: 100%;
 padding: 1rem 2rem;
 height: 90vh;
overflow: auto;
`;
export const GameMainIndComp=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`;
export const GameIndividualMainContainer=styled.div`
width:22%;
@media screen and (max-width: 576px) {
   width: 45%;
}
@media screen and (max-width: 900px) and (min-width: 768px){
  width: 30%;
}
@media screen and (max-width: 768px) and (min-width: 576px){
  width: 30%;
}
`;
export const GameIndMain=styled.div`
width: 100%;
margin-bottom: 1rem;
`;
export const GameIndMainDivImg=styled.div`
`;
export const GameIndMainImg=styled.img`
width: 100%;
`;
export const GameIndMaindetail=styled.div``;
export const GameIndMainHeading=styled.h5`
margin-top: 8px;
margin-bottom: 3px;
color: ${props=>props.colorTitle};
`;
export const GameIndMainParagraph=styled.p`
margin-top: 3px;
font-size:12px;
color: ${props=>props.colorParagraph};
`;