import React from 'react'
import { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../App';
import Navbar from './Navbar/Navbar';
import SideBarContd from './SideBarContainer';
const WrapperStyledComponent=styled.div`
   background-color: ${props=>props.bcol};
   display: flex;
`;
const withFirstHoc =  (WrappedComponent) => {
    
const ComponentWithData = () => {
     const theme = useContext(UserContext);
        return (
            <>
             <Navbar />
            <WrapperStyledComponent bcol={theme.themes==='Light'?'#f1f5f9':'#000'}>
          <SideBarContd />
          <WrappedComponent />
          </WrapperStyledComponent>
    </>
        );
      };
    return (
    ComponentWithData
  )
}

export default withFirstHoc