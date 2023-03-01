import React from 'react';
import styled from 'styled-components';
const SocIcon=styled.div``;
const SocImg=styled.img`
height:25px;
width: 25px;
margin-right: 1rem;
`;
const SocialMediaIcon = (props) => {
    const {src1,alt1}=props;
  return (
    <SocIcon>
        <SocImg src={src1} alt={alt1}></SocImg>
    </SocIcon>
  )
}

export default SocialMediaIcon