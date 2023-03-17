
import { useState } from 'react';
import './App.css';
import CardsGrid from './Components/CardsGrid';
import './Components/PlayerCard'
import { getPlayers } from './assets/playerids';
import Search from './Components/Search';
import players from './assets/players.json'

function App() {
  const [cards, setCards] = useState([])

  const findPlayerid = (requestedName) => {
    let matchingPlayer = players.find(p => requestedName.toLowerCase() === p.player.toLowerCase())
    console.log(matchingPlayer)
    return matchingPlayer ? matchingPlayer.id : null;
  }
  
  //
  const updateCardsArray = (item) => {
    if (item) {
      setCards([...cards, item])
    }
  }

  //IF the player is successfully found AND the API request is successful, I need to transform the response from balldontlie into a new object that will populate the cards
  //getPlayers(findPlayerid('Lebron James'))

  return (
    <div className="App">
      <Search findPlayerid={findPlayerid} getPlayers={getPlayers}/>
      <CardsGrid cards={cards}/>
    </div>
  );
}

export default App;
