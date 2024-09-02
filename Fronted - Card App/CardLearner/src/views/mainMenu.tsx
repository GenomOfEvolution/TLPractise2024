import { Deck } from "../Components/CardDeck";
import { DeckFactory } from "../Components/DeckFactory";
import { CardDeck } from "../Models/CardDeck";
import { useLearnStore } from "../storage/useLearnStore";

export const MainMenu = () => {
	const { app } = useLearnStore();
	return (
		<>
			<div className="main-menu">
				<DeckFactory />
				{app.decks.map((deck: CardDeck, index) => {
					return <Deck key={index} {...deck} />;
				})}
			</div>
		</>
	);
};
