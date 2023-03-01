import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import TrendMain from '../../components/TrendMain';
import withFirstHoc from '../../components/withFirstHoc';

const Trending = () => {
  const theme = useContext(UserContext);
  console.log(theme);
  useEffect(() => {
     theme.setstatus("trend");
  },[])
    const navigate=useNavigate();
    useEffect(() => {
     if(localStorage.getItem('token')===null)
     navigate("/login");
    })
    return (
   
          <TrendMain />
    )
}

export default withFirstHoc(Trending);