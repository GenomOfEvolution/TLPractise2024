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
}

export default App;
