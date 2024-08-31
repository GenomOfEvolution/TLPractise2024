import React from "react";
import icon_cross from "../assets/icon-cross.svg";
<<<<<<< Updated upstream

export const DeckFactory = () => {
=======
import { CardDeck, CreateDeck } from "../types/CardDeck";

type deckFactoryProps = {
	addDeckInStore: (newDeck: CardDeck) => void;
};

export const DeckFactory = (props: deckFactoryProps) => {
	const emptyDeck = CreateDeck("new deck");
>>>>>>> Stashed changes
	return (
		<>
			<div
				className="deck-wrapper"
				onClick={() => {
<<<<<<< Updated upstream
					console.log("creating deck");
=======
					props.addDeckInStore(emptyDeck);
>>>>>>> Stashed changes
				}}
			>
				<div className="factory">
					<img className="factory__item" src={icon_cross} />
				</div>
			</div>
		</>
	);
};
