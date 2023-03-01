import {faGamepad} from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useEffect, useState } from 'react'
import { GameMainComp, GameMainIndComp } from '../Routes/Gaming/GamingComp'
import GaminDataContd from './GaminDataContainer'
import SideMainHead from './SideMainHead'
import Failure from './Failure'
import { UserContext } from '../App'
import {  useNavigate } from 'react-router-dom'
import Loader1 from './Loader'
const GamingMain = () => {
  const [gamseData, setgamseData] = useState([]);
  const [gameLoading, setgameLoading] = useState(true);
  const [gameFail, setgameFail] = useState(false);
  const theme=useContext(UserContext);
  const navigate=useNavigate();
  useEffect(() => {
  getTrending(localStorage.getItem('token'));
  }, [])
  const getTrending=async (token)=>{
    const URL = 'https://apis.ccbp.in/videos/gaming';
    const response = await fetch(URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    .then((response) => {return response.json()})
    .catch((error) => {
      setgameFail(true);
      setgameLoading(false);
        console.error('Error:', error);
    });
    if(response.status_code===400)
      console.log("error");
      else{
        setgameFail(false);
        setgamseData(response.videos);
        setgameLoading(false);
      }
    }
    const handleRetryPage=()=>{
      getTrending(localStorage.getItem('token'));
      navigate("/gaming")
    }
  return (
    <GameMainComp>
      {gameFail===true?(<Failure src={theme.themes==='Light'?"https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"} alt="fail" page={handleRetryPage} c1="Oops! somthing Went Wrong" c2="We are having some trouble to complete tour request Please try again"/>):
      <div>
        <SideMainHead titleName="Gaming" iconss={faGamepad}/>
        <GameMainIndComp>
          {gameLoading===true ?((<Loader1 />)): gamseData.map(game=> <GaminDataContd key={game.id} game={game}/>)}
        </GameMainIndComp>
        </div>}
    </GameMainComp>
  )
}

export default GamingMain