import React, { useContext, useEffect, useState } from 'react'
import { TrendMainComp, TrendMainData } from '../Routes/Trending/TrendingStyle'
import SideMainHead from './SideMainHead'
import {faFireFlameCurved} from '@fortawesome/free-solid-svg-icons'
import TrendDataContd from './TrendDataContd'
import Failure from './Failure'
import { UserContext } from '../App'
import Loader1 from './Loader'
const TrendMain = () => {
    const [tendData, settendData] = useState([]);
    const [trenLoad, settrenLoad] = useState(true);
    const [trendFail, settrendFail] = useState(false)
    const theme=useContext(UserContext);
    useEffect(() => {
    getTrending(localStorage.getItem('token'));
    console.log(tendData);
    }, [])
    
const getTrending=async (token)=>{
    const URL = 'https://apis.ccbp.in/videos/trending';
    const response = await fetch(URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    .then((response) => {return response.json()})
    .catch((error) => {
      settrendFail(true);
      settrenLoad(false);
        console.error('Error:', error);
    });
    if(parseInt(response.status_code)>=400){
      console.log("error");
      settrendFail(true);
      settrenLoad(false);
    }
      else{
        console.log("wytufdg");
        settendData(response.videos);
        settrenLoad(false);
        settrendFail(false)
      }
    }
    const handleRetryPage=()=>{
      getTrending(localStorage.getItem('token'))
    }
    console.log(tendData)
  return (
    <TrendMainComp>
      {trendFail===true?(<Failure src={theme.themes==='Light'?"https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"} alt="fail" page={handleRetryPage} c1="Oops! somthing Went Wrong" c2="We are having some trouble to complete tour request Please try again"/>):
      <div>
        <SideMainHead titleName="Trending" iconss={faFireFlameCurved}/>
        <TrendMainData>
        {trenLoad===true ?(<Loader1 />) :(
          tendData.map((trend)=><TrendDataContd key={trend.id} tsData={trend}/>))}
        </TrendMainData>
        </div>}
    </TrendMainComp>
  )
}

export default TrendMain