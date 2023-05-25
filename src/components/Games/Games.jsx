import React, {useState, useEffect} from 'react';
import api from '../../api';
import { Link } from 'react-router-dom';


function Games() {

const [games, setGames] = useState([])

useEffect(() => {

    const fetchData = async () => {
        const result = await api.get('https://api.twitch.tv/helix/games/top')
        console.log(result);

        let dataArray = result.data.data;
        let finalArray = dataArray.map(game => { 
            let newURL = game.box_art_url /*modif de l'url de l'image*/
                .replace('{width}', '250')
                .replace('{height}', '300');/* remplace les valeurs par défaut par les nouvelles valeurs*/
            game.box_art_url = newURL;
            return game;
        });
        setGames(finalArray);
      }
    fetchData()
}, []);
console.log(games);

  return (
    <div >
        <h1 className='titreGames'>Jeux les plus populaires</h1>
        <div className='flexAccueil'>
        {games.map((game, index) => (
            <div key={index} className='carteGames'>
                <img src={game.box_art_url} alt="jeu profile pic" className='imgCarte' />
                <div className='cardBodyGames'>
                  <h5 className="titreCartesGames">{game.name}</h5>

                  <Link
  to={{
    pathname: `/game/${game.name}/streams`,
    state: { gameID: game.id }
  }}
>
  <div className='btnCarte'>Regarder {game.name}</div>
</Link>
                
                  </div>
                  </div>
        ))}
        </div>
    </div>
  )
}

export default Games;