
import { useState } from 'react';
import './App.css';
import CardsGrid from './Components/CardsGrid';
import './Components/PlayerCard'
import getPlayers from './assets/playerids';
import Search from './Components/Search';

function App() {
  const [cards, setCards] = useState([])
  
  /*
  const updateCardsArray = (item) => {
    if (item) {
      setCards([...cards, item])
    }
  }
  */

  //IF the player is successfully found AND the API request is successful, I need to transform the response from balldontlie into a new object that will populate the cards
  //getPlayers(findPlayerid('Lebron James'))


  return (
    <div className="App">
      <Search getPlayers={getPlayers}/>
      <CardsGrid cards={cards}/>
    </div>
  );
}

export default App;
