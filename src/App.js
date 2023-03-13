
import { useState } from 'react';
import './App.css';
import CardsGrid from './Components/CardsGrid';
import './Components/PlayerCard'
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([{first_name: 'guy', last_name: 'poop'}, {first_name: 'foo', last_name: 'bar'}, {first_name: 'unknown',last_name: 'thatoneguy'}])

  axios.get('https://www.balldontlie.io/api/v1/players/237')
    .then((response) => {
      console.log('cool', response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  

  return (
    <div className="App">
      <CardsGrid cards={cards}/>
    </div>
  );
}

export default App;
