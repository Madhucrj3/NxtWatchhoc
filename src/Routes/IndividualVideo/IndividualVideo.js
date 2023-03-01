import React, { useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import IndvidualComp from '../../components/IndvidualComponent';
import Failure from '../../components/Failure';
import { UserContext } from '../../App';
import Loader1 from '../../components/Loader';
import withFirstHoc from '../../components/withFirstHoc';
const IndividualVideo = () => {
  const {id}=useParams();
  const [indData, setindData] = useState([])
  const [isLoading,setisLoading]=useState(true);
  const [indfail, setindfail] = useState(false)
  const theme=useContext(UserContext);
  useEffect(() => {
    fetchIndThId(localStorage.getItem('token'));
  },[])
  const fetchIndThId=async (token)=>{
    const URL = `https://apis.ccbp.in/videos/${id}`
    const response = await fetch(URL, {
      method: "GET",
        headers: {
          'Content-Type': 'application/json',
           'Authorization': `Bearer ${token}`,
        },
    })
    .then((response) => {return response.json()})
      .catch((error) => {
        setindfail(true);
        setisLoading(false);
        console.error('Error:', error);
      });
      if(response.status_code===400)
      console.log("error");
      else{
        setindfail(false);
        setindData(response.video_details);
        setisLoading(false);
      }
  }
  const handleRetryPage=()=>{
    fetchIndThId(localStorage.getItem('token'));
  }
  return (
    <div>   
          {isLoading ===true?<Loader1 /> :
          indfail===true?(<Failure src={theme.themes==='Light'?"https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"} alt="fail" page={handleRetryPage} c1="Oops! somthing Went Wrong" c2="We are having some trouble to complete tour request Please try again"/>):
           <IndvidualComp indData={indData} id={id}/>}
      </div>
  )
}

export default withFirstHoc(IndividualVideo)