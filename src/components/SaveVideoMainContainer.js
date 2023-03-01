import { faVideo } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../App';
import { SavedVideoMain, SavedVideoMaindet } from '../Routes/SavedVideo/SaveVideoComp'
import EmptySaved from './EmptySaved';
import SideMainHead from './SideMainHead';
import TrendDataContd from './TrendDataContd';

const SaveVideoMainContd = () => {
    const [saveData, setsaveData] = useState([]);
    const globalData=useContext(UserContext);
    useEffect(() => {
        setsaveData(globalData.savedVideo);
    }, [])
    console.log(globalData.savedVideo);
  return (
    <SavedVideoMain>
      {saveData.length===0? <EmptySaved head1="No saved Video Found" para1="you can save your video while watching them" src1="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" alt1="nosave" /> :
      <div>
        <SideMainHead titleName="Saved Videos" iconss={faVideo}/>
        <SavedVideoMaindet>
            { saveData.map(saveindData=> <TrendDataContd key={saveData.id} tsData={saveindData} />)}
        </SavedVideoMaindet>
        </div>}
    </SavedVideoMain>
  )
}

export default SaveVideoMainContd