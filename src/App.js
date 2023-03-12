
import { useState } from 'react';
import './App.css';
import CardsGrid from './Components/CardsGrid';
import './Components/PlayerCard'

function App() {
  const [cards, setCards] = useState([{name: 'guy'}, {name: 'foo'}, {name: 'thatoneguy'}])

  return (
    <div className="App">
      <CardsGrid cards={cards}/>
    </div>
  );
}

export default App;
