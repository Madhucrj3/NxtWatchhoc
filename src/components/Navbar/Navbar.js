import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { Link, useNavigate } from "react-router-dom";
import Button from '../Button';
import Logo from '../Logo'
import "./Navbar.css";
import Siderbaricon from '../Siderbaricon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faBars} from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal';
import 'reactjs-popup/dist/index.css';
import PopUps from '../PopUps';
import {DropdownContent, NavbarContainer,NavbarContainerLogo,NavbarContainerLogoutbutton,NavbarContainerMain,NavbarContainerRight, NavbarContainerRightMobileView, NavbarContainerRightMobileViewCurr, NavbarDropdown} from "./NavbarStyled";
const customStyles = (theme)=>({
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    background:"none",
    border:"none",
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.themes==='Light'?"rgb(48 42 42 / 48%)":'rgba(255, 255, 255, 0.50)'
  }
});
function Navbar() {
  const theme = useContext(UserContext);
  const navigate = useNavigate();
  const handleClickTheme=()=>{
    theme.handletheme();
  }
  const handleClickTheme1=()=>{
    console.log("Clicked")
  }
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleNavbarClick=()=>{
    navigate("/");
  }
  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <NavbarContainer>
      <NavbarContainerMain>
        <NavbarContainerLogo>
            <Logo logoStyles={{width:"120px",cursor:"pointer"}} handleClicklogo={handleNavbarClick} src1={theme.themes==="Light"? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"} alt1="gflogo"/>
        </NavbarContainerLogo>
        <NavbarContainerRight>
        <Logo logoStyles={{width:"30px",height:"30px",padding: '0 1rem',cursor:"pointer"}} handleClicklogo={handleClickTheme} src1={theme.themes==="Light"? "https://res.cloudinary.com/dqgpcuxoj/image/upload/v1676033047/moon_1_shovyh.png" : "https://res.cloudinary.com/dqgpcuxoj/image/upload/v1676290605/pattern_2_1_cvjuxo.svg"} alt1="shift"/>
        <NavbarContainerLogoutbutton>
        <Logo logoStyles={{width:"30px",height:"30px",padding: '0 1rem'}} handleClicklogo={handleClickTheme1} src1="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" alt1="plogo"/>
        <Button text="Logout" btnstyle={{backgroundColor: "#fff",
    border: "1px solid #4f46e5",
    borderRadius: "3px",
    height: "30px",
    width: "65px",
  
    cursor: "pointer",
    color: "#4f46e5"}} handleCred={openModal}/>
        </NavbarContainerLogoutbutton>
        <NavbarContainerRightMobileView>
          <NavbarContainerRightMobileViewCurr>
          
          <NavbarDropdown>
           
           <FontAwesomeIcon class="dropbtn" icon={faBars} style={{width:"30px" ,height:"30px",color:theme.themes==="Light"?"#000":"#fff"}} />
            <DropdownContent>
            <Siderbaricon />
           </DropdownContent>
           </NavbarDropdown>
          </NavbarContainerRightMobileViewCurr>
          <NavbarContainerRightMobileViewCurr onClick={openModal}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} style={{width:"30px" ,height:"30px",color:theme.themes==="Light"?"#000":"#fff"}}/>
          </NavbarContainerRightMobileViewCurr>
        </NavbarContainerRightMobileView>
     <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles(theme)}
        contentLabel="Logout Modal"
      >
        <PopUps closeModal={closeModal} handleLogout={handleLogout}/>
      </Modal>
        </NavbarContainerRight>
      </NavbarContainerMain>
      
    </NavbarContainer>
  )
}

export default Navbar