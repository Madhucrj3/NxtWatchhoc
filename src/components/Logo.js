import React from 'react'
import styled from 'styled-components';
const ImageContainerLogo=styled.img``;
const Logo = (props) => {
    const {logoStyles,src1,alt1,handleClicklogo}=props;
    const handleClick=()=>{
      handleClicklogo();
    }
  return (
        <ImageContainerLogo style={logoStyles} src={src1} alt={alt1} onClick={handleClick}/>
  )
}

export default Logo