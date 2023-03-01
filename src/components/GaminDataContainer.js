import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import { GameIndMain, GameIndividualMainContainer, GameIndMaindetail, GameIndMainDivImg, GameIndMainHeading, GameIndMainImg, GameIndMainParagraph } from '../Routes/Gaming/GamingComp';

const GaminDataContd = (props) => {
    const globalVar=useContext(UserContext);
    console.log(globalVar);
    const {game}=props;
    console.log(game);
  return (
    <GameIndividualMainContainer>
      <Link to={`/videos/${game.id}`} style={{textDecoration:"none"}}>
    <GameIndMain>
        <GameIndMainDivImg>
            <GameIndMainImg src={game.thumbnail_url} alt="game" />
        </GameIndMainDivImg>
        <GameIndMaindetail>
            <GameIndMainHeading colorTitle={globalVar.themes==='Light'?'#000':"#fff"}>{game.title}</GameIndMainHeading>
            <GameIndMainParagraph colorParagraph={globalVar.themes==='Light'?'#000':"#cbd5e1"}>{game.view_count} Watching WorldWide</GameIndMainParagraph>
        </GameIndMaindetail>
    </GameIndMain>
    </Link>
    </GameIndividualMainContainer>
  )
}

export default GaminDataContd