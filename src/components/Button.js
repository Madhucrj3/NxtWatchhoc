import React from 'react'
import styled from 'styled-components';
const LoginButtonContainer=styled.div``;
const LoginButton=styled.button``;
const Button = (props) => {
    const {btnstyle,handleCred,text}=props;
    const handleCredential=()=>{
        handleCred();
    }
  return (
    <LoginButtonContainer>
          <LoginButton style={btnstyle} onClick={handleCredential}>{text}</LoginButton>
    </LoginButtonContainer>
  )
}
export default Button