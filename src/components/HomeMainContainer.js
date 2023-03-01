import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
import { HomeDataCOntd, HomeMainContainerbanner, HomeMainContainerbannerbtn, HomeMainContainerbannerpara, HomeMainContainer, HomeBannerCross, HomeSearchContd, HomeSearchImgdiv, HomeSearchInput } from '../Component';
import { faXmark,faSearch} from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HomeDataCntdInd } from './HomeDataContainerIndvidual';

import Failure, { Failuremain } from './Failure';
import Loader1 from './Loader';
const HomeMainContd = () => {
    const theme = useContext(UserContext);
    const [search, setsearch] = useState("");
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)
    const [failure, setfailure] = useState(false);
    const navigate=useNavigate();
    const handleClickTheme2=()=>{
        navigate("/");
    }
    useEffect(() => {
      if(search===""){
       fetchItem(localStorage.getItem("token"));
      }
    }, [search])
    const fetchItem=async (token)=>{
        const URL = 'https://apis.ccbp.in/videos/all?search='+search;
        const Response = await fetch(URL, {
          method: "GET",
            headers: {
              'Content-Type': 'application/json',
               'Authorization': `Bearer ${token}`,
            },
        })
        .then((response) => {return response.json()})
      .catch((error) => {
        setloading(false);
      setfailure(true);
        console.error('Error:', error);
      });
      console.log(Response);
      if(parseInt(Response.status_code)>=400){
      setloading(false);
      setfailure(true);
      console.log("error");
      }
      else{
      setdata(Response.videos);
      setloading(false);
      setfailure(false);
      }
      }
    const handleBannerCross=()=>{
        theme.sethasBannerCross(false);
    }
    const handlehomeSearch=(e)=>{
        setsearch(e.target.value);
    }
    const handleSearchHome=()=>{
        fetchItem(localStorage.getItem("token"));
    }
    const handleclearSearch=()=>{
      setsearch("");
    }
    const handleRetryPage=()=>{
      fetchItem(localStorage.getItem('token'));
    }
  return (
    <HomeMainContainer>
        {theme.hasBannerCross && <HomeMainContainerbanner>
            <Logo handleClicklogo={handleClickTheme2} logoStyles={{width:"150px",marginTop:"2rem",marginBottom:"1rem"}} src1="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" alt1="logo" />
            <HomeMainContainerbannerpara >Buy Nxt Watch Premium plans with UPI</HomeMainContainerbannerpara>
            <HomeMainContainerbannerbtn>
                GET IT NOW
            </HomeMainContainerbannerbtn>
            <HomeBannerCross onClick={handleBannerCross}>
            <FontAwesomeIcon icon={faXmark} />
            </HomeBannerCross>
        </HomeMainContainerbanner>}
        <HomeSearchContd>
            <HomeSearchInput placeholder='Search' value={search} onChange={handlehomeSearch}></HomeSearchInput>
            <HomeSearchImgdiv onClick={handleSearchHome}>
                <FontAwesomeIcon icon={faSearch} />
            </HomeSearchImgdiv>
        </HomeSearchContd>
        <HomeDataCOntd>
            {
               loading===true? (
                <Loader1 />
                
              ):  ((failure===true)?(<Failure src={theme.themes==='Light'?"https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png":"https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"} alt="fail" page={handleRetryPage} c1="Oops! somthing Went Wrong" c2="We are having some trouble to complete tour request Please try again"/>):(
                (data.length===0)?(<Failure src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"  alt="nosearch" page={handleclearSearch} c1="No Search result Found" c2="Try Different key word or remove search filter"/>)
                :
                data.map(item=><HomeDataCntdInd item={item} key={item.id}/>)))
            }
        </HomeDataCOntd>
    </HomeMainContainer>
  )
}

export default HomeMainContd