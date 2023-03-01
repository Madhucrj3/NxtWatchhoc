import './App.css';
import { useState, createContext ,useEffect} from "react";
import Pages from './Routes/Routes';
export const UserContext = createContext()
function App() {
  const [themes, settheme] = useState("Light");
  const [like, setlike] = useState([]);
  const [dislike, setdislike] = useState([]);
  const [hasBannerCross, sethasBannerCross] = useState(true)
  const [savedVideo, setsavedVideo] = useState([]);
  const handletheme=()=>{
    if(themes==="Light")
    settheme("Dark");
    else
    settheme("Light");
  }
  const [status,setstatus]=useState("");
  useEffect(() => {
    console.log("came savedVideo context",savedVideo)
  }, [savedVideo])
  const providerValue = {
    themes,
    settheme,
    handletheme,
    status,
    setstatus,
    like,
    dislike,
    savedVideo,
    setlike,
    setdislike,
    setsavedVideo,
    hasBannerCross,
    sethasBannerCross
  };
  return (
    <UserContext.Provider value={providerValue}>
      <div style={{backgroundColor: themes==='Dark' && 'rgb(49, 49, 49)'}}>
       <Pages />
       </div>
     </UserContext.Provider>
  );
}

export default App;
