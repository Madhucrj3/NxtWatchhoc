import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import {TrendDataContainerHeadingDetail, TrendDataContdImg, TrendDataContdDiv, TrendDataContdDivDetail, TrendDataContdDivDetailImg, TrendDataContdDivImg, 
    TrendDataContainerParaDetail,  TrendDataContainerParaDetailDiv, TrendDataContainerParaDetailSpan} from "../Routes/Trending/TrendingStyle";
const TrendDataContd = (props) => {
    const {tsData}=props;
    console.log(tsData);
    const globalData=useContext(UserContext);
    console.log(globalData);
  return (
    <Link to={`/videos/${tsData.id}`} style={{textDecoration:"none"}}>
    <TrendDataContdDiv>
        <TrendDataContdDivImg>
            <TrendDataContdImg src={tsData.thumbnail_url}></TrendDataContdImg>
        </TrendDataContdDivImg>
        <TrendDataContdDivDetail colors={globalData.themes==='Light'?"#000" :"#cbd5e1"}>
            <TrendDataContdDivDetailImg>
                <img style={{width:"50px"}} src={tsData.channel.profile_image_url} alt="propss"/>
            </TrendDataContdDivDetailImg>
            <div>
            <TrendDataContainerHeadingDetail colorst={globalData.themes==='Light'?"#000" :"#fff"}>{tsData.title}</TrendDataContainerHeadingDetail>
            <TrendDataContainerParaDetail>{tsData.channel.name}   </TrendDataContainerParaDetail>
            < TrendDataContainerParaDetailDiv>
                <TrendDataContainerParaDetailSpan> {tsData.view_count} views</TrendDataContainerParaDetailSpan>
                <TrendDataContainerParaDetailSpan>{2023-parseInt(JSON.stringify(tsData.published_at).substring(JSON.stringify(tsData.published_at).length-5))} Years ago</TrendDataContainerParaDetailSpan>
            </ TrendDataContainerParaDetailDiv>
            </div>
        </TrendDataContdDivDetail>
    </TrendDataContdDiv>
    </Link>
  )
}

export default TrendDataContd