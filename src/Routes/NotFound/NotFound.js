import React, { useContext } from 'react'
import { UserContext } from '../../App'
import EmptySaved from '../../components/EmptySaved'
import Navbar from '../../components/Navbar/Navbar'
import SideBarContd from '../../components/SideBarContainer'
import withFirstHoc from '../../components/withFirstHoc'
import { SaveStyled } from '../SavedVideo/SaveVideoComp'

const NotFound = () => {
  const theme=useContext(UserContext);
  return (
      <div style={{width:"100%"}}>
        <EmptySaved head1="Page Not Found" para1="We are Sorry, the page you requested could not be found" src1={theme.themes==='Light'?"https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"} alt1="empty"/>
      </div>
  )
}

export default withFirstHoc(NotFound);