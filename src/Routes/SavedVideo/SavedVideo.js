import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import SaveVideoMainContd from '../../components/SaveVideoMainContainer';
import withFirstHoc from '../../components/withFirstHoc';
const SavedVideo = () => {
  const theme = useContext(UserContext);
  useEffect(() => {
    theme.setstatus("saved");
    },[])
    const navigate=useNavigate();
    useEffect(() => {
     if(localStorage.getItem('token')===null)
     navigate("/login");
    })
    return (
    
        <SaveVideoMainContd />
    )
}

export default withFirstHoc(SavedVideo);