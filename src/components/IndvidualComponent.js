import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube';
import { HomeDataContSec23 } from '../Component';
import { faThumbsDown ,faThumbsUp,faVideo} from '@fortawesome/free-solid-svg-icons'
import { IndividualCompDetailed, IndividualCompDetaileddivimg, IndividualCompDetailedimg, IndividualCompDetailedmain, IndividualVidecompoline, IndividualVideodiv, IndividualVideoREact, IndividualVideoREactDetail, IndividualVideoREactDetail2div, IndividualVideoREactDetail2divlike, IndividualVideoREactDetail2divlikecontd, IndividualVideoREactDetailh1 } from '../Routes/IndividualVideo/IndividualVideocom';
import { UserContext } from '../App';
const IndvidualComp = (props) => {
    const {indData,id}=props;
    const globalData=useContext(UserContext);
    const [indlike, setindlike] = useState(false);
    const [inddislike, setinddislike] = useState(false);
    const [indsavevideo, setindsavevideo] = useState(false);
    const {like,setlike,dislike,setdislike,savedVideo,setsavedVideo}=globalData;
    useEffect(() => {
      handleLikeuse();
      handledislikeuse();
      handlesavevideouse();
    }, [])
    const handleLikeuse=()=>{
      if(like.includes(id))
      {
        setindlike(true);
      }
    }
    const handledislikeuse=()=>{
      if(dislike.includes(id))
      {
        setinddislike(true);
      }
    }
    const handlesavevideouse=()=>{
      const result = savedVideo.filter(checkAdult);
      console.log(result);
      if(result.length>0)
      {
        setindsavevideo(true);
      }
    }

const checkAdult=(age)=> {
  return age.id === indData.id;
}
    const handleLike=()=>{
      if(dislike.includes(id))
      {
        const array=dislike;
        const index = array.indexOf(id);
        if (index > -1) {
         array.splice(index, 1); 
        }
        setdislike(array);
        setinddislike(false);
      }
      if(like.includes(id))
      {
        const array=like;
        const index = array.indexOf(id);
        if (index > -1) {
         array.splice(index, 1); 
        }
        setlike(array);
        setindlike(false);
      }
      else
      {
        const curr=like;
        curr.push(id);
        setlike(curr);
        setindlike(true);
      }
      console.log(like);
    }
    const handledisLike=()=>{
      if(like.includes(id))
      {
        const array=like;
        const index = array.indexOf(id);
        if (index > -1) {
         array.splice(index, 1); 
        }
        setlike(array);
        setindlike(false);
      }
      if(dislike.includes(id))
      {
        const array=dislike;
        const index = array.indexOf(id);
        if (index > -1) {
         array.splice(index, 1); 
        }
        setdislike(array);
        setinddislike(false);
      }
      else
      {
        const curr=dislike;
        curr.push(id);
        setdislike(curr);
        setinddislike(true);
      }
      console.log(like);
    }
    const handleSaveVideo=()=>{
      const result = savedVideo.filter(checkAdult);
      if(result.length>0)
      {
        console.log(result);
        const array=savedVideo;
        const index = array.findIndex(checkAge1);
        if (index > -1) {
         array.splice(index, 1); 
        }
        setsavedVideo(array);
        setindsavevideo(false);
      }
      else
      {
        const curr=savedVideo;
        curr.push(indData);
        console.log("came curr",curr)
        setsavedVideo(curr);
        setindsavevideo(true);
      }
    }
    function checkAge1(age) {
      return age.id === indData.id;
    }
  return (
    <IndividualVideodiv>
        <IndividualVideoREact>
        <ReactPlayer url={indData.video_url} width="auto" height="100%"  controls={true} />
        </IndividualVideoREact>
        <IndividualVideoREactDetail colors={globalData.themes==='Light'?"#000":"#fff"}>
            <IndividualVideoREactDetailh1>{indData.title}</IndividualVideoREactDetailh1>
            <IndividualVideoREactDetail2div>
                <HomeDataContSec23>
                <p style={{fontSize:"12px",marginRight:"0.3rem"}}>{indData.view_count} views</p>
                <p style={{fontSize:"12px"}}>{2023-parseInt(JSON.stringify(indData.published_at).substring(JSON.stringify(indData.published_at).length-5))} years ago</p>
                </HomeDataContSec23>
                <IndividualVideoREactDetail2divlikecontd>
                <IndividualVideoREactDetail2divlike>
                <FontAwesomeIcon icon={faThumbsUp} onClick={handleLike} style={{color:indlike===true && "blue"}}/>
                <span style={{marginLeft:"0.3rem",color:indlike===true && "blue"}} onClick={handleLike} >Like</span>
                </IndividualVideoREactDetail2divlike>
                <IndividualVideoREactDetail2divlike>
                <FontAwesomeIcon icon={faThumbsDown} onClick={handledisLike} style={{color:inddislike===true && "blue"}} />
                <span style={{marginLeft:"0.3rem",color:inddislike===true && "blue"}} onClick={handledisLike}>Dislike</span>
                </IndividualVideoREactDetail2divlike>
                <IndividualVideoREactDetail2divlike>
                <FontAwesomeIcon icon={faVideo} onClick={handleSaveVideo} style={{color:indsavevideo===true && "blue"}}/>
                <span style={{marginLeft:"0.3rem",color:indsavevideo===true && "blue"}} onClick={handleSaveVideo}>save</span>
                </IndividualVideoREactDetail2divlike>
                </IndividualVideoREactDetail2divlikecontd>
            </IndividualVideoREactDetail2div>
            <IndividualVidecompoline></IndividualVidecompoline>
            <IndividualCompDetailed>
                <IndividualCompDetaileddivimg>
                    <IndividualCompDetailedimg src={indData.channel.profile_image_url} alt="detlogo"></IndividualCompDetailedimg>
                </IndividualCompDetaileddivimg>
                <IndividualCompDetailedmain>
                  <h5>{indData.channel.name}</h5>
                  <p>{indData.channel.subscriber_count} subscribers</p>
                  <p>{indData.description}</p>
                </IndividualCompDetailedmain>
            </IndividualCompDetailed>
        </IndividualVideoREactDetail>
    </IndividualVideodiv>
  )
}

export default IndvidualComp