<<<<<<< Updated upstream
import { Deck } from "./Components/CardDeck";
import { DeckFactory } from "./Components/DeckFactory";
import { CardDeck, CreateDeck } from "./types/CardDeck";

function App() {
	const newDeck: CardDeck = CreateDeck("Cool deck");
	return (
		<>
			<div className="main-menu">
				<DeckFactory></DeckFactory>
				<Deck deck={newDeck}></Deck>
				<Deck deck={newDeck}></Deck>
				<Deck deck={newDeck}></Deck>
				<Deck deck={newDeck}></Deck>
			</div>
		</>
	);
=======
<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => { setCount((count) => count + 1); }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
=======
import { Main } from "./views/cardApp";

function App() {
	// const newDeck: CardDeck = CreateDeck("Cool deck");
	// const newCard: TCard = CreateCard("чашка", "cup");
	return <Main />;
>>>>>>> Stashed changes
>>>>>>> Stashed changes
}

export default App;
