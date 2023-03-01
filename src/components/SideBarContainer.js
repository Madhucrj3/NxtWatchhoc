import React, { useContext } from 'react'
import styled from 'styled-components';
import SocialMediaIcon from './SocialMediaIcon';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import Siderbaricon from './Siderbaricon';
const SidebarMenu=styled.div`
 height:90vh;
 padding:1rem 2rem;
 width: 235px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 background-color: ${props => props.theme==="Light" ? "#fff" : "#313131"};
 color:${props => props.theme==="Light" ? "#000" : "#fff"};
  @media screen and (max-width: 576px) {
    display: none;
}
@media screen and (max-width: 768px) and (min-width: 576px){
  display: none;
}
`;
const SidebarMenuSecContainer=styled.div``;
const SidebarContactUsHeading=styled.h4``;
const SidebarParaGraph=styled.p`
font-weight:400;
`;
const SideBarSocialMedia=styled.div`
display:flex;
`;
const SideBarContd = () => {
  const val=useContext(UserContext);
  console.log(val);
  const navigate=useNavigate();

  return (
    <SidebarMenu theme={val.themes}>
      <Siderbaricon />
      <SidebarMenuSecContainer>
      <SidebarContactUsHeading>CONTACT US</SidebarContactUsHeading>
      <SideBarSocialMedia>
        <SocialMediaIcon src1="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" alt="face"/>
        <SocialMediaIcon src1="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" alt="twitt"/>
        <SocialMediaIcon src1="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" alt="link"/>
      </SideBarSocialMedia>
      <SidebarParaGraph>Enjoy! Now to see our channels and recommendations</SidebarParaGraph>
      </SidebarMenuSecContainer>
    </SidebarMenu>
  )
}

export default SideBarContd