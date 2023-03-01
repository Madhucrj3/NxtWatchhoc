import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { HomeDataContdIndividualDiv, HomeDataContddivImg, HomeDataContdImg, HomeDataContSec, HomeDataContSecFirst, HomeDataContSecSecond, HomeDataContSecondContainerFirst,
    HomeDataContSecondContainerSecond, HomeDataContSec23, HomeDataContSecondContainerFirstHeading, HomeDataContSecimg } from '../Component';
export const HomeDataCntdInd = (props) => {
    
    const {item}=props;
    const theme=useContext(UserContext);
    
  return (
    <HomeDataContdIndividualDiv>
        <Link to={`/videos/${item.id}`} style={{textDecoration:"none"}}>
        <HomeDataContddivImg>
            <HomeDataContdImg src={item.thumbnail_url} alt="pho"></HomeDataContdImg>
        </HomeDataContddivImg>
        <HomeDataContSec>
            <HomeDataContSecFirst>
                <HomeDataContSecimg src={item.channel.profile_image_url}></HomeDataContSecimg>
            </HomeDataContSecFirst>
            <HomeDataContSecSecond>
                <HomeDataContSecondContainerFirst fcolr={theme.themes==='Light'?'#000':'#fff'}>
                    <HomeDataContSecondContainerFirstHeading>{item.title}</HomeDataContSecondContainerFirstHeading>
                </HomeDataContSecondContainerFirst>
                <HomeDataContSecondContainerSecond fcolr={theme.themes==='Light'?'#000':'#cbd5e1'}>
                    <p style={{fontSize:"12px"}}>{item.channel.name}</p>
                    <HomeDataContSec23>
                <p style={{fontSize:"12px"}}>{item.view_count} views</p>
                <p style={{fontSize:"12px"}}>{2023-parseInt(JSON.stringify(item.published_at).substring(JSON.stringify(item.published_at).length-5))} years ago</p>
                </HomeDataContSec23>
                </HomeDataContSecondContainerSecond>
            </HomeDataContSecSecond>
        </HomeDataContSec>
        </Link>
    </HomeDataContdIndividualDiv>
  )
}
